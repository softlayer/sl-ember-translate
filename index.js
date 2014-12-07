/* jshint node: true */
'use strict';

module.exports = {
  name: 'sl-ember-translate',

  contentFor: function( type, config ) {
    var content;

    switch ( type ) {
        case 'keywords':
            content = 'ember, ember cli, translate, translation, dictionary';
            break;

        case 'description':
            content = 'An Ember CLI Addon that provides the ability to lookup a dictionary value through method calls or via a component in your templates.';
            break;
    }

    return content;
  }
};
