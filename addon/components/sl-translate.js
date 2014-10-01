import Ember from 'ember';
import template from '../templates/components/sl-translate';

export default Ember.Component.extend({

    tagName: 'span',

    layout: template,

    /**
     * Translated string
     *
     * @type {string}
     * @default  null
     */
    translatedString: null,

    /**
     * Filtered array of parameters passed to this component
     *
     * Only contains those that are a number that begin with "$" and also do not end in "Binding"
     *
     * @type    {Ember.Array}
     * @default {null}
     */
    parameters: null,

    /**
     * Filtered array of parameters passed to this component
     *
     * Only contains those that are a number that begin with "$" and are to be bound to
     *
     * @type    {Ember.Array}
     * @default {null}
     */
    observedParameters: null,

    /**
     * Filter passed parameters on initialization
     *
     * @return {void}
     */
    extractParameterKeys: function() {
        var parameters         = Ember.A(),
            observedParameters = Ember.A();

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
     * @return {void}
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
     * @return {void}
     */
    willDestroyElement: function() {
        this.get( 'observedParameters' ).map( function( key ) {
            this.removeObserver( key, this, this.setTranslatedString );
        }.bind( this ));

        this._super.apply( this, arguments );
    }
});