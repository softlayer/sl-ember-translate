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
    expect(3);

    equal( typeof App.__container__.lookup( 'translateService:main' ), 'object' );
    notEqual( App.__container__._options.dict['translateService:main'].instantiate, 'undefined' );
    equal( App.__container__._options.dict['translateService:main'].instantiate, false );
});

test( 'Injected on controllers', function() {
    expect(2);

    var findBy = App.__container__.typeInjections.dict.controller.findBy( 'fullName', 'translateService:main' );

    notEqual( findBy, 'undefined' );
    equal( findBy.property, 'translateService' );
});

test( 'Injected on views', function() {
    expect(2);
    var findBy = App.__container__.typeInjections.dict.view.findBy( 'fullName', 'translateService:main' );

    notEqual( findBy, 'undefined' );
    equal( findBy.property, 'translateService' );
});

test( 'Injected on components', function() {
    expect(2);
    var findBy = App.__container__.typeInjections.dict.component.findBy( 'fullName', 'translateService:main' );

    notEqual( findBy, 'undefined' );
    equal( findBy.property, 'translateService' );
});