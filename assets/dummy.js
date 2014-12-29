define("dummy/Ember CLI QUnit/tests/ember-cli-qunit/components/sl-translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-qunit/components');
    test('ember-cli-qunit/components/sl-translate.js should pass jshint', function() { 
      ok(true, 'ember-cli-qunit/components/sl-translate.js should pass jshint.'); 
    });
  });
define("dummy/Ember CLI QUnit/tests/ember-cli-qunit/initializers/translate-service.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-qunit/initializers');
    test('ember-cli-qunit/initializers/translate-service.js should pass jshint', function() { 
      ok(true, 'ember-cli-qunit/initializers/translate-service.js should pass jshint.'); 
    });
  });
define("dummy/Ember CLI QUnit/tests/ember-cli-qunit/mixins/sl-get-translation.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-qunit/mixins');
    test('ember-cli-qunit/mixins/sl-get-translation.js should pass jshint', function() { 
      ok(true, 'ember-cli-qunit/mixins/sl-get-translation.js should pass jshint.'); 
    });
  });
define("dummy/Ember CLI QUnit/tests/ember-cli-qunit/services/translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-qunit/services');
    test('ember-cli-qunit/services/translate.js should pass jshint', function() { 
      ok(true, 'ember-cli-qunit/services/translate.js should pass jshint.'); 
    });
  });
define("dummy/app", 
  ["ember","ember/resolver","ember/load-initializers","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("dummy/components/sl-translate", 
  ["sl-ember-translate/components/sl-translate","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var component = __dependency1__["default"];

    /** @module initializers/translate-service */
    __exports__["default"] = component;
  });
define("dummy/controllers/demo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({
        valueToDisplay: 'Unicorn'
    });
  });
