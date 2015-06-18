import Ember from 'ember';

/**
 * @module
 * @augments ember/Service
 */
export default Ember.Service.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Translations
     *
     * @type {?Object|ember/Object}
     */
    dictionary: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Set translation dictionary data
     *
     * @function
     * @param {Object|ember/Object} translations
     * @throws {ember.assert}
     * @returns {undefined}
     */
    setDictionary( translations ) {
        Ember.assert(
            'services/translation.setDictionary() expects parameter to be an object',
            'object' === typeof translations &&
            !Array.isArray( translations )
        );

        this.set( 'dictionary', translations );
    },

    /**
     * Retrieve value for specified dictionary key
     *
     * @function
     * @param {String} key - Dictionary key to retrieve value for
     * @returns {String}
     */
    getKeyValue( key ) {
        let defaultKeyValue = 'KEY__NOT__PRESENT';
        let retrievedKey = this.get( 'dictionary' ).getWithDefault( key, defaultKeyValue );
        let returnValue;

        if ( defaultKeyValue !== retrievedKey ) {
            returnValue = retrievedKey;

        } else {
            Ember.warn( 'No translation match for key "' + key + '".' );
            returnValue = key;
        }

        return returnValue;
    },

    /**
     * @typedef {Object} translateKeyParameter
     * @property {String} key
     * @property {String} [pluralKey]
     * @property {String} [pluralCount]
     * @property {Object} [parameters]
     */

    /**
     * Translate provided key
     *
     * Supports
     * - singular/plural string substitution
     * - replacement of placeholder tokens in translation strings with passed parameters
     *
     * @function
     * @param {translateKeyParameter} data
     * @returns {String}
     */
    translateKey( data ) {

        Ember.assert(
            'Argument must be an object',
            'object' === typeof data &&
            !Array.isArray( data )
        );

        data.parameters = data.parameters || {};

        let pluralErrorTracker = 0;

        // BEGIN: Pluralization error checking
        if ( !Ember.isEmpty( data.pluralKey ) ) {
            pluralErrorTracker++;
        }

        if ( !Ember.isEmpty( data.pluralCount ) ) {
            pluralErrorTracker++;
        }

        let token = data.key;

        let getTokenValue = ( value ) => {
            try {
                value = this.getKeyValue( value );
            } catch ( e ) {
                Ember.warn( 'Unable to translate key "' + value + '".' );
            }

            return value;
        };

        if ( 1 === pluralErrorTracker ) {
            Ember.warn( 'If either "pluralKey" or "pluralCount" are provided then both must be.' +
                'Singular key value was returned.' );

            return getTokenValue( token );
        }
        // END: Pluralization error checking

        // Pluralization
        if ( !Ember.isEmpty( data.pluralCount ) && Number(data.pluralCount) > 1 ) {
            token = data.pluralKey;
        }

        let translatedString;
        translatedString = getTokenValue( token );

        // Parameter replacement
        Ember.keys( data.parameters ).map( key => {
            translatedString = translatedString.replace( '{' + key.replace( '$', '' ) + '}' , data.parameters[key] );
        });

        return translatedString;
    }
});
