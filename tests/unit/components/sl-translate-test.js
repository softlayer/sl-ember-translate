import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

const translateService = Ember.Object.create({
    translateKey( data ) {
        this.set( 'key', data.key );
        this.set( 'pluralKey', data.pluralKey );
        this.set( 'pluralCount', data.pluralCount );
        this.set( 'parameters', data.parameters );

        return 'TRANSLATE: ' + data.key;
    }
});

moduleForComponent( 'sl-translate', 'Unit | Component | sl translate', {
    unit: true
});

test( 'The correct service is being injected into the component', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.translateService.name,
        'sl-translate',
        'The correct service is being injected into the component'
    );
});

/**
 * Ensures that the template is wrapping the content in a span tag and not in
 * any block-level tags. While it appears that core Ember functionality is being
 * tested this test is ensuring that the implied contract about how this non-UI
 * component is rendered into the DOM is adhered to.
 */
test( 'Renders as a span tag with no classes', function( assert ) {
    this.subject( { translateService } );

    assert.strictEqual(
        this.$().prop( 'tagName' ),
        'SPAN'
    );
    assert.strictEqual(
        this.$().prop( 'class' ),
        'ember-view'
    );
});

/**
 * That it renders and functions as expected
 */
test( 'DOM and content of rendered translation', function( assert ) {
    this.subject({
        key: 'the_key',
        translateService
    });

    assert.strictEqual(
        Ember.$.trim( this.$().text() ),
        'TRANSLATE: the_key'
    );
});

/**
 * Ensure haven't broken any default behavior of Ember, since manipulate properties passed to the component
 * A side effect of this test is the appearance that core Ember functionality is being tested
 */
test( 'Can be used alongside other properties or attribute bindings', function( assert ) {
    this.subject({
        translateService,
        key: 'key_alongside',
        tagName: 'h1',
        classNames: [
            'testClass'
        ]
    });

    assert.strictEqual(
        this.$().prop( 'tagName' ),
        'H1'
    );
    assert.strictEqual(
        Ember.$.trim( this.$().text() ),
        'TRANSLATE: key_alongside'
    );
    assert.strictEqual(
        this.$().prop( 'class' ),
        'ember-view testClass'
    );
});

test( 'On initialization, extractParameterKeys() filters passed parameters', function( assert ) {
    const component = this.subject({
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        attrs: {
            $1: 'a',
            2: 'b',
            other: 'c'
        }
    });

    assert.deepEqual(
        component.get( 'parameters' ).sort(),
        [ '$1' ]
    );
});

test( 'On initialization, extractParameterKeys() filters passed parameters to be bound', function( assert ) {
    const boundProperty = 'test';
    const component = this.subject({
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        attrs: {
            $1: 'a',
            2: 'b',
            $3: boundProperty,
            $3Binding: 'hack; should test this more correctly',
            other: 'c'
        }
    });

    assert.deepEqual(
        component.get( 'attrs' )['$3'],
        boundProperty
    );
});

test( 'setTranslatedString() sets translatedString property with value from translateString()', function( assert ) {
    const component = this.subject();

    component.translateString = function() {
        return 'test value';
    };

    component.setTranslatedString();

    assert.strictEqual(
        component.get( 'translatedString' ),
        'test value'
    );
});

test( 'translateString() calls translateKey() on the translation service', function( assert ) {
    this.subject({
        translateService,
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        attrs: {
            $0: 'a',
            $1: 'b'
        }
    });

    this.render();

    assert.strictEqual(
        translateService.get( 'key' ),
        'the_key'
    );
    assert.strictEqual(
        translateService.get( 'pluralKey' ),
        'plural_key'
    );
    assert.strictEqual(
        translateService.get( 'pluralCount' ),
        'plural_count'
    );
    assert.deepEqual(
        translateService.get( 'parameters' ),
        { $0: 'a', $1: 'b' }
    );
});

test( 'willInsertElement event causes setTranslatedString() to be called', function( assert ) {
    const component = this.subject();
    let setTranslatedStringWasCalled = false;

    component.setTranslatedString = function() {
        setTranslatedStringWasCalled = true;
    };

    // Render in DOM to trigger willInsertElement event
    this.render();

    assert.strictEqual(
        setTranslatedStringWasCalled,
        true
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const translatedStringDependentKeys = [
        'internalTranslatedString'
    ];

    assert.deepEqual(
        component.translatedString._dependentKeys,
        translatedStringDependentKeys,
        'Dependent keys are set correctly for translatedString()'
    );
});