define("dummy/ember-cli-es5-shim/tests/ember-cli-es5-shim/components/sl-translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-es5-shim/components');
    test('ember-cli-es5-shim/components/sl-translate.js should pass jshint', function() { 
      ok(true, 'ember-cli-es5-shim/components/sl-translate.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-es5-shim/tests/ember-cli-es5-shim/initializers/translate-service.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-es5-shim/initializers');
    test('ember-cli-es5-shim/initializers/translate-service.js should pass jshint', function() { 
      ok(true, 'ember-cli-es5-shim/initializers/translate-service.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-es5-shim/tests/ember-cli-es5-shim/mixins/sl-get-translation.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-es5-shim/mixins');
    test('ember-cli-es5-shim/mixins/sl-get-translation.js should pass jshint', function() { 
      ok(true, 'ember-cli-es5-shim/mixins/sl-get-translation.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-es5-shim/tests/ember-cli-es5-shim/services/translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-es5-shim/services');
    test('ember-cli-es5-shim/services/translate.js should pass jshint', function() { 
      ok(true, 'ember-cli-es5-shim/services/translate.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-esnext/tests/ember-cli-esnext/components/sl-translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-esnext/components');
    test('ember-cli-esnext/components/sl-translate.js should pass jshint', function() { 
      ok(true, 'ember-cli-esnext/components/sl-translate.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-esnext/tests/ember-cli-esnext/initializers/translate-service.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-esnext/initializers');
    test('ember-cli-esnext/initializers/translate-service.js should pass jshint', function() { 
      ok(true, 'ember-cli-esnext/initializers/translate-service.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-esnext/tests/ember-cli-esnext/mixins/sl-get-translation.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-esnext/mixins');
    test('ember-cli-esnext/mixins/sl-get-translation.js should pass jshint', function() { 
      ok(true, 'ember-cli-esnext/mixins/sl-get-translation.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-esnext/tests/ember-cli-esnext/services/translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-esnext/services');
    test('ember-cli-esnext/services/translate.js should pass jshint', function() { 
      ok(true, 'ember-cli-esnext/services/translate.js should pass jshint.'); 
    });
  });
define("dummy/ember-data/tests/ember-data/components/sl-translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-data/components');
    test('ember-data/components/sl-translate.js should pass jshint', function() { 
      ok(true, 'ember-data/components/sl-translate.js should pass jshint.'); 
    });
  });
define("dummy/ember-data/tests/ember-data/initializers/translate-service.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-data/initializers');
    test('ember-data/initializers/translate-service.js should pass jshint', function() { 
      ok(true, 'ember-data/initializers/translate-service.js should pass jshint.'); 
    });
  });
define("dummy/ember-data/tests/ember-data/mixins/sl-get-translation.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-data/mixins');
    test('ember-data/mixins/sl-get-translation.js should pass jshint', function() { 
      ok(true, 'ember-data/mixins/sl-get-translation.js should pass jshint.'); 
    });
  });
define("dummy/ember-data/tests/ember-data/services/translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-data/services');
    test('ember-data/services/translate.js should pass jshint', function() { 
      ok(true, 'ember-data/services/translate.js should pass jshint.'); 
    });
  });
define("dummy/ember-export-application-global/tests/ember-export-application-global/components/sl-translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-export-application-global/components');
    test('ember-export-application-global/components/sl-translate.js should pass jshint', function() { 
      ok(true, 'ember-export-application-global/components/sl-translate.js should pass jshint.'); 
    });
  });
define("dummy/ember-export-application-global/tests/ember-export-application-global/initializers/translate-service.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-export-application-global/initializers');
    test('ember-export-application-global/initializers/translate-service.js should pass jshint', function() { 
      ok(true, 'ember-export-application-global/initializers/translate-service.js should pass jshint.'); 
    });
  });
define("dummy/ember-export-application-global/tests/ember-export-application-global/mixins/sl-get-translation.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-export-application-global/mixins');
    test('ember-export-application-global/mixins/sl-get-translation.js should pass jshint', function() { 
      ok(true, 'ember-export-application-global/mixins/sl-get-translation.js should pass jshint.'); 
    });
  });
define("dummy/ember-export-application-global/tests/ember-export-application-global/services/translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-export-application-global/services');
    test('ember-export-application-global/services/translate.js should pass jshint', function() { 
      ok(true, 'ember-export-application-global/services/translate.js should pass jshint.'); 
    });
  });
define("dummy/initializers/export-application-global", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
define("dummy/initializers/translate-service", 
  ["sl-ember-translate/initializers/translate-service","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var initializer = __dependency1__["default"];

    __exports__["default"] = {
      name: 'translate-service',

      initialize: initializer
    };
  });
define("dummy/live-reload-middleware/tests/live-reload-middleware/components/sl-translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - live-reload-middleware/components');
    test('live-reload-middleware/components/sl-translate.js should pass jshint', function() { 
      ok(true, 'live-reload-middleware/components/sl-translate.js should pass jshint.'); 
    });
  });
define("dummy/live-reload-middleware/tests/live-reload-middleware/initializers/translate-service.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - live-reload-middleware/initializers');
    test('live-reload-middleware/initializers/translate-service.js should pass jshint', function() { 
      ok(true, 'live-reload-middleware/initializers/translate-service.js should pass jshint.'); 
    });
  });
define("dummy/live-reload-middleware/tests/live-reload-middleware/mixins/sl-get-translation.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - live-reload-middleware/mixins');
    test('live-reload-middleware/mixins/sl-get-translation.js should pass jshint', function() { 
      ok(true, 'live-reload-middleware/mixins/sl-get-translation.js should pass jshint.'); 
    });
  });
define("dummy/live-reload-middleware/tests/live-reload-middleware/services/translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - live-reload-middleware/services');
    test('live-reload-middleware/services/translate.js should pass jshint', function() { 
      ok(true, 'live-reload-middleware/services/translate.js should pass jshint.'); 
    });
  });
define("dummy/router", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function() {
        this.route( 'index', { path: '/' });
        this.route( 'demo' );
    });

    __exports__["default"] = Router;
  });
