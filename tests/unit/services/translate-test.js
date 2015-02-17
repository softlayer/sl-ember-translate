import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';
import TranslateService from 'sl-ember-translate/services/translate';

var TS;

module( 'Unit - services:translate', {
    setup: function() {
        TS = TranslateService.create();
    }
});

test( 'container property defaults to null', function() {
    expect(1);

    equal( TS.get( 'container' ), null );
});

test( 'dictionary property defaults to null', function() {
    expect(1);

    equal( TS.get( 'dictionary' ), null );
});

test( 'setDictionary() accepts only an object as a parameter', function() {

    // Empty parameter

    var assertionThrown = false;

    try {
        TS.setDictionary();
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was empty' );

    // Number parameter

    assertionThrown = false;

    try {
        TS.setDictionary( 4 );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Number' );

    // Array Parameter

    assertionThrown = false;

    try {
        TS.setDictionary( [] );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was an Array' );

    // Function

    assertionThrown = false;

    try {
        TS.setDictionary( function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Function' );

    // String Parameter

    assertionThrown = false;

    try {
        TS.setDictionary( 'test' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a String' );

    // Boolean Parameter

    assertionThrown = false;

    try {
        TS.setDictionary( false );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Boolean' );

    // Object Parameter

    assertionThrown = false;

    try {
        TS.setDictionary( {} );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( !assertionThrown, 'Parameter was an Object' );
});

test( 'setDictionary() sets data on the dictionary property', function() {
    expect(1);

    var testDictionary = Ember.Object.create( { 'the_key': 'my value' } );

    TS.setDictionary( testDictionary );

    deepEqual( TS.get( 'dictionary' ), testDictionary );
});

test( 'getKeyValue() returns requested key if not found in dictionary', function() {
    expect(1);

    TS.setDictionary( Ember.Object.create( { 'the_key': 'my value' } ) );

    notEqual( TS.getKeyValue( 'wrong_key' ), 'the_key' );
});

test( 'getKeyValue() returns requested key\'s translated string', function() {
    expect(1);

    TS.setDictionary( Ember.Object.create( { 'the_key': 'my value' } ) );

    equal( TS.getKeyValue( 'the_key' ), 'my value' );
});

test( 'translateKey() requires an argument to be provided', function() {
    expect(1);

    var assertionThrown = false;

    try {
        TS.translateKey();
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown );
});

test( 'translateKey() returns translated string for specified key', function() {
    expect(1);

    TS.setDictionary( Ember.Object.create( { 'the_key': 'my value' } ) );

    equal( TS.getKeyValue( 'the_key' ), 'my value' );
});

test( 'If either "pluralKey" or "pluralCount" are provided to translateKey() then both must be', function() {
    expect(2);

    equal( TS.translateKey( { key: 'singular_key', pluralKey: 'plural_key' } ), 'singular_key' );
    equal( TS.translateKey( { key: 'singular_key', pluralCount: 3 } ), 'singular_key' );
});

test( 'Pluralization only works if "pluralCount" is a number', function() {
    expect(1);

    TS.setDictionary( Ember.Object.create( {
        'the_singular_key' : 'Singular translated value',
        'the_plural_key'   : 'Plural translated value'
    }));

    notEqual( TS.translateKey( { key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 'two' } ), 'Plural translated value' );
});

test( 'Pluralization occurs when provided the necessary information', function() {
    expect(2);

    TS.setDictionary( Ember.Object.create( {
        'the_singular_key' : 'Singular translated value',
        'the_plural_key'   : 'Plural translated value'
    }));

    equal( TS.translateKey( { key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 0 } ), 'Singular translated value' );
    equal( TS.translateKey( { key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 3 } ), 'Plural translated value' );
});

test( 'Token replacement in translation string', function() {
    expect(1);

    TS.setDictionary( Ember.Object.create( {
        'the_key': 'Replaced values: {0} and {1}'
    }));

    equal( TS.translateKey({
        key        : 'the_key',
        parameters : {
            $0: 'ASDF',
            $1: 1234
        }
    }), 'Replaced values: ASDF and 1234' );
});