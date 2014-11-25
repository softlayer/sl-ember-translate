import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        updateStringValues: function() {
            this.controllerFor( 'application' ).set( 'valueToDisplay', 'New Updated Value - ' + Math.random() );
        }
    },

    model: function() {
        return Ember.Object.create({
            'SIMPLE_KEY'   : 'I have been translated',
            'SINGULAR_KEY' : 'View my family',
            'PLURAL_KEY'   : 'View my families',
            'REPLACED_KEY' : 'I have replaced {0} and {1}'
        });
    },

    setupController: function( controller, model ) {
        controller.get( 'translateService' ).setDictionary( model );
    }
});