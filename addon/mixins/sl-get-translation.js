import Ember from 'ember';

/** @module sl-translate/mixins/sl-get-translation */
export default Ember.Mixin.create({

    /**
     * Based on value of key, retrieve translation or usual get() value
     *
     * @function get
     * @argument {string} key property to retrieve
     * @return   {string}
     */
    get: function( key ) {
        var translationsRegex = /translate\.(.*)/,
            matches           = key.match( translationsRegex );

        return ( matches ) ? this.translate( matches[1] ) : this._super( key );
    },

    /**
     * Retrieve translated key without support for token replacement or pluralization
     *
     * @function translate
     * @argument {text} key key to translate
     * @return   {text}     translated key
     */
    translate: function( key ) {
        return this.translateService.getKeyValue( key );
    }
});