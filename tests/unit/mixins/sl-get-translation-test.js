import Ember from 'ember';
import mixinUnderTest from 'sl-translate/mixins/sl-get-translation';

module( 'Unit - mixins:sl-get-translation' );

test( 'Successfully mixed', function() {
    expect(1);

    var testObject = Ember.Object.extend( mixinUnderTest ),
        subject    = testObject.create();

    ok( subject );
});

test( 'Call to get() with a key not beginning with "translate." is not intercepted', function() {
    expect(1);

    var testObject = Ember.Object.extend( mixinUnderTest, {
            testKey: 'testValue'
        }),
        subject    = testObject.create();

    equal( subject.get( 'testKey' ), 'testValue' );
});

test( 'Call to get() with a key beginning with "translate." calls this.translate()', function() {
    expect(1);

    var testObject = Ember.Object.extend( mixinUnderTest, {
            translate: function( value ) {
                return value;
            }
        }),
        subject    = testObject.create();

    equal( subject.get( 'translate.testingKey' ), 'testingKey' );
});

test( 'translate() returns call to this.translateService.getKeyValue()', function() {
    expect(1);

    var testObject = Ember.Object.extend( mixinUnderTest, {
            translateService: {
                getKeyValue: function( value ) {
                    return value;
                }
            }
        }),
        subject    = testObject.create();

    equal( subject.translate( 'called' ), 'called' );
});