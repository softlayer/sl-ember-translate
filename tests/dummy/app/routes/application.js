import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        updateStringValues: function() {
            this.controllerFor( 'application' ).set( 'valueToDisplay', 'New Updated Value - ' + Math.random() );
        }
    },

    beforeModel: function() {
        var _this = this;

        return new Ember.RSVP.Promise( function( resolve ) {
            $.ajax( '/api/translation' ).done( function( response ) {
                _this.controllerFor( 'application' ).get( 'translateService' ).setDictionary( Ember.Object.create(response) );
                resolve();
            });
        });
    }
});