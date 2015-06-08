import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-get-translation
 */
export default Ember.Mixin.create({

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

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Based on value of key, retrieve translation or usual get() value
     *
     * @function get
     * @argument {Ember.String} key property to retrieve
     * @returns  {Ember.String}
     */
    get( key ) {
        var translationsRegex = /translate\.(.*)/,
            matches = key.match( translationsRegex );

        return ( matches ) ? this.translate( matches[1] ) : this._super( key );
    },

    /**
     * Retrieve translated key without support for token replacement or pluralization
     *
     * @function translate
     * @argument {Ember.String} key key to translate
     * @returns  {Ember.String} translated key
     */
    translate( key ) {
        return this.get( 'translateService' ).getKeyValue( key );
    },

    /**
     * The translateService used to convert content
     *
     * @type {Ember.Service}
     */
    translateService: Ember.inject.service( 'translate' )
});
