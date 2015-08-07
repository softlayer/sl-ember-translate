import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-translate', 'Integration | Component | sl translate', {
    beforeEach() {
        this.container.lookup( 'service:sl-translate' )
            .setDictionary(
                Ember.Object.create({
                    'SIMPLE_KEY': 'I have been translated',
                    'SINGULAR_KEY': 'View my family',
                    'PLURAL_KEY': 'View my families',
                    'REPLACED_KEY': 'I have replaced {0} and {1}'
                })
            );
    },

    integration: true
});

test( 'Simple Key Translation', function( assert ) {

    this.render( hbs`
        {{sl-translate key="SIMPLE_KEY" }}
    ` );

    assert.equal(
        this.$().text().trim(),
        'I have been translated',
        'Simple Key was translated'
    );
});

test( 'Single/Plural Keys', function( assert ) {

    this.render( hbs`
        {{sl-translate key="SINGULAR_KEY" pluralKey="PLURAL_KEY" pluralCount="1"}}
    ` );

    assert.equal(
        this.$().text().trim(),
        'View my family',
        'Singular Key was correctly returned'
    );

    this.render( hbs`
        {{sl-translate key="SINGULAR_KEY" pluralKey="PLURAL_KEY" pluralCount="3"}}
    ` );

    assert.equal(
        this.$().text().trim(),
        'View my families',
        'Plural Key was correctly returned'
    );
});

test( 'Replaced Values In Keys', function( assert ) {

    this.render( hbs`
        {{sl-translate key="REPLACED_KEY"}}
    ` );

    assert.equal(
        this.$().text().trim(),
        'I have replaced {0} and {1}',
        'Original String was correct'
    );

    this.render( hbs`
        {{sl-translate key="REPLACED_KEY" $0="First" $1="Unicorn"}}
    ` );

    assert.equal(
        this.$().text().trim(),
        'I have replaced First and Unicorn',
        'Replaced String was correct'
    );

});

test( 'Bound Replacement Values In Keys', function( assert ) {

    this.set( 'valueToDisplay', 'the Bound Value' );

    this.render( hbs`
        {{sl-translate key="REPLACED_KEY" $0="First" $1=valueToDisplay}}
    ` );

    assert.equal(
        this.$().text().trim(),
        'I have replaced First and the Bound Value',
        'Using a bound replacement value works'
    );
});

/**
 * Ensure haven't broken any default behavior of Ember, since manipulate properties passed to the component
 * A side effect of this test is the appearance that core Ember functionality is being tested
 */
test( 'Used Alongside Other Properties', function( assert ) {

    this.render( hbs`
        {{sl-translate key="SIMPLE_KEY"}}
    ` );

    assert.equal(
        this.$( 'em' ).length,
        0,
        'Translate used without another property works'
    );

    this.render( hbs`
        {{sl-translate tagName="em" key="SIMPLE_KEY"}}
    ` );

    assert.equal(
        this.$( 'em' ).length,
        1,
        'Translate used alongside another property works'
    );
});
