import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

var translateService = Ember.Object.create({
    translateKey( data ) {
        this.set( 'key', data.key );
        this.set( 'pluralKey', data.pluralKey );
        this.set( 'pluralCount', data.pluralCount );
        this.set( 'parameters', data.parameters );

        return 'TRANSLATE: ' + data.key;
    }
});

moduleForComponent( 'sl-translate', 'Unit - component:sl-translate' );

/**
 * Ensures that the template is wrapping the content in a span tag and not in
 * any block-level tags. While it appears that core Ember functionality is being
 * tested this test is ensuring that the implied contract about how this non-UI
 * component is rendered into the DOM is adhered to.
 */
test( 'Renders as a span tag with no classes', function( assert ) {
    this.subject({ translateService });

    assert.equal( this.$().prop( 'tagName' ), 'SPAN' );
    assert.equal( this.$().prop( 'class' ), 'ember-view' );
});

/**
 * That it renders and functions as expected
 */
test( 'DOM and content of rendered translation', function( assert ) {
    this.subject({ key: 'the_key', translateService });

    assert.equal( Ember.$.trim( this.$().text() ), 'TRANSLATE: the_key' );
});

/**
 * Ensure haven't broken any default behavior of Ember, since manipulate properties passed to the component
 * A side effect of this test is the appearance that core Ember functionality is being tested
 */
test( 'Can be used alongside other properties or attribute bindings', function( assert ) {
    this.subject({
        translateService,
        key        : 'key_alongside',
        tagName    : 'h1',
        classNames : [ 'testClass' ]
    });

    assert.equal( this.$().prop( 'tagName' ), 'H1' );
    assert.equal( Ember.$.trim( this.$().text() ), 'TRANSLATE: key_alongside' );
    assert.equal( this.$().prop( 'class'), ['ember-view testClass'] );
});

test( 'On initialization, extractParameterKeys() filters passed parameters', function( assert ) {
    var component = this.subject({
            key         : 'the_key',
            pluralKey   : 'plural_key',
            pluralCount : 'plural_count',
            $0          : 'a',
            $1Binding   : 'b',
            $2          : 'c'
        });

    assert.deepEqual( component.get( 'parameters' ).sort(), [ '$0', '$1', '$2' ] );
});

test( 'On initialization, extractParameterKeys() filters passed parameters to be bound', function( assert ) {
    var component = this.subject({
            key         : 'the_key',
            pluralKey   : 'plural_key',
            pluralCount : 'plural_count',
            $0          : 'a',
            $1Binding   : 'b',
            $2          : 'c'
        });

    assert.deepEqual( component.get( 'observedParameters' ), [ '$1' ] );
});

test( 'setTranslatedString() sets translatedString property with value from translateString()', function( assert ) {
    var component = this.subject();

    component.translateString = function() {
        return 'test value';
    };

    component.setTranslatedString();

    assert.equal( component.get( 'translatedString' ), 'test value' );
});

test( 'translateString() calls translateKey() on the translation service', function( assert ) {
    this.subject({
        translateService,
        key         : 'the_key',
        pluralKey   : 'plural_key',
        pluralCount : 'plural_count',
        $0          : 'a',
        $1          : 'b'
    });

    this.render();

    assert.equal( translateService.get( 'key' ), 'the_key' );
    assert.equal( translateService.get( 'pluralKey' ), 'plural_key' );
    assert.equal( translateService.get( 'pluralCount' ), 'plural_count' );
    assert.deepEqual( translateService.get( 'parameters' ), { $0: 'a', $1: 'b' } );
});

test( 'willInsertElement event causes setTranslatedString() to be called', function( assert ) {
    var component                    = this.subject(),
        setTranslatedStringWasCalled = false;

    component.setTranslatedString = function() {
        setTranslatedStringWasCalled = true;
    };

    // Render in DOM to trigger willInsertElement event
    this.render();

    assert.equal( setTranslatedStringWasCalled, true );
});

test( 'willInsertElement event causes observers to be added to each entry in observedParameters property', function( assert ) {
    var component = this.subject({
            translateService,
            key       : 'the_key',
            $0Binding : 'a',
            $1        : 'b'
        }),
        setTranslatedStringWasCalled = false;

    component.setTranslatedString = function() {
        setTranslatedStringWasCalled = true;
    };

    // Render in DOM to trigger willInsertElement event
    this.render();

    // Change value so can monitor for change
    setTranslatedStringWasCalled = false;

    Ember.run( function(){
        component.set( '$0', 'c' );
    });

    assert.equal( setTranslatedStringWasCalled, true );
});

test( 'willClearRender event causes observers to be removed', function( assert ) {
    var component = this.subject({
            translateService,
            key       : 'the_key',
            $0Binding : 'a',
            $1        : 'b'
        }),
        setTranslatedStringWasCalled = false;

    component.setTranslatedString = () => {
        setTranslatedStringWasCalled = true;
    };

    // Render in DOM to trigger willInsertElement event
    this.render();

    // Change value so can monitor for change
    setTranslatedStringWasCalled = false;

    component.trigger( 'willClearRender' );

    Ember.run( () => {
        component.set( '$0', 'c' );
    });

    assert.equal( setTranslatedStringWasCalled, false );
});
