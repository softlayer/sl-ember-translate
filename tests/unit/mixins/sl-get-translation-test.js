import Ember from 'ember';
import mixinUnderTest from 'sl-ember-translate/mixins/sl-get-translation';
import { moduleFor, test } from 'ember-qunit';

moduleFor( 'mixin:sl-get-translation', 'Unit | Mixin | sl get translation', {
    unit: true
});

test( 'The correct service is being injected into the mixin', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest );
    const subject = testObject.create();

    assert.strictEqual(
        subject.translateService.name,
        'sl-translate',
        'The correct service is being injected into the mixin'
    );
});

test( 'Successfully mixed', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest );
    const subject = testObject.create();

    assert.ok(
        subject
    );
});

test( 'Call to get() with a key not beginning with "translate." is not intercepted', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest, {
        testKey: 'testValue'
    });
    const subject = testObject.create();

    assert.strictEqual(
        subject.get( 'testKey' ),
        'testValue'
    );
});

test( 'Call to get() with a key beginning with "translate." calls this.translate()', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest, {
        translate: function( value ) {
            return value;
        }
    });
    const subject = testObject.create();

    assert.strictEqual(
        subject.get( 'translate.testingKey' ),
        'testingKey'
    );
});

test( 'translate() returns call to this.translateService.getKeyValue()', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest, {
        translateService: {
            getKeyValue: function( value ) {
                return value;
            }
        }
    });
    const subject = testObject.create();

    assert.strictEqual(
        subject.translate( 'called' ),
        'called'
    );
});
