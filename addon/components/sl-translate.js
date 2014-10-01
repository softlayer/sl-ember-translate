/** @module sl-translate/components/sl-translate */

import Ember from 'ember';
import template from '../templates/components/sl-translate';

export default Ember.Component.extend({

    tagName: 'span',

    layout: template,

    /**
     * Translated string
     *
     * @property {string} translatedString
     * @type     {string}
     * @default  null
     */
    translatedString: null,

    /**
     * Filtered array of parameters passed to this component
     *
     * Only contains those that are a number that begin with "$" and also do not end in "Binding"
     *
     * @property {array} parameters
     * @type     {Ember.Array}
     * @default  {null}
     */
    parameters: null,

    /**
     * Filtered array of parameters passed to this component
     *
     * Only contains those that are a number that begin with "$" and are to be bound to
     *
     * @property {array} observedParameters
     * @type     {Ember.Array}
     * @default  {null}
     */
    observedParameters: null,

    /**
     * Filter passed parameters on initialization
     *
     * @function extractParameterKeys
     * @return {void}
     */
    extractParameterKeys: function() {
        var parameters         = [],
            observedParameters = [];

        Ember.keys( this ).map( function( key ) {

            // Is a number that begins with $ but doesn't also end with "Binding"
            if ( /^\$/.test( key ) && !/^\$.*(Binding)$/.test( key ) ) {
                parameters.push( key );
            }

            // Is a number that begins with $ and was passed as a binding
            if ( /^\$[0-9]*$/.test( key ) && this.hasOwnProperty( key + 'Binding' ) ) {
                observedParameters.push( key );
            }
        }.bind( this ));

        this.set( 'parameters', parameters );
        this.set( 'observedParameters', observedParameters );
    }.on( 'init' ),

    /**
     * Set translated string value on property used by template
     *
     * @function setTranslatedString
     * @return {void}
     */
    setTranslatedString: function() {
        this.set( 'translatedString', this.translateString() );
    },

    /**
     * Translate provided key
     *
     * Supports
     * - singular/plural string substitution
     * - replacement of placeholder tokens in translation strings with passed parameters
     *
     * @function translateString
     * @return {string} Translated string
     */
    translateString: function() {
        var parametersHash = {};

        this.get( 'parameters' ).map( function( key ) {
            parametersHash[key] = this.get( key );
        }.bind( this ) );

        return this.get( 'translateService' ).translateKey({
            key         : this.get( 'key' ),
            pluralKey   : this.get( 'pluralKey' ),
            pluralCount : this.get( 'pluralCount' ),
            parameters  : parametersHash
        });
    },

    /**
     * Register observers on filtered parameter list
     *
     * @function willInsertElement
     * @fires    this._super
     * @return   {void}
     */
    willInsertElement: function() {
        this.get( 'observedParameters' ).map( function( key ) {
            this.addObserver( key, this, this.setTranslatedString );
        }.bind( this ));

        this.setTranslatedString();

        this._super.apply( this, arguments );
    },

    /**
     * Remove observers on filtered parameter list
     *
     * @function willDestroyElement
     * @fires    this._super
     * @return   {void}
     */
    willDestroyElement: function() {
        this.get( 'observedParameters' ).map( function( key ) {
            this.removeObserver( key, this, this.setTranslatedString );
        }.bind( this ));

        this._super.apply( this, arguments );
    }
});