define("dummy/routes/demo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({

        actions: {
            updateStringValues: function() {
                this.controllerFor( 'demo' ).set( 'valueToDisplay', 'New Updated Value - ' + Math.random() );
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
  });
define("dummy/sl-ember-translate/tests/sl-ember-translate/components/sl-translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sl-ember-translate/components');
    test('sl-ember-translate/components/sl-translate.js should pass jshint', function() { 
      ok(true, 'sl-ember-translate/components/sl-translate.js should pass jshint.'); 
    });
  });
define("dummy/sl-ember-translate/tests/sl-ember-translate/initializers/translate-service.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sl-ember-translate/initializers');
    test('sl-ember-translate/initializers/translate-service.js should pass jshint', function() { 
      ok(true, 'sl-ember-translate/initializers/translate-service.js should pass jshint.'); 
    });
  });
define("dummy/sl-ember-translate/tests/sl-ember-translate/mixins/sl-get-translation.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sl-ember-translate/mixins');
    test('sl-ember-translate/mixins/sl-get-translation.js should pass jshint', function() { 
      ok(true, 'sl-ember-translate/mixins/sl-get-translation.js should pass jshint.'); 
    });
  });
define("dummy/sl-ember-translate/tests/sl-ember-translate/services/translate.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sl-ember-translate/services');
    test('sl-ember-translate/services/translate.js should pass jshint', function() { 
      ok(true, 'sl-ember-translate/services/translate.js should pass jshint.'); 
    });
  });
define("dummy/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push("<i class=\"fa fa-home\"></i> Home");
      }

      data.buffer.push("<br>\n<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"btn-group pull-right\">\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <i class=\"fa fa-reorder\"></i> <span class=\"caret\"></span>\n                </button>\n\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                <li>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-translate/blob/master/README.md\"><i class=\"fa fa-wrench\"></i> Get Started</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-translate/blob/master/CONTRIBUTING.md\"><i class=\"fa fa-cog\"></i> Contribution Guide</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-translate/stargazers\"><i class=\"fa fa-star\"></i> Star Our Repo</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-translate/fork\"><i class=\"fa fa-code-fork\"></i> Fork Our Repo</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    ");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n    <br><br>\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n            <p>npm install sl-ember-translate</p>\n            <p><a href=\"https://github.com/softlayer/sl-ember-translate/blob/master/LICENSE.md\">MIT Licensed</a></p>\n        </div>\n    </div>\n</div>");
      return buffer;
      
    });
  });
