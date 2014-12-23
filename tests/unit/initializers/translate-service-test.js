import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';

var App;

module( 'Unit - initializer:translate-service', {
    setup: function() {
        App = startApp();
    },

    teardown: function() {
        Ember.run( App, App.destroy );
    }
});

test( 'Registered on container as a singleton', function() {
    equal( typeof App.__container__.lookup( 'translateService:main' ), 'object' );
    notEqual( App.__container__._options['translateService:main'].instantiate, 'undefined' );
    equal( App.__container__._options['translateService:main'].instantiate, false );
});

test( 'Injected on controllers', function() {
    var findBy = App.__container__.typeInjections.controller.findBy( 'fullName', 'translateService:main' );

    notEqual( findBy, 'undefined' );
    equal( findBy.property, 'translateService' );
});

test( 'Injected on views', function() {
    var findBy = App.__container__.typeInjections.view.findBy( 'fullName', 'translateService:main' );

    notEqual( findBy, 'undefined' );
    equal( findBy.property, 'translateService' );
});

test( 'Injected on components', function() {
    var findBy = App.__container__.typeInjections.component.findBy( 'fullName', 'translateService:main' );

    notEqual( findBy, 'undefined' );
    equal( findBy.property, 'translateService' );
});