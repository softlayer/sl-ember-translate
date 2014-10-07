import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import ComponentUnderTest from 'sl-translate/components/sl-translate';

var App;

moduleForComponent( 'sl-translate', 'Unit - component:sl-translate', {
    setup: function() {
        var TS = Ember.Object.create({
            translateKey: function( data ) {
                this.set( 'key', data.key );
                this.set( 'pluralKey', data.pluralKey );
                this.set( 'pluralCount', data.pluralCount );
                this.set( 'parameters', data.parameters );

                return 'TRANSLATE: ' + data.key;
            }
        });

        App = startApp();

        App.__container__.register( 'translateService:main', TS, { instantiate: false } );
    },

    teardown: function() {
        Ember.run( App, App.destroy );
    }
});

test( 'Renders as a span tag with no classes', function() {
    var component = this.subject();
    component.container = App.__container__;
    component.translateService = App.__container__.lookup( 'translateService:main' );

    equal( this.$().prop( 'tagName' ), 'SPAN' );
    equal( this.$().prop( 'class'), 'ember-view' );
});

test( 'DOM and content of rendered translation', function() {
    var component = this.subject({
        key: 'the_key'
    });
    component.container = App.__container__;
    component.translateService = App.__container__.lookup( 'translateService:main' );

    component.translateString();

    equal( this.$().text(), 'TRANSLATE: the_key' );
    ok( /metamorph-[0-9]*-start/.test( this.$().prop( 'firstChild' ).id ) );
    ok( /metamorph-[0-9]*-end/.test( this.$().prop( 'lastChild' ).id ) );
});

test( 'translatedString property defaults to null', function() {
    equal( ComponentUnderTest.prototype.translatedString, null );
});

test( 'parameters property defaults to null', function() {
    equal( ComponentUnderTest.prototype.parameters, null );
});

test( 'extractParameterKeys() fires on init', function() {
    deepEqual( this.subject().parameters, [] );
});

test( 'On initialization, extractParameterKeys() filters passed parameters', function() {
    var component = this.subject({
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        $0: 'a',
        $1Binding: 'b',
        $2: 'c'
    });

    deepEqual( component.get( 'parameters' ).sort(), [ '$0', '$1', '$2' ] );
});

test( 'On initialization, extractParameterKeys() filters passed parameters to be bound', function() {
    var component = this.subject({
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        $0: 'a',
        $1Binding: 'b',
        $2: 'c'
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
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        $0: 'a',
        $1: 'b'
    });

    component.container = App.__container__;
    component.translateService = App.__container__.lookup( 'translateService:main' );

    component.translateString();

    equal( component.container.lookup( 'controller:application' ).get( 'translateService' ).get( 'key' ), 'the_key' );
    equal( component.container.lookup( 'controller:application' ).get( 'translateService' ).get( 'pluralKey' ), 'plural_key' );
    equal( component.container.lookup( 'controller:application' ).get( 'translateService' ).get( 'pluralCount' ), 'plural_count' );
    deepEqual( component.container.lookup( 'controller:application' ).get( 'translateService' ).get( 'parameters' ), { $0: 'a', $1: 'b' } );
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
            key: 'the_key',
            $0Binding: 'a',
            $1: 'b'
        }),
        setTranslatedStringWasCalled = false;

    component.container = App.__container__;

    component.setTranslatedString = function() {
        setTranslatedStringWasCalled = true;
    };

    // Render in DOM to fire willInsertElement()
    this.append();

    // Reset, as willInsertElement() calls setTranslatedString()
    setTranslatedStringWasCalled = false;

    Ember.run( function(){
        component.set( '$0', 'c' );
    });

    equal( setTranslatedStringWasCalled, true );
});

test( 'willDestroyElement() removes observers', function() {
    var component = this.subject({
            key: 'the_key',
            $0Binding: 'a',
            $1: 'b'
        }),
        setTranslatedStringWasCalled = false;

    component.container = App.__container__;

    component.setTranslatedString = function() {
        setTranslatedStringWasCalled = true;
    };

    // Render in DOM to fire willInsertElement()
    this.append();

    // Reset, as willInsertElement() calls setTranslatedString()
    setTranslatedStringWasCalled = false;

    component.willDestroyElement();

    Ember.run( function(){
        component.set( '$0', 'c' );
    });

    equal( setTranslatedStringWasCalled, false );
});