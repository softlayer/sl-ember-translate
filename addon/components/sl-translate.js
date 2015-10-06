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
     * a property used as an internal Translated String in order to modify property only once upon render
     *
     * @type {?String}
     */
    internalTranslatedString: null,

    /**
     * Translated string
     *
     * @type {?String}
     */
    translatedString: Ember.computed( 'internalTranslatedString', function() {
        this.setTranslatedString();
        return this.get( 'internalTranslatedString' );
    }),

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

                    // Is a number that begins with $
                    if ( /^\$/.test( key ) ) {
                        parameters.push( key );
                    }

                    // Is a number that begins with $ and was passed as a binding
                    if ( /^\$[0-9]*$/.test( key ) &&
                        'object' === Ember.typeOf( this.get( 'attrs' )[ key ] )
                        ) {
                        observedParameters.push( key );
                    }
                });

                this.setProperties({
                    observedParameters,
                    parameters
                });
            }
        }
    ),

    /**
     * Register observers on filtered parameter list
     *
     * The reason observers have to be manually (de)registered rather than
     * calling .property() on translateString() is because in order to support
     * token replacement within a tranlsation string a user needs to be able to
     * pass in a variable amount of (potentially) bound properties. There is not
     * a way to specify such a dynamic list of properties in a .property() call.
     *
     * @function
     * @returns {undefined}
     */
    registerObservers: Ember.on(
        'willInsertElement',
        function() {
            this.get( 'observedParameters' ).map(
                key => {
                    this.addObserver( key, this, this.setTranslatedString );
                }
            );

            this.setTranslatedString();
        }
    ),

    /**
     * Remove observers on filtered parameter list
     *
     * @function
     * @returns {undefined}
     */
    unregisterObservers: Ember.on(
        'willClearRender',
        function() {
            this.get( 'observedParameters' ).map(
                key => {
                    this.removeObserver( key, this, this.setTranslatedString );
                }
            );
        }
    ),

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
    }
});
