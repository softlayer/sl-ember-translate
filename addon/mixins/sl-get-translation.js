/** @module sl-translate/mixins/sl-get-translation */

import Ember from 'ember';

export default Ember.Mixin.create({
    get: function( key ) {
        var translationsRegex = /translate\.(.*)/,
            matches           = key.match( translationsRegex );

        return ( matches ) ? this.translate( matches[1] ) : this._super( key );
    },

    translate: function( key ) {
        return this.translateService.getKeyValue( key );
    }
});