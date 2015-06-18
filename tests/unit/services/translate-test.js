import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
/** In order for this import to work correctly the /tests/dummy/app/services/translate.js file has to exist */
import TranslateService from 'sl-ember-translate/services/translate';
import { requires } from '../../helpers/sl/synchronous';

var TS;

moduleFor( 'service:translate', 'Unit | Service | translate', {
    beforeEach() {
        TS = TranslateService.create();
    },

    unit: true
});

test( 'container property defaults to null', function( assert ) {
    assert.equal( TS.get( 'container' ), null );
});

test( 'dictionary property defaults to null', function( assert ) {
    assert.equal( TS.get( 'dictionary' ), null );
});

test( 'setDictionary() accepts only an object as a parameter', function( assert ) {

    // Empty parameter

    var assertionThrown = false;

    try {
        TS.setDictionary();
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Parameter was empty' );

    // Number parameter

    assertionThrown = false;

    try {
        TS.setDictionary( 4 );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Parameter was a Number' );

    // Array Parameter

    assertionThrown = false;

    try {
        TS.setDictionary( [] );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Parameter was an Array' );

    // Function

    assertionThrown = false;

    try {
        TS.setDictionary( function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Parameter was a Function' );

    // String Parameter

    assertionThrown = false;

    try {
        TS.setDictionary( 'test' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Parameter was a String' );

    // Boolean Parameter

    assertionThrown = false;

    try {
        TS.setDictionary( false );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Parameter was a Boolean' );

    // Object Parameter

    assertionThrown = false;

    try {
        TS.setDictionary( {} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( !assertionThrown, 'Parameter was an Object' );
});

test( 'setDictionary() sets data on the dictionary property', function( assert ) {
    var testDictionary = Ember.Object.create( { 'the_key': 'my value' } );

    TS.setDictionary( testDictionary );

    assert.deepEqual( TS.get( 'dictionary' ), testDictionary );
});

test( 'getKeyValue() returns requested key if not found in dictionary', function( assert ) {
    TS.setDictionary( Ember.Object.create( { 'the_key': 'my value' } ) );

    assert.notEqual( TS.getKeyValue( 'wrong_key' ), 'the_key' );
});

test( 'getKeyValue() returns requested key\'s translated string', function( assert ) {
    TS.setDictionary( Ember.Object.create( { 'the_key': 'my value' } ) );

    assert.equal( TS.getKeyValue( 'the_key' ), 'my value' );
});

test( 'translateKey() accepts only an object as a parameter', function( assert ) {
    var test = requires( TS.translateKey, [ 'object' ] );

    assert.ok( test.requires, test.messages );
});

test( 'translateKey() returns translated string for specified key', function( assert ) {
    TS.setDictionary( Ember.Object.create( { 'the_key': 'my value' } ) );

    assert.equal( TS.getKeyValue( 'the_key' ), 'my value' );
});

test( 'If either "pluralKey" or "pluralCount" are provided to translateKey() then both must be', function( assert ) {
    assert.equal( TS.translateKey( { key: 'singular_key', pluralKey: 'plural_key' } ), 'singular_key' );
    assert.equal( TS.translateKey( { key: 'singular_key', pluralCount: 3 } ), 'singular_key' );
});

test( 'Pluralization only works if "pluralCount" is a number', function( assert ) {
    TS.setDictionary( Ember.Object.create( {
        'the_singular_key' : 'Singular translated value',
        'the_plural_key'   : 'Plural translated value'
    }));

    assert.notEqual( TS.translateKey( { key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 'two' } ), 'Plural translated value' );
});

test( 'Pluralization occurs when provided the necessary information', function( assert ) {
    TS.setDictionary( Ember.Object.create( {
        'the_singular_key' : 'Singular translated value',
        'the_plural_key'   : 'Plural translated value'
    }));

    assert.equal( TS.translateKey( { key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 0 } ), 'Singular translated value' );
    assert.equal( TS.translateKey( { key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 3 } ), 'Plural translated value' );
});

test( 'Token replacement in translation string', function( assert ) {
    TS.setDictionary( Ember.Object.create( {
        'the_key': 'Replaced values: {0} and {1}'
    }));

    assert.equal( TS.translateKey({
        key        : 'the_key',
        parameters : {
            $0: 'ASDF',
            $1: 1234
        }
    }), 'Replaced values: ASDF and 1234' );
});
