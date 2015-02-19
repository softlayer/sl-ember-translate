import Ember from 'ember';

/**
 * @module services
 * @class  translate
 */
export default Ember.Object.extend({

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
     * @property {Ember.Object} dictionary
     * @default  null
     */
    dictionary: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Set translation dictionary data
     *
     * @function setDictionary
     * @argument {Ember.Object} translations  Translation model
     * @throws   {Ember.assert}
     * @returns  {void}
     */
    setDictionary: function( translations ) {

        Ember.assert(
            'services/translation.setDictionary() expects parameter to be an object',
            'object' === typeof translations && !Array.isArray( translations )
        );

        this.set( 'dictionary', translations );
    },

    /**
     * Retrieve value for specified dictionary key
     *
     * @function getKeyValue
     * @argument {Ember.String} key Dictionary key to retrieve value for
     * @returns  {Ember.String}
     */
    getKeyValue: function( key ) {
        var defaultKeyValue = 'KEY__NOT__PRESENT',
            retrievedKey    = this.get( 'dictionary' ).getWithDefault( key, defaultKeyValue ),
            returnValue;

        if ( defaultKeyValue !== retrievedKey ) {
            returnValue = retrievedKey;

        } else {
            Ember.warn( 'No translation match for key "' + key + '".' );
            returnValue = key;
        }

        return returnValue;
    },

    /**
     * Translate provided key
     *
     * Supports
     * - singular/plural string substitution
     * - replacement of placeholder tokens in translation strings with passed parameters
     *
     * @function translateKey
     * @argument {Ember.Object} data
     * @example
     * // Example object that can be passed as argument
     * {
     *     key
     *     pluralKey
     *     pluralCount
     *     parameters: {
     *         $0: value
     *     }
     * }
     * @return {Ember.String}       Translated string
     */
    translateKey: function( data ) {

        Ember.assert( 'Argument must be an object', 'object' === typeof data && !Array.isArray( data ) );

        data.parameters = data.parameters || {};

        var pluralErrorTracker = 0,
            token              = data.key,
            getTokenValue      = Ember.run.bind( this, function( value ) {
                try {
                    value = this.getKeyValue( value );
                } catch ( e ) {
                    Ember.warn( 'Unable to translate key "' + value + '".' );
                }

                return value;
            }),
            translatedString;

        // BEGIN: Pluralization error checking
        if ( !Ember.isEmpty( data.pluralKey ) ) {
            pluralErrorTracker++;
        }

        if ( !Ember.isEmpty( data.pluralCount ) ) {
            pluralErrorTracker++;
        }

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

        translatedString = getTokenValue( token );

        // Parameter replacement
        Ember.keys( data.parameters ).map( function( key ) {
            translatedString = translatedString.replace( '{' + key.replace( '$', '' ) + '}' , data.parameters[key] );
        });

        return translatedString;
    }
});