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

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'I have been translated',
        'Simple Key was translated'
    );
});

test( 'Single/Plural Keys', function( assert ) {
    this.render( hbs`
        {{sl-translate key="SINGULAR_KEY" pluralKey="PLURAL_KEY" pluralCount="1"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'View my family',
        'Singular Key was correctly returned'
    );

    this.render( hbs`
        {{sl-translate key="SINGULAR_KEY" pluralKey="PLURAL_KEY" pluralCount="3"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'View my families',
        'Plural Key was correctly returned'
    );
});

test( 'Replaced Values In Keys', function( assert ) {
    this.render( hbs`
        {{sl-translate key="REPLACED_KEY"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'I have replaced {0} and {1}',
        'Original String was correct'
    );

    this.render( hbs`
        {{sl-translate key="REPLACED_KEY" $0="First" $1="Unicorn"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'I have replaced First and Unicorn',
        'Replaced String was correct'
    );

});

test( 'Bound Replacement Values In Keys', function( assert ) {
    this.set( 'valueToDisplay', 'the Bound Value' );

    this.render( hbs`
        {{sl-translate key="REPLACED_KEY" $0="First" $1=valueToDisplay}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'I have replaced First and the Bound Value',
        'Using a bound replacement value works'
    );
});
