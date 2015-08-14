import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updateStringValues: function() {
           this.set( 'valueToDisplay', 'New Updated Value - ' + Math.random() );
        }
    },
    valueToDisplay: 'Unicorn'
});
