import Ember from 'ember';
import mixinUnderTest from 'sl-ember-translate/mixins/sl-get-translation';
import { moduleFor, test } from 'ember-qunit';

moduleFor( 'mixin:sl-get-translation', 'Unit | Mixin | sl get translation', {
    unit: true
});

test( 'Successfully mixed', function( assert ) {
    assert.expect(1);

    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create();

    assert.ok( subject );
});

test( 'Call to get() with a key not beginning with "translate." is not intercepted', function( assert ) {
    assert.expect(1);

    let testObject = Ember.Object.extend( mixinUnderTest, {
        testKey: 'testValue'
    });
    let subject = testObject.create();

    assert.equal(
        subject.get( 'testKey' ),
        'testValue'
    );
});

test( 'Call to get() with a key beginning with "translate." calls this.translate()', function( assert ) {
    assert.expect(1);

    let testObject = Ember.Object.extend( mixinUnderTest, {
        translate: function( value ) {
            return value;
        }
    });
    let subject = testObject.create();

    assert.equal(
        subject.get( 'translate.testingKey' ),
        'testingKey'
    );
});

test( 'translate() returns call to this.translateService.getKeyValue()', function( assert ) {
    assert.expect(1);

    let testObject = Ember.Object.extend( mixinUnderTest, {
        translateService: {
            getKeyValue: function( value ) {
                return value;
            }
        }
    });
    let subject = testObject.create();

    assert.equal(
        subject.translate( 'called' ),
        'called'
    );
});
