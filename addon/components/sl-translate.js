
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
     * Internal Translated String
     *
     * A property used as an internal translated string in order to modify property only once upon render
     *
     * @type {?String}
     */
    internalTranslatedString: null,

    /**
     * Translation Service, used to translate content
     *
     * @type {ember/Service}
     */
    translateService: Ember.inject.service( 'sl-translate' ),

    // -------------------------------------------------------------------------
    // Observers

    test: Ember.on(
        'willRender',
        function() {
            this.setTranslatedString();
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

        Object.keys(this).map( key => {
            if ( /^\$[0-9]/.test( key ) ) {
                parametersHash[key] = this.get( key );
            }
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
            return this.get( 'internalTranslatedString' );
        }
    )
});
