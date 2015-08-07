/* global require, module */
const EmberApp = require( 'ember-cli/lib/broccoli/ember-addon' );
const replace = require( 'broccoli-string-replace' );
const packageConfig = require( './package.json' );

module.exports = function( defaults ) {
    const app = new EmberApp( defaults, {
        // Add options here
    });

    /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
    */

    const tree = replace( app.toTree(), {
        files: [
            'index.html',
            'assets/dummy.js'
        ],
        patterns: [
            {
                match: /REPLACE_META_DESCRIPTION/g,
                replacement: packageConfig.description
            },
            {
                match: /REPLACE_META_KEYWORDS/g,
                replacement: packageConfig.keywords.join( ', ' ) + ', ember, ember cli'
            }, {
                match: /REPLACE_APPLICATION_VERSION/g,
                replacement: packageConfig.version
            }
        ]
    });

    return tree;
};
