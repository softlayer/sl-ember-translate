/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/sl-translate', ['exports', 'sl-ember-translate/components/sl-translate'], function (exports, component) {

	'use strict';

	exports['default'] = component['default'];

});
define('dummy/controllers/demo', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        valueToDisplay: "Unicorn"
    });

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function (container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('dummy/initializers/translate-service', ['exports', 'sl-ember-translate/initializers/translate-service'], function (exports, initializer) {

  'use strict';

  exports['default'] = {
    name: "translate-service",

    initialize: initializer['default']
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

    'use strict';

    var Router = Ember['default'].Router.extend({
        location: config['default'].locationType
    });

    Router.map(function () {
        this.route("index", { path: "/" });
        this.route("demo");
    });

    exports['default'] = Router;

});
define('dummy/routes/demo', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        actions: {
            updateStringValues: function () {
                this.controllerFor("demo").set("valueToDisplay", "New Updated Value - " + Math.random());
            }
        },

        model: function () {
            return Ember['default'].Object.create({
                SIMPLE_KEY: "I have been translated",
                SINGULAR_KEY: "View my family",
                PLURAL_KEY: "View my families",
                REPLACED_KEY: "I have replaced {0} and {1}"
            });
        },

        setupController: function (controller, model) {
            controller.get("translateService").setDictionary(model);
        }
    });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/components/sl-translate.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-translate/components");
  test("modules/sl-ember-translate/components/sl-translate.js should pass jshint", function () {
    ok(true, "modules/sl-ember-translate/components/sl-translate.js should pass jshint.");
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/initializers/translate-service.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-translate/initializers");
  test("modules/sl-ember-translate/initializers/translate-service.js should pass jshint", function () {
    ok(true, "modules/sl-ember-translate/initializers/translate-service.js should pass jshint.");
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/mixins/sl-get-translation.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-translate/mixins");
  test("modules/sl-ember-translate/mixins/sl-get-translation.js should pass jshint", function () {
    ok(true, "modules/sl-ember-translate/mixins/sl-get-translation.js should pass jshint.");
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/services/translate.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-translate/services");
  test("modules/sl-ember-translate/services/translate.js should pass jshint", function () {
    ok(true, "modules/sl-ember-translate/services/translate.js should pass jshint.");
  });

});
define('dummy/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
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
    data.buffer.push("\n\n    <br><br>\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n            <p>ember install:addon sl-ember-translate</p>\n            <p><a href=\"https://github.com/softlayer/sl-ember-translate/blob/master/LICENSE.md\">MIT Licensed</a></p>\n        </div>\n    </div>\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demo', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
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
define('dummy/templates/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
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
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demo.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/demo.js should pass jshint', function() { 
    ok(true, 'controllers/demo.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/sl/register-test-helpers', ['exports', 'ember', 'dummy/tests/helpers/sl/synchronous'], function (exports, Ember, synchronous) {

    'use strict';

    exports['default'] = function () {
        Ember['default'].Test.registerHelper("contains", synchronous.contains);
        Ember['default'].Test.registerHelper("ajax", synchronous.ajax);
        Ember['default'].Test.registerHelper("requires", synchronous.requires);
    };

});
define('dummy/tests/helpers/sl/synchronous', ['exports', 'dummy/tests/helpers/sl/synchronous/contains', 'dummy/tests/helpers/sl/synchronous/ajax', 'dummy/tests/helpers/sl/synchronous/requires'], function (exports, contains, ajax, requires) {

	'use strict';



	exports.contains = contains['default'];
	exports.ajax = ajax['default'];
	exports.requires = requires['default'];

});
define('dummy/tests/helpers/sl/synchronous/ajax', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var AjaxHelper = function () {};

    /**
     * Emulate the beginning of an AJAX request
     *
     * @param   {Ember.String} endpoint
     * @returns {void}
     */
    AjaxHelper.prototype.begin = function (endpoint) {
        Ember['default'].run(function () {
            if (endpoint) {
                $(document).trigger("ajaxSend", [null, { url: endpoint }]);
            } else {
                $(document).trigger("ajaxStart");
            }
        });
    };

    /**
     * Emulate the conclusion of an AJAX request
     *
     * @param   {Ember.String} endpoint
     * @returns {void}
     */
    AjaxHelper.prototype.end = function (endpoint) {
        Ember['default'].run(function () {
            if (endpoint) {
                $(document).trigger("ajaxComplete", [null, { url: endpoint }]);
            } else {
                $(document).trigger("ajaxStop");
            }
        });
    };

    var helper = new AjaxHelper();

    exports['default'] = helper;

});
define('dummy/tests/helpers/sl/synchronous/contains', ['exports', 'ember', 'dummy/tests/helpers/sl/utils/utils'], function (exports, Ember, utils) {

    'use strict';

    exports['default'] = function () {
        var index = 3 === arguments.length ? 1 : 0,
            underTest = arguments[index],
            testFor = arguments[index + 1];

        Ember['default'].assert("First non-optional argument must be an array, string or object", "object" === typeof underTest || "string" === typeof underTest || Array.isArray(underTest));

        Ember['default'].assert("Second non-optional argument must be an array, string or object", "object" === typeof testFor || "string" === typeof testFor || Array.isArray(testFor));

        return utils.doArraysIntersect(utils.convertToArray(underTest), utils.convertToArray(testFor));
    };

});
define('dummy/tests/helpers/sl/synchronous/requires', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = function (methodUnderTest, requiredTypes) {
        var typesToTest = {
            number: {
                required: false,
                testValue: 123987465,
                message: "Parameter was a number"
            },
            string: {
                required: false,
                testValue: "testString",
                message: "Parameter was a string"
            },
            array: {
                required: false,
                testValue: [],
                message: "Parameter was an array"
            },
            object: {
                required: false,
                testValue: {},
                message: "Parameter was an object"
            },
            "function": {
                required: false,
                testValue: function () {},
                message: "Parameter was a function"
            },
            undefined: {
                required: false,
                testValue: undefined,
                message: "Parameter was undefined"
            },
            boolean: {
                required: false,
                testValue: true,
                message: "Parameter was a boolean"
            }
        },
            testsThatHaveFailed = [],
            assertionThrown,
            assertionPassed,
            property,
            parameter;

        Ember['default'].assert("First argument must be a function", "function" === typeof methodUnderTest);
        Ember['default'].assert("Second argument must be an array", Array.isArray(requiredTypes));

        // Set required parameter types
        requiredTypes.forEach(function (item) {
            typesToTest[item].required = true;
        });

        // Test each parameter type
        for (property in typesToTest) {
            if (typesToTest.hasOwnProperty(property)) {
                // Reset flag
                assertionThrown = false;

                // Assign cleaner object reference
                parameter = typesToTest[property];

                // Test parameter
                try {
                    methodUnderTest(parameter.testValue);
                } catch (error) {
                    assertionThrown = true;
                }

                assertionPassed = parameter.required ? !assertionThrown : assertionThrown;

                if (!assertionPassed) {
                    testsThatHaveFailed.push(parameter.message);
                }
            }
        }

        return {
            requires: 0 === testsThatHaveFailed.length ? true : false,
            messages: testsThatHaveFailed.join("; ")
        };
    };

});
define('dummy/tests/helpers/sl/utils/utils', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var convertToArray = function (underTest) {
        var returnArray;

        if (Array.isArray(underTest)) {
            returnArray = underTest;
        } else {
            switch (typeof underTest) {
                case "string":
                    returnArray = convertStringToArray(underTest);
                    break;

                case "object":
                    returnArray = convertObjectKeysToArray(underTest);
                    break;
            }
        }

        Ember['default'].assert("String, Object or Array must be supplied", "undefined" !== typeof returnArray);

        return returnArray;
    };

    /**
     * Splits a string into an array of individual "words" as delineated by spaces
     *
     * Primarily exists to convert format of call to .prop( 'class' )
     *
     * @function convertStringToArray
     * @param   {string} underTest
     * @throws  {Ember.assert} If argument is not provided or is not a string
     * @returns {array}
     */
    var convertStringToArray = function (underTest) {
        Ember['default'].assert("String must be supplied", "string" === typeof underTest);

        return underTest.split(" ");
    };

    /**
     * Returns an array containing all of the property names of an object
     *
     * Property names are only extracted from the object provided.  No recursion into nested objects occurs.
     *
     * @function convertObjectKeysToArray
     * @param   {object} underTest
     * @throws  {Ember.assert} If argument is not provided or is not an object
     * @returns {array}
     */
    var convertObjectKeysToArray = function (underTest) {
        Ember['default'].assert("Object must be supplied", "object" === typeof underTest && !Array.isArray(underTest));

        return Object.keys(underTest);
    };

    /**
     * [doArraysIntersect description]
     *
     * @function doArraysIntersect
     * @param  {array} underTest
     * @param  {array} testFor
     * @return {boolean}
     */
    var doArraysIntersect = function (underTest, testFor) {
        Ember['default'].assert("Parameters must be Arrays", Array.isArray(underTest) && Array.isArray(testFor));

        return testFor.some(function (v) {
            return underTest.indexOf(v) >= 0;
        });
    };

    exports.convertToArray = convertToArray;
    exports.convertStringToArray = convertStringToArray;
    exports.convertObjectKeysToArray = convertObjectKeysToArray;
    exports.doArraysIntersect = doArraysIntersect;

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/tests/helpers/sl/register-test-helpers', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, slregisterTestHelpers, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      slregisterTestHelpers['default']();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/demo.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/demo.js should pass jshint', function() { 
    ok(true, 'routes/demo.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-translate-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

    'use strict';

    var translateService = Ember['default'].Object.create({
        translateKey: function (data) {
            this.set("key", data.key);
            this.set("pluralKey", data.pluralKey);
            this.set("pluralCount", data.pluralCount);
            this.set("parameters", data.parameters);

            return "TRANSLATE: " + data.key;
        }
    });

    ember_qunit.moduleForComponent("sl-translate", "Unit - component:sl-translate");

    /**
     * Ensures that the template is wrapping the content in a span tag and not in any block-level tags. While it appears
     * that core Ember functionality is being tested this test is ensuring that the implied contract about how this non-UI
     * component is rendered into the DOM is adhered to.
     */
    ember_qunit.test("Renders as a span tag with no classes", function (assert) {
        var component = this.subject({ translateService: translateService }),
            $component = this.render();

        assert.equal($component.prop("tagName"), "SPAN");
        assert.equal($component.prop("class"), "ember-view");
    });

    /**
     * That it renders and functions as expected
     */
    ember_qunit.test("DOM and content of rendered translation", function (assert) {
        var component = this.subject({
            key: "the_key",
            translateService: translateService
        }),
            $component = this.render();

        assert.equal($component.text(), "TRANSLATE: the_key");
    });

    /**
     * Ensure haven't broken any default behavior of Ember, since manipulate properties passed to the component
     * A side effect of this test is the appearance that core Ember functionality is being tested
     */
    ember_qunit.test("Can be used alongside other properties or attribute bindings", function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: "key_alongside",
            tagName: "h1",
            classNames: ["testClass"]
        }),
            $component = this.render();

        assert.equal($component.prop("tagName"), "H1");
        assert.equal($component.text(), "TRANSLATE: key_alongside");
        assert.equal($component.prop("class"), ["ember-view testClass"]);
    });

    ember_qunit.test("On initialization, extractParameterKeys() filters passed parameters", function (assert) {
        var component = this.subject({
            key: "the_key",
            pluralKey: "plural_key",
            pluralCount: "plural_count",
            $0: "a",
            $1Binding: "b",
            $2: "c"
        });

        assert.deepEqual(component.get("parameters").sort(), ["$0", "$1", "$2"]);
    });

    ember_qunit.test("On initialization, extractParameterKeys() filters passed parameters to be bound", function (assert) {
        var component = this.subject({
            key: "the_key",
            pluralKey: "plural_key",
            pluralCount: "plural_count",
            $0: "a",
            $1Binding: "b",
            $2: "c"
        });

        assert.deepEqual(component.get("observedParameters"), ["$1"]);
    });

    ember_qunit.test("setTranslatedString() sets translatedString property with value from translateString()", function (assert) {
        var component = this.subject();

        component.translateString = function () {
            return "test value";
        };

        component.setTranslatedString();

        assert.equal(component.get("translatedString"), "test value");
    });

    ember_qunit.test("translateString() calls translateKey() on the translation service", function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: "the_key",
            pluralKey: "plural_key",
            pluralCount: "plural_count",
            $0: "a",
            $1: "b"
        });

        this.render();

        assert.equal(translateService.get("key"), "the_key");
        assert.equal(translateService.get("pluralKey"), "plural_key");
        assert.equal(translateService.get("pluralCount"), "plural_count");
        assert.deepEqual(translateService.get("parameters"), { $0: "a", $1: "b" });
    });

    ember_qunit.test("willInsertElement event causes setTranslatedString() to be called", function (assert) {
        var component = this.subject(),
            setTranslatedStringWasCalled = false;

        component.setTranslatedString = function () {
            setTranslatedStringWasCalled = true;
        };

        // Render in DOM to trigger willInsertElement event
        this.render();

        assert.equal(setTranslatedStringWasCalled, true);
    });

    ember_qunit.test("willInsertElement event causes observers to be added to each entry in observedParameters property", function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: "the_key",
            $0Binding: "a",
            $1: "b"
        }),
            setTranslatedStringWasCalled = false;

        component.setTranslatedString = function () {
            setTranslatedStringWasCalled = true;
        };

        // Render in DOM to trigger willInsertElement event
        this.render();

        // Change value so can monitor for change
        setTranslatedStringWasCalled = false;

        Ember['default'].run(function () {
            component.set("$0", "c");
        });

        assert.equal(setTranslatedStringWasCalled, true);
    });

    ember_qunit.test("willClearRender event causes observers to be removed", function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: "the_key",
            $0Binding: "a",
            $1: "b"
        }),
            setTranslatedStringWasCalled = false;

        component.setTranslatedString = function () {
            setTranslatedStringWasCalled = true;
        };

        // Render in DOM to trigger willInsertElement event
        this.render();

        // Change value so can monitor for change
        setTranslatedStringWasCalled = false;

        component.trigger("willClearRender");

        Ember['default'].run(function () {
            component.set("$0", "c");
        });

        assert.equal(setTranslatedStringWasCalled, false);
    });

});
define('dummy/tests/unit/components/sl-translate-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-translate-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-translate-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/initializers/translate-service-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/start-app'], function (Ember, ember_qunit, startApp) {

    'use strict';

    var App;

    module("Unit - initializer:translate-service", {
        beforeEach: function () {
            App = startApp['default']();
        },

        afterEach: function () {
            Ember['default'].run(App, App.destroy);
        }
    });

    ember_qunit.test("Registered on container as a singleton", function (assert) {
        assert.equal(typeof App.__container__.lookup("translateService:main"), "object");
        assert.notEqual(App.__container__._options["translateService:main"].instantiate, "undefined");
        assert.equal(App.__container__._options["translateService:main"].instantiate, false);
    });

    ember_qunit.test("Injected on controllers", function (assert) {
        var findBy = App.__container__.typeInjections.controller.findBy("fullName", "translateService:main");

        assert.notEqual(findBy, "undefined");
        assert.equal(findBy.property, "translateService");
    });

    ember_qunit.test("Injected on views", function (assert) {
        var findBy = App.__container__.typeInjections.view.findBy("fullName", "translateService:main");

        assert.notEqual(findBy, "undefined");
        assert.equal(findBy.property, "translateService");
    });

    ember_qunit.test("Injected on components", function (assert) {
        var findBy = App.__container__.typeInjections.component.findBy("fullName", "translateService:main");

        assert.notEqual(findBy, "undefined");
        assert.equal(findBy.property, "translateService");
    });

});
define('dummy/tests/unit/initializers/translate-service-test.jshint', function () {

  'use strict';

  module('JSHint - unit/initializers');
  test('unit/initializers/translate-service-test.js should pass jshint', function() { 
    ok(true, 'unit/initializers/translate-service-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/mixins/sl-get-translation-test', ['ember', 'sl-ember-translate/mixins/sl-get-translation'], function (Ember, mixinUnderTest) {

    'use strict';

    module("Unit - mixins:sl-get-translation");

    test("Successfully mixed", function (assert) {
        assert.expect(1);

        var testObject = Ember['default'].Object.extend(mixinUnderTest['default']),
            subject = testObject.create();

        assert.ok(subject);
    });

    test("Call to get() with a key not beginning with \"translate.\" is not intercepted", function (assert) {
        assert.expect(1);

        var testObject = Ember['default'].Object.extend(mixinUnderTest['default'], {
            testKey: "testValue"
        }),
            subject = testObject.create();

        assert.equal(subject.get("testKey"), "testValue");
    });

    test("Call to get() with a key beginning with \"translate.\" calls this.translate()", function (assert) {
        assert.expect(1);

        var testObject = Ember['default'].Object.extend(mixinUnderTest['default'], {
            translate: function (value) {
                return value;
            }
        }),
            subject = testObject.create();

        assert.equal(subject.get("translate.testingKey"), "testingKey");
    });

    test("translate() returns call to this.translateService.getKeyValue()", function (assert) {
        assert.expect(1);

        var testObject = Ember['default'].Object.extend(mixinUnderTest['default'], {
            translateService: {
                getKeyValue: function (value) {
                    return value;
                }
            }
        }),
            subject = testObject.create();

        assert.equal(subject.translate("called"), "called");
    });

});
define('dummy/tests/unit/mixins/sl-get-translation-test.jshint', function () {

  'use strict';

  module('JSHint - unit/mixins');
  test('unit/mixins/sl-get-translation-test.js should pass jshint', function() { 
    ok(true, 'unit/mixins/sl-get-translation-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/services/translate-test', ['ember', 'ember-qunit', 'sl-ember-translate/services/translate', 'dummy/tests/helpers/sl/synchronous'], function (Ember, ember_qunit, TranslateService, synchronous) {

    'use strict';

    var TS;

    module("Unit - services:translate", {
        beforeEach: function () {
            TS = TranslateService['default'].create();
        }
    });

    ember_qunit.test("container property defaults to null", function (assert) {
        assert.expect(1);

        assert.equal(TS.get("container"), null);
    });

    ember_qunit.test("dictionary property defaults to null", function (assert) {
        assert.expect(1);

        assert.equal(TS.get("dictionary"), null);
    });

    ember_qunit.test("setDictionary() accepts only an object as a parameter", function (assert) {
        // Empty parameter

        var assertionThrown = false;

        try {
            TS.setDictionary();
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was empty");

        // Number parameter

        assertionThrown = false;

        try {
            TS.setDictionary(4);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Number");

        // Array Parameter

        assertionThrown = false;

        try {
            TS.setDictionary([]);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was an Array");

        // Function

        assertionThrown = false;

        try {
            TS.setDictionary(function () {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Function");

        // String Parameter

        assertionThrown = false;

        try {
            TS.setDictionary("test");
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a String");

        // Boolean Parameter

        assertionThrown = false;

        try {
            TS.setDictionary(false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Boolean");

        // Object Parameter

        assertionThrown = false;

        try {
            TS.setDictionary({});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, "Parameter was an Object");
    });

    ember_qunit.test("setDictionary() sets data on the dictionary property", function (assert) {
        assert.expect(1);

        var testDictionary = Ember['default'].Object.create({ the_key: "my value" });

        TS.setDictionary(testDictionary);

        assert.deepEqual(TS.get("dictionary"), testDictionary);
    });

    ember_qunit.test("getKeyValue() returns requested key if not found in dictionary", function (assert) {
        assert.expect(1);

        TS.setDictionary(Ember['default'].Object.create({ the_key: "my value" }));

        assert.notEqual(TS.getKeyValue("wrong_key"), "the_key");
    });

    ember_qunit.test("getKeyValue() returns requested key's translated string", function (assert) {
        assert.expect(1);

        TS.setDictionary(Ember['default'].Object.create({ the_key: "my value" }));

        assert.equal(TS.getKeyValue("the_key"), "my value");
    });

    ember_qunit.test("translateKey() accepts only an object as a parameter", function (assert) {
        var test = synchronous.requires(TS.translateKey, ["object"]);

        assert.ok(test.requires, test.messages);
    });

    ember_qunit.test("translateKey() returns translated string for specified key", function (assert) {
        assert.expect(1);

        TS.setDictionary(Ember['default'].Object.create({ the_key: "my value" }));

        assert.equal(TS.getKeyValue("the_key"), "my value");
    });

    ember_qunit.test("If either \"pluralKey\" or \"pluralCount\" are provided to translateKey() then both must be", function (assert) {
        assert.expect(2);

        assert.equal(TS.translateKey({ key: "singular_key", pluralKey: "plural_key" }), "singular_key");
        assert.equal(TS.translateKey({ key: "singular_key", pluralCount: 3 }), "singular_key");
    });

    ember_qunit.test("Pluralization only works if \"pluralCount\" is a number", function (assert) {
        assert.expect(1);

        TS.setDictionary(Ember['default'].Object.create({
            the_singular_key: "Singular translated value",
            the_plural_key: "Plural translated value"
        }));

        assert.notEqual(TS.translateKey({ key: "the_singular_key", pluralKey: "the_plural_key", pluralCount: "two" }), "Plural translated value");
    });

    ember_qunit.test("Pluralization occurs when provided the necessary information", function (assert) {
        assert.expect(2);

        TS.setDictionary(Ember['default'].Object.create({
            the_singular_key: "Singular translated value",
            the_plural_key: "Plural translated value"
        }));

        assert.equal(TS.translateKey({ key: "the_singular_key", pluralKey: "the_plural_key", pluralCount: 0 }), "Singular translated value");
        assert.equal(TS.translateKey({ key: "the_singular_key", pluralKey: "the_plural_key", pluralCount: 3 }), "Plural translated value");
    });

    ember_qunit.test("Token replacement in translation string", function (assert) {
        assert.expect(1);

        TS.setDictionary(Ember['default'].Object.create({
            the_key: "Replaced values: {0} and {1}"
        }));

        assert.equal(TS.translateKey({
            key: "the_key",
            parameters: {
                $0: "ASDF",
                $1: 1234
            }
        }), "Replaced values: ASDF and 1234");
    });

});
define('dummy/tests/unit/services/translate-test.jshint', function () {

  'use strict';

  module('JSHint - unit/services');
  test('unit/services/translate-test.js should pass jshint', function() { 
    ok(true, 'unit/services/translate-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

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
  require("dummy/app")["default"].create({"name":"sl-ember-translate","version":"1.4.0.0a717c51"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map