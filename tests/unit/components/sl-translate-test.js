import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';

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

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.translateService.name,
        'sl-translate',
        'The correct service is being injected into the component'
    );

    assert.strictEqual(
        component.get( 'tagName' ),
        'span',
        '"tagName" defaults to span'
    );

    assert.strictEqual(
        component.get( 'internalTranslatedString' ),
        null,
        '"internalTranslatedString" defaults to null'
    );
});

test( 'setTranslatedString() is called when the willRender() event occurs', function( assert ) {
    const component = this.subject( {
        setTranslatedString: function() {
            return;
        }
    });

    const spy = sinon.spy( component, 'setTranslatedString' );

    component.trigger( 'willRender' );

    assert.strictEqual(
        spy.calledOnce,
        true,
        'setTranslatedString() is called successfully'
    );
});

test(
    'setTranslatedString() sets internalTranslatedString property with value from translateString()',
    function( assert ) {
        const component = this.subject({
            translateString: function() {
                return 'TRANSLATE: the_key';
            }
        });

        const spy = sinon.spy( component, 'translateString' );

        Ember.run( () => {
            component.setTranslatedString();
        });

        assert.strictEqual(
            component.get( 'internalTranslatedString' ),
            'TRANSLATE: the_key',
            'the property "internalTranslatedString" has the correct value'
        );

        assert.strictEqual(
            spy.calledOnce,
            true,
            'translateString() is called successfully once'
        );
    }
);

test( 'translateString() returns expected value', function( assert ) {
    const component = this.subject({
        translateService,
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        $0: 'a',
        $1: 'b'
    });

    this.render();

    assert.equal(
        component.translateString(),
        'TRANSLATE: the_key',
        'setTranslatedString() returns expected value successfully'
    );
});

test( 'setTranslatedString() sets internalTranslatedString and translatedString sets correct value',
    function( assert ) {
        const component = this.subject( {
            translateService,
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1: 'b'
        });

        this.render();

        Ember.run( () => {
            component.setTranslatedString();
        });

        assert.strictEqual(
            component.get( 'translatedString' ),
            'TRANSLATE: the_key',
            'translatedString computed property sets correct string'
        );
    }
);

test( 'translatedString() returns correct value', function( assert ) {
    const component = this.subject( {
        translateService,
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        $0: 'a',
        $1: 'b'
    } );

    this.render();

    Ember.run( () => {
        component.trigger( 'willRender' );
    });

    assert.strictEqual(
        component.get( 'translatedString' ),
        component.get( 'internalTranslatedString' ),
        'translatedString() returns the correct value'
    );
});

test( 'translateString() calls translateKey() on the translation service with given values', function( assert ) {
    const component = this.subject({
        translateService,
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        $0: 'a',
        $1: 'b',
        c: 'c',
        $lowercase: 'lowercase',
        $Uppercase: 'Uppercase',
        $CAPITALS: 'CAPITALS'
    });

    Ember.run( () => {
        component.set( 'attrs', {
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1: 'b',
            c: 'c',
            $lowercase: 'lowercase',
            $Uppercase: 'Uppercase',
            $CAPITALS: 'CAPITALS'
        });
        component.trigger( 'willRender' );
    });

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
        {
            $0: 'a',
            $1: 'b',
            $lowercase: 'lowercase',
            $Uppercase: 'Uppercase',
            $CAPITALS: 'CAPITALS'
        }
    );
});

test( 'translateString() only accepts the correct parameter key pattern', function( assert ) {
    const component = this.subject({
        translateService,
        key: 'the_key',
        pluralKey: 'plural_key',
        pluralCount: 'plural_count',
        $0: 'a',
        $12: 'b',
        r: 'c',
        $10000: 'd',
        $lowercase: 'lowercase',
        $Uppercase: 'Uppercase',
        $CAPITALS: 'CAPITALS'
    });

    Ember.run( () => {
        component.set( 'attrs', {
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $12: 'b',
            r: 'c',
            $10000: 'd',
            $lowercase: 'lowercase',
            $Uppercase: 'Uppercase',
            $CAPITALS: 'CAPITALS'
        });
        component.translateString();
    });

    assert.deepEqual(
        translateService.get( 'parameters' ),
        {
            $0: 'a',
            $12: 'b',
            $10000: 'd',
            $lowercase: 'lowercase',
            $Uppercase: 'Uppercase',
            $CAPITALS: 'CAPITALS'
        }
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
