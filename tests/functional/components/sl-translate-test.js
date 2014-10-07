import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';

var translateService = Ember.Object.create({
        translateKey: function( data ) {
            this.set( 'key', data.key );
            this.set( 'pluralKey', data.pluralKey );
            this.set( 'pluralCount', data.pluralCount );
            this.set( 'parameters', data.parameters );

            return 'TRANSLATE: ' + data.key;
        }
    });

moduleForComponent( 'sl-translate', 'Functional - component:sl-translate' );

/**
 * Ensures that the template is wrapping the content in a span tag and not in any block-level tags. While it appears
 * that core Ember functionality is being tested this test is ensuring that the implied contract about how this non-UI
 * component is rendered into the DOM is adhered to.
 */
test( 'Renders as a span tag with no classes', function() {
    var component  = this.subject({ translateService: translateService }),
        $component = this.append();

    equal( $component.prop( 'tagName' ), 'SPAN' );
    equal( $component.prop( 'class'), 'ember-view' );
});

/**
 * That it renders and functions as expected
 */
test( 'DOM and content of rendered translation', function() {
    var component = this.subject({
            key              : 'the_key',
            translateService : translateService
        }),
        $component = this.append();

    equal( $component.text(), 'TRANSLATE: the_key' );
    ok( /metamorph-[0-9]*-start/.test( $component.prop( 'firstChild' ).id ) );
    ok( /metamorph-[0-9]*-end/.test( $component.prop( 'lastChild' ).id ) );
});
