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

    assert.equal(
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

    assert.equal(
        this.$().prop( 'tagName' ),
        'SPAN'
    );
});


test( 'On initialization, extractParameterKeys() filters passed parameters to be bound', function( assert ) {
    const boundProperty = "test";
    const component = this.subject({
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        $1: 'a',
        2: 'b',
        $3: boundProperty,
        other: 'c'
    });

    assert.deepEqual(
        component.get( '$3' ),
        boundProperty
    );
});

test( 'setTranslatedString() sets translatedString property with value from translateString()', function( assert ) {
    const component = this.subject();

    component.translateString = function() {
        return 'test value';
    };

    component.setTranslatedString();

    assert.equal(
        component.get( 'translatedString' ),
        'test value'
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