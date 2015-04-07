import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';

var App;

module( 'Unit - initializer:translate-service', {
    beforeEach() {
        App = startApp();
    },

    afterEach() {
        Ember.run( App, App.destroy );
    }
});

test( 'Registered on container as a singleton', function( assert ) {
    assert.equal(
        typeof App.__container__.lookup( 'translateService:main' ),
        'object',
        'The translateService is an object'
    );

    assert.notEqual(
        App.registry._options[ 'translateService:main' ].instantiate,
        'undefined',
        "The service's instantiate value is defined"
    );

    assert.equal(
        App.registry._options[ 'translateService:main' ].instantiate,
        false,
        'The service is registered as a singleton'
    );
});

test( 'Injected on controllers', function( assert ) {
    assert.expect( 1 );

    App.registry._typeInjections[ 'controller' ].map( type => {
        if ( type[ 'property' ] === 'translateService' ) {
            assert.ok( true, 'Service is available to controllers' );
        }
    });
});

test( 'Injected on views', function( assert ) {
    assert.expect( 1 );

    App.registry._typeInjections[ 'view' ].map( type => {
        if ( type[ 'property' ] === 'translateService' ) {
            assert.ok( true, 'Service is available to views' );
        }
    });
});

test( 'Injected on components', function( assert ) {
    assert.expect( 1 );

    App.registry._typeInjections[ 'component' ].map( type => {
        if ( type[ 'property' ] === 'translateService' ) {
            assert.ok( true, 'Service is available to components' );
        }
    });
});
