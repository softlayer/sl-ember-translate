import Ember from 'ember';
import template from '../templates/components/sl-translate';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {Object} */
    layout: template,

    /** @type {String} */
    tagName: 'span',

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
     * @type {?Array}
     */
    observedParameters: [],

    /**
     * Filtered array of parameters passed to this component
     *
     * Only contains those that are a number that begin with "$" and also do not end in "Binding"
     *
     * @type {?Array}
     */
    parameters: [],

    /**
     * Translation Service, used to translate content
     *
     * @type {ember/Service}
     */
    translateService: Ember.inject.service( 'sl-translate' ),

    /**
     * Internal Translated String
     *
     * A property used as an internal translated string in order to modify property only once upon render
     *
     * @type {?String}
     */
    internalTranslatedString: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Filter passed parameters on initialization
     *
     * @function
     * @returns {undefined}
     */
    extractParameterKeys: Ember.on(
        'init',
        function() {
            if ( 'object' === Ember.typeOf( this.get( 'attrs' ) ) ||
                 'instance' === Ember.typeOf( this.get( 'attrs' ) )
            ) {
                const parameters = [];
                const observedParameters = [];

                Object.keys( this.get( 'attrs' ) ).map( key => {
                    if ( /^\$/.test( key ) ) {
                        parameters.push( key );
                        observedParameters.push( key );
                    }
                });

                this.setProperties( {
                    observedParameters,
                    parameters
                } );
            }
        }
    ),

    /**
     *  willRender component lifecycle hook invoked before a component will render,
     *  either initially or due to an update, and regardless of how the rerender was triggered.
     *  removes the need to depend to worry about dependent keys.
     *
     * @function
     * @returns {undefined}
     */
    willRender: function() {
        this.setTranslatedString();
    },

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Set translated string value on property used by template
     *
     * @function
     * @returns {undefined}
     */
    setTranslatedString() {
        this.set( 'internalTranslatedString', this.translateString() );
    },

    /**
     * Translate provided key
     *
     * Supports
     * - singular/plural string substitution
     * - replacement of placeholder tokens in translation strings with
     *   passed parameters
     *
     * @function
     * @returns {String}
     */
    translateString() {
        const parametersHash = {};

        this.get( 'parameters' ).map( key => {
            parametersHash[key] = this.get( key );
        });

        return this.get( 'translateService' ).translateKey({
            key: this.get( 'key' ),
            pluralKey: this.get( 'pluralKey' ),
            pluralCount: this.get( 'pluralCount' ),
            parameters: parametersHash
        });
    },

    /**
     * Sets translatedString value once per render based on internalTranslatedString
     *
     * @function
     * @returns {?String}
     */
    translatedString: Ember.computed(
        'internalTranslatedString',
        function() {
            this.setTranslatedString();
            return this.get( 'internalTranslatedString' );
        }
    )
});