define("dummy/templates/demo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


      data.buffer.push("<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <h1>Usage Demonstration</h1>\n        <p class=\"lead\">View the source code of the dummy application for syntax employed in this demo</p>\n    </div>\n</div>\n\n<h4>Simple Key</h4>\n");
      data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
        'key': ("SIMPLE_KEY")
      },hashTypes:{'key': "STRING"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
      data.buffer.push("\n\n<br><br>\n<h4>Singular/Plural Keys</h4>\n");
      data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
        'key': ("SINGULAR_KEY"),
        'pluralKey': ("PLURAL_KEY"),
        'pluralCount': ("1")
      },hashTypes:{'key': "STRING",'pluralKey': "STRING",'pluralCount': "STRING"},hashContexts:{'key': depth0,'pluralKey': depth0,'pluralCount': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
      data.buffer.push("<br>\n");
      data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
        'key': ("SINGULAR_KEY"),
        'pluralKey': ("PLURAL_KEY"),
        'pluralCount': ("3")
      },hashTypes:{'key': "STRING",'pluralKey': "STRING",'pluralCount': "STRING"},hashContexts:{'key': depth0,'pluralKey': depth0,'pluralCount': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
      data.buffer.push("\n\n<br><br>\n<h4>Replaced Values In Keys</h4>\nOriginal String: ");
      data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
        'key': ("REPLACED_KEY")
      },hashTypes:{'key': "STRING"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
      data.buffer.push("<br>\nReplaced String: ");
      data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
        'key': ("REPLACED_KEY"),
        '$0': ("First"),
        '$1': ("Unicorn")
      },hashTypes:{'key': "STRING",'$0': "STRING",'$1': "STRING"},hashContexts:{'key': depth0,'$0': depth0,'$1': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
      data.buffer.push("\n\n<br><br>\n<h4>Bound Replacement Values In Keys</h4>\nString Will Update: ");
      data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
        'key': ("REPLACED_KEY"),
        '$0': ("First"),
        '$1Binding': ("valueToDisplay")
      },hashTypes:{'key': "STRING",'$0': "STRING",'$1Binding': "STRING"},hashContexts:{'key': depth0,'$0': depth0,'$1Binding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
      data.buffer.push("\n<br><br>\n<button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateStringValues", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">Update Values</button>\n\n<br><br>\n<h4>Used alongside other properties or attribute bindings</h4>\n");
      data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
        'tagName': ("em"),
        'key': ("REPLACED_KEY"),
        '$0': ("First"),
        '$1': ("Dragon")
      },hashTypes:{'tagName': "STRING",'key': "STRING",'$0': "STRING",'$1': "STRING"},hashContexts:{'tagName': depth0,'key': depth0,'$0': depth0,'$1': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("dummy/templates/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push("<i class=\"fa fa-cubes fa-5x\"></i>");
      }

    function program3(depth0,data) {
      
      
      data.buffer.push("<b>Demo</b>");
      }

      data.buffer.push("<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <h1>sl-ember-translate</h1>\n        <p class=\"lead\">An Ember CLI Addon that provides the ability to lookup a dictionary value through method calls or via a component in your templates.</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-4 text-center\">\n        <h3>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demo", options) : helperMissing.call(depth0, "link-to", "demo", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h3>\n        <p>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demo", options) : helperMissing.call(depth0, "link-to", "demo", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n        <h3><a href=\"https://github.com/softlayer/sl-ember-translate/blob/master/README.md\"><i class=\"fa fa-book fa-5x\"></i></a></h3>\n        <p><a href=\"https://github.com/softlayer/sl-ember-translate/blob/master/README.md\"><b>Documentation</b></a></p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n        <h3><a href=\"https://github.com/softlayer/sl-ember-translate\"><i class=\"fa fa-github fa-5x\"></i></a></h3>\n        <p><a href=\"https://github.com/softlayer/sl-ember-translate\"><b>Available on GitHub</b></a></p>\n    </div>\n</div>");
      return buffer;
      
    });
  });
