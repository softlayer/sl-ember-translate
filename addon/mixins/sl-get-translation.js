import Ember from 'ember';

/**
 * @module
 * @augments ember/Mixin
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

    /**
     * Translation Service, used to convert content
     *
     * @type {Ember.Service}
     */
    translateService: Ember.inject.service( 'translate' ),

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Based on value of key, retrieve translation or usual get() value
     *
     * @function
     * @param {String} key property to retrieve
     * @returns {String}
     */
    get( key ) {
        let matches = key.match( /translate\.(.*)/ );

        return matches ?
            this.translate( matches[1] ) :
            this._super( key );
    },

    /**
     * Retrieve translated key without support for token replacement or pluralization
     *
     * @function
     * @param {String} key key to translate
     * @returns {String}
     */
    translate( key ) {
        return this.get( 'translateService' ).getKeyValue( key );
    }
});
