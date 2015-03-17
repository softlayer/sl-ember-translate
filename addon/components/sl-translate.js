import Ember from 'ember';
import template from '../templates/components/sl-translate';

/**
 * @module components
 * @class  sl-translate
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The tag type of the root element
     *
     * @property {Ember.String} tagName
     * @default  "span"
     */
    tagName: 'span',

    /**
     * The template used to render the view
     *
     * @property {function} layout
     * @default  template:components/sl-translate
     */
    layout: template,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Filtered array of parameters passed to this component
     *
     * Only contains those that are a number that begin with "$" and are to be bound to
     *
     * @property {Ember.Array} observedParameters
     * @default  null
     */
    observedParameters: null,

    /**
     * Filtered array of parameters passed to this component
     *
     * Only contains those that are a number that begin with "$" and also do not end in "Binding"
     *
     * @property {Ember.Array} parameters
     * @default  null
     */
    parameters: null,

    /**
     * Translated string
     *
     * @property {Ember.String} translatedString
     * @default  null
     */
    translatedString: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Filter passed parameters on initialization
     *
     * @function extractParameterKeys
     * @observes "init" event
     * @returns  {void}
     */
    extractParameterKeys: function() {
        var parameters         = [],
            observedParameters = [],
            self               = this;

        Ember.keys( this ).map( function( key ) {

            // Is a number that begins with $ but doesn't also end with "Binding"
            if ( /^\$/.test( key ) && !/^\$.*(Binding)$/.test( key ) ) {
                parameters.push( key );
            }

            // Is a number that begins with $ and was passed as a binding
            if ( /^\$[0-9]*$/.test( key ) && self.hasOwnProperty( key + 'Binding' ) ) {
                observedParameters.push( key );
            }
        });

        this.setProperties({
            'parameters'         : parameters,
            'observedParameters' : observedParameters
        });
    }.on( 'init' ),

    /**
     * Register observers on filtered parameter list
     *
     * The reason observers have to be manually (de)registered rather than calling .property() on translateString() is
     * because in order to support token replacement within a tranlsation string a user needs to be able to pass in a
     * variable amount of (potentially) bound properties.  There is not a way to specify such a dynamic list of
     * properties in a .property() call.
     *
     * @function registerObservers
     * @observes "willInsertElement" event
     * @returns  {void}
     */
    registerObservers: function() {
        var self = this;

        this.get( 'observedParameters' ).map( function( key ) {
            self.addObserver( key, self, self.setTranslatedString );
        });

        this.setTranslatedString();
    }.on( 'willInsertElement' ),

    /**
     * Remove observers on filtered parameter list
     *
     * @function unregisterObservers
     * @observes "willClearRender" event
     * @returns  {void}
     */
    unregisterObservers: function() {
        var self = this;

        this.get( 'observedParameters' ).map( function( key ) {
            self.removeObserver( key, self, self.setTranslatedString );
        });
    }.on( 'willClearRender' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Set translated string value on property used by template
     *
     * @function setTranslatedString
     * @returns {void}
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
     * @returns {Ember.String} Translated string
     */
    translateString: function() {
        var parametersHash = {},
            self           = this;

        this.get( 'parameters' ).map( function( key ) {
            parametersHash[key] = self.get( key );
        });

        return this.get( 'translateService' ).translateKey({
            key         : this.get( 'key' ),
            pluralKey   : this.get( 'pluralKey' ),
            pluralCount : this.get( 'pluralCount' ),
            parameters  : parametersHash
        });
    }
});
