import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';

var translateService = Ember.Object.create({
        translateKey: function( data ) {
            this.set( 'key', data.key );
            this.set( 'pluralKey', data.pluralKey );
            this.set( 'pluralCount', data.pluralCount );
            this.set( 'parameters', data.parameters );

            return 'TRANSLATE: ' + data.key;
        }
    });

moduleForComponent( 'sl-translate', 'Unit - component:sl-translate' );

/**
 * Ensure haven't broken any default behavior of Ember, since manipulate properties passed to the component
 * A side effect of this test is the appearance that core Ember functionality is being tested
 */
test( 'Can be used alongside other properties or attribute bindings', function() {
    var component  = this.subject({
            translateService : translateService,
            key              : 'key_alongside',
            tagName          : 'h1',
            classNames       : [ 'testClass' ]
        }),
        $component = this.append();

    equal( $component.prop( 'tagName' ), 'H1' );
    equal( $component.text(), 'TRANSLATE: key_alongside' );
    equal( $component.prop( 'class'), ['ember-view testClass'] );
});

test( 'On initialization, extractParameterKeys() filters passed parameters', function() {
    var component = this.subject({
            key         : 'the_key',
            pluralKey   : 'plural_key',
            pluralCount : 'plural_count',
            $0          : 'a',
            $1Binding   : 'b',
            $2          : 'c'
        });

    deepEqual( component.get( 'parameters' ).sort(), [ '$0', '$1', '$2' ] );
});

test( 'On initialization, extractParameterKeys() filters passed parameters to be bound', function() {
    var component = this.subject({
            key         : 'the_key',
            pluralKey   : 'plural_key',
            pluralCount : 'plural_count',
            $0          : 'a',
            $1Binding   : 'b',
            $2          : 'c'
        });

    deepEqual( component.get( 'observedParameters' ), [ '$1' ] );
});

test( 'setTranslatedString() sets translatedString property with value from translateString()', function() {
    var component = this.subject();

    component.translateString = function() {
        return 'test value';
    };

    component.setTranslatedString();

    equal( component.get( 'translatedString' ), 'test value' );
});

test( 'translateString() calls translateKey() on the translation service', function() {
    var component = this.subject({
            translateService : translateService,
            key              : 'the_key',
            pluralKey        : 'plural_key',
            pluralCount      : 'plural_count',
            $0               : 'a',
            $1               : 'b'
        }),
        $component = this.append();

    equal( translateService.get( 'key' ), 'the_key' );
    equal( translateService.get( 'pluralKey' ), 'plural_key' );
    equal( translateService.get( 'pluralCount' ), 'plural_count' );
    deepEqual( translateService.get( 'parameters' ), { $0: 'a', $1: 'b' } );
});

test( 'willInsertElement() calls setTranslatedString()', function() {
    var component                    = this.subject(),
        setTranslatedStringWasCalled = false;

    component.setTranslatedString = function() {
        setTranslatedStringWasCalled = true;
    };

    // Render in DOM to fire willInsertElement()
    this.append();

    equal( setTranslatedStringWasCalled, true );
});

test( 'willInsertElement() adds observers to each entry in observedParameters property to call setTranslatedString()', function() {
    var component = this.subject({
            translateService : translateService,
            key              : 'the_key',
            $0Binding        : 'a',
            $1               : 'b'
        }),
        setTranslatedStringWasCalled = false,
        $component;

    component.setTranslatedString = function() {
        setTranslatedStringWasCalled = true;
    };

    // Render in DOM to fire willInsertElement()
    $component = this.append();

    // Reset, as willInsertElement() calls setTranslatedString()
    setTranslatedStringWasCalled = false;

    Ember.run( function(){
        component.set( '$0', 'c' );
    });

    equal( setTranslatedStringWasCalled, true );
});

test( 'willDestroyElement() removes observers', function() {
    var component = this.subject({
            translateService : translateService,
            key              : 'the_key',
            $0Binding        : 'a',
            $1               : 'b'
        }),
        setTranslatedStringWasCalled = false,
        $component;

    component.setTranslatedString = function() {
        setTranslatedStringWasCalled = true;
    };

    // Render in DOM to fire willInsertElement()
    $component = this.append();

    // Reset, as willInsertElement() calls setTranslatedString()
    setTranslatedStringWasCalled = false;

    component.willDestroyElement();

    Ember.run( function(){
        component.set( '$0', 'c' );
    });

    equal( setTranslatedStringWasCalled, false );
});
