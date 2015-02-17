import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';

var App;

module( 'Unit - initializer:translate-service', {
    beforeEach: function() {
        App = startApp();
    },

    afterEach: function() {
        Ember.run( App, App.destroy );
    }
});

test( 'Registered on container as a singleton', function( assert ) {
    assert.equal( typeof App.__container__.lookup( 'translateService:main' ), 'object' );
    assert.notEqual( App.__container__._options['translateService:main'].instantiate, 'undefined' );
    assert.equal( App.__container__._options['translateService:main'].instantiate, false );
});

test( 'Injected on controllers', function( assert ) {
    var findBy = App.__container__.typeInjections.controller.findBy( 'fullName', 'translateService:main' );

    assert.notEqual( findBy, 'undefined' );
    assert.equal( findBy.property, 'translateService' );
});

test( 'Injected on views', function( assert ) {
    var findBy = App.__container__.typeInjections.view.findBy( 'fullName', 'translateService:main' );

    assert.notEqual( findBy, 'undefined' );
    assert.equal( findBy.property, 'translateService' );
});

test( 'Injected on components', function( assert ) {
    var findBy = App.__container__.typeInjections.component.findBy( 'fullName', 'translateService:main' );

    assert.notEqual( findBy, 'undefined' );
    assert.equal( findBy.property, 'translateService' );
});