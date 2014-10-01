/** @module sl-translate/initializers/translate-service */

import TranslateService from '../services/translate';

export default function( container, app ) {
    var translateService  = TranslateService.create();

    // Inject Translate Service
    container.register( 'translateService:main', translateService, { instantiate: false } );
    app.inject( 'view', 'translateService', 'translateService:main' );
    app.inject( 'controller', 'translateService', 'translateService:main' );
    app.inject( 'component', 'translateService', 'translateService:main' );
}