define("dummy/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("dummy/tests/controllers/demo.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/demo.js should pass jshint', function() { 
      ok(true, 'controllers/demo.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests');
    test('dummy/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'dummy/tests/test-helper.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/unit/components/sl-translate-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/unit/components');
    test('dummy/tests/unit/components/sl-translate-test.js should pass jshint', function() { 
      ok(true, 'dummy/tests/unit/components/sl-translate-test.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/unit/initializers/translate-service-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/unit/initializers');
    test('dummy/tests/unit/initializers/translate-service-test.js should pass jshint', function() { 
      ok(true, 'dummy/tests/unit/initializers/translate-service-test.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/unit/mixins/sl-get-translation-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/unit/mixins');
    test('dummy/tests/unit/mixins/sl-get-translation-test.js should pass jshint', function() { 
      ok(true, 'dummy/tests/unit/mixins/sl-get-translation-test.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/unit/services/translate-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/unit/services');
    test('dummy/tests/unit/services/translate-test.js should pass jshint', function() { 
      ok(true, 'dummy/tests/unit/services/translate-test.js should pass jshint.'); 
    });
  });
define("dummy/tests/helpers/resolver", 
  ["ember/resolver","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("dummy/tests/helpers/start-app", 
  ["ember","dummy/app","dummy/router","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function() {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("dummy/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("dummy/tests/routes/demo.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/demo.js should pass jshint', function() { 
      ok(true, 'routes/demo.js should pass jshint.'); 
    });
  });
define("dummy/tests/test-helper", 
  ["dummy/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

    QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
    var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
    document.getElementById('ember-testing-container').style.visibility = containerVisibility;
  });
define("dummy/tests/unit/components/sl-translate-test", 
  ["ember","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var test = __dependency2__.test;
    var moduleForComponent = __dependency2__.moduleForComponent;

    var translateService = Ember.Object.create({
            translateKey: function( data ) {
                this.set( 'key', data.key );
                this.set( 'pluralKey', data.pluralKey );
                this.set( 'pluralCount', data.pluralCount );
                this.set( 'parameters', data.parameters );

                return 'TRANSLATE: ' + data.key;
            }
        });

    moduleForComponent( 'sl-translate', 'Unit - component:sl-translate' );

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
    });

    /**
     * Ensure haven't broken any default behavior of Ember, since manipulate properties passed to the component
     * A side effect of this test is the appearance that core Ember functionality is being tested
     */
    test( 'Can be used alongside other properties or attribute bindings', function() {
        var component  = this.subject({
                translateService : translateService,
                key              : 'key_alongside',
                tagName          : 'h1',
                classNames       : [ 'testClass' ]
            }),
            $component = this.append();

        equal( $component.prop( 'tagName' ), 'H1' );
        equal( $component.text(), 'TRANSLATE: key_alongside' );
        equal( $component.prop( 'class'), ['ember-view testClass'] );
    });

    test( 'On initialization, extractParameterKeys() filters passed parameters', function() {
        var component = this.subject({
                key         : 'the_key',
                pluralKey   : 'plural_key',
                pluralCount : 'plural_count',
                $0          : 'a',
                $1Binding   : 'b',
                $2          : 'c'
            });

        deepEqual( component.get( 'parameters' ).sort(), [ '$0', '$1', '$2' ] );
    });

    test( 'On initialization, extractParameterKeys() filters passed parameters to be bound', function() {
        var component = this.subject({
                key         : 'the_key',
                pluralKey   : 'plural_key',
                pluralCount : 'plural_count',
                $0          : 'a',
                $1Binding   : 'b',
                $2          : 'c'
            });

        deepEqual( component.get( 'observedParameters' ), [ '$1' ] );
    });

    test( 'setTranslatedString() sets translatedString property with value from translateString()', function() {
        var component = this.subject();

        component.translateString = function() {
            return 'test value';
        };

        component.setTranslatedString();

        equal( component.get( 'translatedString' ), 'test value' );
    });

    test( 'translateString() calls translateKey() on the translation service', function() {
        var component = this.subject({
                translateService : translateService,
                key              : 'the_key',
                pluralKey        : 'plural_key',
                pluralCount      : 'plural_count',
                $0               : 'a',
                $1               : 'b'
            }),
            $component = this.append();

        equal( translateService.get( 'key' ), 'the_key' );
        equal( translateService.get( 'pluralKey' ), 'plural_key' );
        equal( translateService.get( 'pluralCount' ), 'plural_count' );
        deepEqual( translateService.get( 'parameters' ), { $0: 'a', $1: 'b' } );
    });

    test( 'willInsertElement event causes setTranslatedString() to be called', function() {
        var component                    = this.subject(),
            setTranslatedStringWasCalled = false;

        component.setTranslatedString = function() {
            setTranslatedStringWasCalled = true;
        };

        // Render in DOM to trigger willInsertElement event
        this.append();

        equal( setTranslatedStringWasCalled, true );
    });

    test( 'willInsertElement event causes observers to be added to each entry in observedParameters property', function() {
        var component = this.subject({
                translateService : translateService,
                key              : 'the_key',
                $0Binding        : 'a',
                $1               : 'b'
            }),
            setTranslatedStringWasCalled = false,
            $component;

        component.setTranslatedString = function() {
            setTranslatedStringWasCalled = true;
        };

        // Render in DOM to trigger willInsertElement event
        $component = this.append();

        // Change value so can monitor for change
        setTranslatedStringWasCalled = false;

        Ember.run( function(){
            component.set( '$0', 'c' );
        });

        equal( setTranslatedStringWasCalled, true );
    });

    test( 'willClearRender event causes observers to be removed', function() {
        var component = this.subject({
                translateService : translateService,
                key              : 'the_key',
                $0Binding        : 'a',
                $1               : 'b'
            }),
            setTranslatedStringWasCalled = false,
            $component;

        component.setTranslatedString = function() {
            setTranslatedStringWasCalled = true;
        };

        // Render in DOM to trigger willInsertElement event
        $component = this.append();

        // Change value so can monitor for change
        setTranslatedStringWasCalled = false;

        component.trigger( 'willClearRender' );

        Ember.run( function(){
            component.set( '$0', 'c' );
        });

        equal( setTranslatedStringWasCalled, false );
    });
  });
define("dummy/tests/unit/initializers/translate-service-test", 
  ["ember","ember-qunit","dummy/tests/helpers/start-app"],
  function(__dependency1__, __dependency2__, __dependency3__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var test = __dependency2__.test;
    var moduleForComponent = __dependency2__.moduleForComponent;
    var startApp = __dependency3__["default"];

    var App;

    module( 'Unit - initializer:translate-service', {
        setup: function() {
            App = startApp();
        },

        teardown: function() {
            Ember.run( App, App.destroy );
        }
    });

    test( 'Registered on container as a singleton', function() {
        equal( typeof App.__container__.lookup( 'translateService:main' ), 'object' );
        notEqual( App.__container__._options['translateService:main'].instantiate, 'undefined' );
        equal( App.__container__._options['translateService:main'].instantiate, false );
    });

    test( 'Injected on controllers', function() {
        var findBy = App.__container__.typeInjections.controller.findBy( 'fullName', 'translateService:main' );

        notEqual( findBy, 'undefined' );
        equal( findBy.property, 'translateService' );
    });

    test( 'Injected on views', function() {
        var findBy = App.__container__.typeInjections.view.findBy( 'fullName', 'translateService:main' );

        notEqual( findBy, 'undefined' );
        equal( findBy.property, 'translateService' );
    });

    test( 'Injected on components', function() {
        var findBy = App.__container__.typeInjections.component.findBy( 'fullName', 'translateService:main' );

        notEqual( findBy, 'undefined' );
        equal( findBy.property, 'translateService' );
    });
  });
define("dummy/tests/unit/mixins/sl-get-translation-test", 
  ["ember","sl-ember-translate/mixins/sl-get-translation"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var mixinUnderTest = __dependency2__["default"];

    module( 'Unit - mixins:sl-get-translation' );

    test( 'Successfully mixed', function() {
        expect(1);

        var testObject = Ember.Object.extend( mixinUnderTest ),
            subject    = testObject.create();

        ok( subject );
    });

    test( 'Call to get() with a key not beginning with "translate." is not intercepted', function() {
        expect(1);

        var testObject = Ember.Object.extend( mixinUnderTest, {
                testKey: 'testValue'
            }),
            subject    = testObject.create();

        equal( subject.get( 'testKey' ), 'testValue' );
    });

    test( 'Call to get() with a key beginning with "translate." calls this.translate()', function() {
        expect(1);

        var testObject = Ember.Object.extend( mixinUnderTest, {
                translate: function( value ) {
                    return value;
                }
            }),
            subject    = testObject.create();

        equal( subject.get( 'translate.testingKey' ), 'testingKey' );
    });

    test( 'translate() returns call to this.translateService.getKeyValue()', function() {
        expect(1);

        var testObject = Ember.Object.extend( mixinUnderTest, {
                translateService: {
                    getKeyValue: function( value ) {
                        return value;
                    }
                }
            }),
            subject    = testObject.create();

        equal( subject.translate( 'called' ), 'called' );
    });
  });
define("dummy/tests/unit/services/translate-test", 
  ["ember","ember-qunit","sl-ember-translate/services/translate"],
  function(__dependency1__, __dependency2__, __dependency3__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var test = __dependency2__.test;
    var moduleFor = __dependency2__.moduleFor;
    var TranslateService = __dependency3__["default"];

    var TS;

    module( 'Unit - services:translate', {
        setup: function() {
            TS = TranslateService.create();
        }
    });

    test( 'container property defaults to null', function() {
        expect(1);

        equal( TS.get( 'container' ), null );
    });

    test( 'dictionary property defaults to null', function() {
        expect(1);

        equal( TS.get( 'dictionary' ), null );
    });

    test( 'setDictionary() sets data on the dictionary property', function() {
        expect(1);

        var testDictionary = Ember.Object.create( { 'the_key': 'my value' } );

        TS.setDictionary( testDictionary );

        deepEqual( TS.get( 'dictionary' ), testDictionary );
    });

    test( 'getKeyValue() returns requested key if not found in dictionary', function() {
        expect(1);

        TS.setDictionary( Ember.Object.create( { 'the_key': 'my value' } ) );

        notEqual( TS.getKeyValue( 'wrong_key' ), 'the_key' );
    });

    test( 'getKeyValue() returns requested key\'s translated string', function() {
        expect(1);

        TS.setDictionary( Ember.Object.create( { 'the_key': 'my value' } ) );

        equal( TS.getKeyValue( 'the_key' ), 'my value' );
    });

    test( 'translateKey() requires an argument to be provided', function() {
        expect(1);

        var assertionThrown = false;

        try {
            TS.translateKey();
        } catch( error ) {
            assertionThrown = true;
        }

        ok( assertionThrown );
    });

    test( 'translateKey() returns translated string for specified key', function() {
        expect(1);

        TS.setDictionary( Ember.Object.create( { 'the_key': 'my value' } ) );

        equal( TS.getKeyValue( 'the_key' ), 'my value' );
    });

    test( 'If either "pluralKey" or "pluralCount" are provided to translateKey() then both must be', function() {
        expect(2);

        equal( TS.translateKey( { key: 'singular_key', pluralKey: 'plural_key' } ), 'singular_key' );
        equal( TS.translateKey( { key: 'singular_key', pluralCount: 3 } ), 'singular_key' );
    });

    test( 'Pluralization only works if "pluralCount" is a number', function() {
        expect(1);

        TS.setDictionary( Ember.Object.create( {
            'the_singular_key' : 'Singular translated value',
            'the_plural_key'   : 'Plural translated value'
        }));

        notEqual( TS.translateKey( { key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 'two' } ), 'Plural translated value' );
    });

    test( 'Pluralization occurs when provided the necessary information', function() {
        expect(2);

        TS.setDictionary( Ember.Object.create( {
            'the_singular_key' : 'Singular translated value',
            'the_plural_key'   : 'Plural translated value'
        }));

        equal( TS.translateKey( { key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 0 } ), 'Singular translated value' );
        equal( TS.translateKey( { key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 3 } ), 'Plural translated value' );
    });

    test( 'Token replacement in translation string', function() {
        expect(1);

        TS.setDictionary( Ember.Object.create( {
            'the_key': 'Replaced values: {0} and {1}'
        }));

        equal( TS.translateKey({
            key        : 'the_key',
            parameters : {
                $0: 'ASDF',
                $1: 1234
            }
        }), 'Replaced values: ASDF and 1234' );
    });
  });
/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map