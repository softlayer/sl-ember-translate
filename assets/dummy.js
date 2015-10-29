"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/acceptance-tests/sinon', ['exports', 'ember-sinon/acceptance-tests/sinon'], function (exports, sinon) {

	'use strict';



	exports['default'] = sinon['default'];

});
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
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('dummy/components/sl-translate', ['exports', 'sl-ember-translate/components/sl-translate'], function (exports, component) {

	'use strict';

	exports['default'] = component['default'];

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/demo', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            updateStringValues: function updateStringValues() {
                this.set('valueToDisplay', 'New Updated Value - ' + Math.random());
            }
        },

        valueToDisplay: 'Unicorn'
    });

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/mixins/sl-get-translation', ['exports', 'sl-ember-translate/mixins/sl-get-translation'], function (exports, SlGetTranslation) {

	'use strict';

	exports['default'] = SlGetTranslation['default'];

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

    'use strict';

    var Router = Ember['default'].Router.extend({
        location: config['default'].locationType
    });

    Router.map(function () {
        this.route('index', { path: '/' });
        this.route('demo');
    });

    exports['default'] = Router;

});
define('dummy/routes/demo', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return Ember['default'].Object.create({
                'SIMPLE_KEY': 'I have been translated',
                'SINGULAR_KEY': 'View my family',
                'PLURAL_KEY': 'View my families',
                'REPLACED_KEY': 'I have replaced {0} and {1}'
            });
        },

        setupController: function setupController(controller, model) {
            this.get('translateService').setDictionary(model);
        },

        translateService: Ember['default'].inject.service('sl-translate')
    });

});
define('dummy/services/sl-translate', ['exports', 'sl-ember-translate/services/sl-translate'], function (exports, TranslateService) {

	'use strict';

	exports['default'] = TranslateService['default'];

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/components/sl-translate.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/sl-ember-translate/components');
  QUnit.test('modules/sl-ember-translate/components/sl-translate.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/sl-ember-translate/components/sl-translate.js should pass jshint.');
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/mixins/sl-get-translation.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/sl-ember-translate/mixins');
  QUnit.test('modules/sl-ember-translate/mixins/sl-get-translation.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/sl-ember-translate/mixins/sl-get-translation.js should pass jshint.');
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/services/sl-translate.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/sl-ember-translate/services');
  QUnit.test('modules/sl-ember-translate/services/sl-translate.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/sl-ember-translate/services/sl-translate.js should pass jshint.');
  });

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 20
            },
            "end": {
              "line": 12,
              "column": 71
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-home");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 20
            },
            "end": {
              "line": 13,
              "column": 71
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-cubes");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Demo");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-12");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn-group pull-right");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-default dropdown-toggle");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-expanded","false");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-reorder");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","caret");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"role","menu");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","http://softlayer.github.io/sl-ember-translate/docs/");
        dom.setAttribute(el7,"target","new");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-book");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Documentation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-translate/blob/master/CONTRIBUTING.md");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-cog");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Contribution Guide");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-translate/stargazers");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-star");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Star Our Repo");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-translate/fork");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-code-fork");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Fork Our Repo");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-12 text-center");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("ember install sl-ember-translate");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","https://github.com/softlayer/sl-ember-translate/blob/master/LICENSE.md");
        var el6 = dom.createTextNode("MIT Licensed");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1, 1, 1, 3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
        morphs[2] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["block","link-to",["index"],[],0,null,["loc",[null,[12,20],[12,83]]]],
        ["block","link-to",["demo"],[],1,null,["loc",[null,[13,20],[13,83]]]],
        ["content","outlet",["loc",[null,[23,4],[23,14]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('dummy/templates/demo', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/demo.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-12 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Usage Demonstration");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","lead");
        var el4 = dom.createTextNode("View the source code of the dummy application for syntax employed in this demo");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Simple Key");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Singular/Plural Keys");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Replaced Values In Keys");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nOriginal String: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nReplaced String: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Bound Replacement Values In Keys");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nString Will Update: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Update Values");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Used alongside other properties or attribute bindings");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [36]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment,4,4,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,11,11,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,14,14,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,21,21,contextualElement);
        morphs[4] = dom.createMorphAt(fragment,24,24,contextualElement);
        morphs[5] = dom.createMorphAt(fragment,31,31,contextualElement);
        morphs[6] = dom.createElementMorph(element0);
        morphs[7] = dom.createMorphAt(fragment,43,43,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","sl-translate",[],["key","SIMPLE_KEY"],["loc",[null,[9,0],[9,33]]]],
        ["inline","sl-translate",[],["key","SINGULAR_KEY","pluralKey","PLURAL_KEY","pluralCount","1"],["loc",[null,[13,0],[13,74]]]],
        ["inline","sl-translate",[],["key","SINGULAR_KEY","pluralKey","PLURAL_KEY","pluralCount","3"],["loc",[null,[14,0],[14,74]]]],
        ["inline","sl-translate",[],["key","REPLACED_KEY"],["loc",[null,[18,17],[18,52]]]],
        ["inline","sl-translate",[],["key","REPLACED_KEY","$0","First","$1","Unicorn"],["loc",[null,[19,17],[19,76]]]],
        ["inline","sl-translate",[],["key","REPLACED_KEY","$0","First","$1",["subexpr","@mut",[["get","valueToDisplay",["loc",[null,[23,68],[23,82]]]]],[],[]]],["loc",[null,[23,20],[23,84]]]],
        ["element","action",["updateStringValues"],[],["loc",[null,[25,8],[25,39]]]],
        ["inline","sl-translate",[],["tagName","em","key","REPLACED_KEY","$0","First","$1","Dragon"],["loc",[null,[29,0],[29,71]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 12
            },
            "end": {
              "line": 10,
              "column": 64
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-cubes fa-5x");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 11
            },
            "end": {
              "line": 11,
              "column": 41
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Demo");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 6
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-12 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("sl-ember-translate 1.10.0");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","lead");
        var el4 = dom.createTextNode("An Ember CLI Addon that provides the ability to lookup a dictionary value through method calls or via a component in your templates.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-4 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-4 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","http://softlayer.github.io/sl-ember-translate/docs/");
        dom.setAttribute(el4,"target","new");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-book fa-5x");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","http://softlayer.github.io/sl-ember-translate/docs/");
        dom.setAttribute(el4,"target","new");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Documentation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-4 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","https://github.com/softlayer/sl-ember-translate");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-github fa-5x");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","https://github.com/softlayer/sl-ember-translate");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Available on GitHub");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        return morphs;
      },
      statements: [
        ["block","link-to",["demo"],[],0,null,["loc",[null,[10,12],[10,76]]]],
        ["block","link-to",["demo"],[],1,null,["loc",[null,[11,11],[11,53]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/blanket-options', function () {

    'use strict';

    /* globals blanket, module */

    var options = {
        modulePrefix: 'sl-ember-translate',
        filter: '//.*sl-ember-translate/.*/',
        antifilter: '//.*(tests|template).*/',
        loaderExclusions: [],
        enableCoverage: true,
        modulePattern: '\/(\\w+)',
        branchTracking: true,
        cliOptions: {
            reporters: ['json'],
            autostart: true
        }
    };

    if ('undefined' === typeof exports) {
        blanket.options(options);
    } else {
        module.exports = options;
    }

});
define('dummy/tests/blanket-options.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('blanket-options.js should pass jshint', function(assert) { 
    assert.ok(true, 'blanket-options.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demo.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/demo.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/demo.js should pass jshint.'); 
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

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, Ember, Application, config) {

    'use strict';



    exports['default'] = startApp;
    function startApp(attrs) {
        var application = undefined;

        var attributes = Ember['default'].merge({}, config['default'].APP);
        attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

        Ember['default'].run(function () {
            application = Application['default'].create(attributes);
            application.setupForTesting();
            application.injectTestHelpers();
        });

        return application;
    }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/sl-translate-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent('sl-translate', 'Integration | Component | sl translate', {
        beforeEach: function beforeEach() {
            this.container.lookup('service:sl-translate').setDictionary(Ember['default'].Object.create({
                'SIMPLE_KEY': 'I have been translated',
                'SINGULAR_KEY': 'View my family',
                'PLURAL_KEY': 'View my families',
                'REPLACED_KEY': 'I have replaced {0} and {1}'
            }));
        },

        integration: true
    });

    ember_qunit.test('Simple Key Translation', function (assert) {
        this.render(Ember['default'].HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 3,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n        ');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('\n    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['inline', 'sl-translate', [], ['key', 'SIMPLE_KEY'], ['loc', [null, [2, 8], [2, 42]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.strictEqual(this.$('>:first-child').text().trim(), 'I have been translated', 'Simple Key was translated');
    });

    ember_qunit.test('Single/Plural Keys', function (assert) {
        this.render(Ember['default'].HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 3,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n        ');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('\n    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['inline', 'sl-translate', [], ['key', 'SINGULAR_KEY', 'pluralKey', 'PLURAL_KEY', 'pluralCount', '1'], ['loc', [null, [2, 8], [2, 82]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.strictEqual(this.$('>:first-child').text().trim(), 'View my family', 'Singular Key was correctly returned');

        this.render(Ember['default'].HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 3,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n        ');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('\n    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['inline', 'sl-translate', [], ['key', 'SINGULAR_KEY', 'pluralKey', 'PLURAL_KEY', 'pluralCount', '3'], ['loc', [null, [2, 8], [2, 82]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.strictEqual(this.$('>:first-child').text().trim(), 'View my families', 'Plural Key was correctly returned');
    });

    ember_qunit.test('Replaced Values In Keys', function (assert) {
        this.render(Ember['default'].HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 3,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n        ');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('\n    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['inline', 'sl-translate', [], ['key', 'REPLACED_KEY'], ['loc', [null, [2, 8], [2, 43]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.strictEqual(this.$('>:first-child').text().trim(), 'I have replaced {0} and {1}', 'Original String was correct');

        this.render(Ember['default'].HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 3,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n        ');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('\n    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['inline', 'sl-translate', [], ['key', 'REPLACED_KEY', '$0', 'First', '$1', 'Unicorn'], ['loc', [null, [2, 8], [2, 67]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.strictEqual(this.$('>:first-child').text().trim(), 'I have replaced First and Unicorn', 'Replaced String was correct');
    });

    ember_qunit.test('Bound Replacement Values In Keys', function (assert) {
        this.set('valueToDisplay', 'the Bound Value');

        this.render(Ember['default'].HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 3,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n        ');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('\n    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['inline', 'sl-translate', [], ['key', 'REPLACED_KEY', '$0', 'First', '$1', ['subexpr', '@mut', [['get', 'valueToDisplay', ['loc', [null, [2, 56], [2, 70]]]]], [], []]], ['loc', [null, [2, 8], [2, 72]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.strictEqual(this.$('>:first-child').text().trim(), 'I have replaced First and the Bound Value', 'Using a bound replacement value works');
    });

});
define('dummy/tests/integration/components/sl-translate-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/sl-translate-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/sl-translate-test.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/demo.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/demo.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/demo.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-translate-test', ['ember', 'ember-qunit', 'sinon'], function (Ember, ember_qunit, sinon) {

    'use strict';

    var translateService = Ember['default'].Object.create({
        translateKey: function translateKey(data) {
            this.set('key', data.key);
            this.set('pluralKey', data.pluralKey);
            this.set('pluralCount', data.pluralCount);
            this.set('parameters', data.parameters);

            return 'TRANSLATE: ' + data.key;
        }
    });

    ember_qunit.moduleForComponent('sl-translate', 'Unit | Component | sl translate', {
        unit: true
    });

    ember_qunit.test('Default property values', function (assert) {
        var component = this.subject();

        assert.strictEqual(component.translateService.name, 'sl-translate', 'The correct service is being injected into the component');

        assert.strictEqual(component.get('tagName'), 'span', '"tagName" defaults to span');

        assert.strictEqual(component.get('internalTranslatedString'), null, '"internalTranslatedString" defaults to null');
    });

    ember_qunit.test('setTranslatedString() is called when the willRender() event occurs', function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1: 'b'
        });

        var spy = sinon['default'].spy(component, 'setTranslatedString');

        component.trigger('willRender');

        assert.strictEqual(spy.calledOnce, true, 'setTranslatedString() is called successfully');
    });

    ember_qunit.test('setTranslatedString() sets internalTranslatedString property with value from translateString()', function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1: 'b'
        });

        var spy = sinon['default'].spy(component, 'translateString');

        Ember['default'].run(function () {
            component.setTranslatedString();
        });

        assert.strictEqual(component.get('internalTranslatedString'), 'TRANSLATE: the_key', 'the property "internalTranslatedString" has the correct value');

        assert.strictEqual(spy.calledOnce, true, 'translateString() is called successfully once');
    });

    ember_qunit.test('translateString() returns expected value', function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1: 'b'
        });

        assert.equal(component.translateString(), 'TRANSLATE: the_key', 'setTranslatedString() returns expected value successfully');
    });

    ember_qunit.test('setTranslatedString() sets internalTranslatedString and translatedString sets correct value', function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1: 'b'
        });

        Ember['default'].run(function () {
            component.setTranslatedString();
        });

        assert.strictEqual(component.get('translatedString'), 'TRANSLATE: the_key', 'translatedString computed property sets correct string');
    });

    ember_qunit.test('translatedString() returns correct value', function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1: 'b'
        });

        component.trigger('willRender');

        assert.strictEqual(component.get('translatedString'), component.get('internalTranslatedString'), 'translatedString() returns the correct value');
    });

    ember_qunit.test('translateString() calls translateKey() on the translation service with given values', function (assert) {
        this.subject({
            translateService: translateService,
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1: 'b',
            c: 'c'
        });

        assert.strictEqual(translateService.get('key'), 'the_key');
        assert.strictEqual(translateService.get('pluralKey'), 'plural_key');
        assert.strictEqual(translateService.get('pluralCount'), 'plural_count');
        assert.deepEqual(translateService.get('parameters'), { $0: 'a', $1: 'b' });
    });

    ember_qunit.test('translateString() only accepts the correct parameter key pattern', function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $12: 'b',
            r: 'c',
            $10000: 'd'
        });

        Ember['default'].run(function () {
            component.translateString();
        });

        assert.deepEqual(translateService.get('parameters'), { $0: 'a', $12: 'b', $10000: 'd' });
    });

    ember_qunit.test('Dependent keys are correct', function (assert) {
        var component = this.subject();

        var translatedStringDependentKeys = ['internalTranslatedString'];

        assert.deepEqual(component.translatedString._dependentKeys, translatedStringDependentKeys, 'Dependent keys are set correctly for translatedString()');
    });

});
define('dummy/tests/unit/components/sl-translate-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/components');
  QUnit.test('unit/components/sl-translate-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/components/sl-translate-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/mixins/sl-get-translation-test', ['ember', 'sl-ember-translate/mixins/sl-get-translation', 'ember-qunit'], function (Ember, mixinUnderTest, ember_qunit) {

    'use strict';

    ember_qunit.moduleFor('mixin:sl-get-translation', 'Unit | Mixin | sl get translation', {
        unit: true
    });

    ember_qunit.test('The correct service is being injected into the mixin', function (assert) {
        var testObject = Ember['default'].Object.extend(mixinUnderTest['default']);
        var subject = testObject.create();

        assert.strictEqual(subject.translateService.name, 'sl-translate', 'The correct service is being injected into the mixin');
    });

    ember_qunit.test('Successfully mixed', function (assert) {
        var testObject = Ember['default'].Object.extend(mixinUnderTest['default']);
        var subject = testObject.create();

        assert.ok(subject);
    });

    ember_qunit.test('Call to get() with a key not beginning with "translate." is not intercepted', function (assert) {
        var testObject = Ember['default'].Object.extend(mixinUnderTest['default'], {
            testKey: 'testValue'
        });
        var subject = testObject.create();

        assert.strictEqual(subject.get('testKey'), 'testValue');
    });

    ember_qunit.test('Call to get() with a key beginning with "translate." calls this.translate()', function (assert) {
        var testObject = Ember['default'].Object.extend(mixinUnderTest['default'], {
            translate: function translate(value) {
                return value;
            }
        });
        var subject = testObject.create();

        assert.strictEqual(subject.get('translate.testingKey'), 'testingKey');
    });

    ember_qunit.test('translate() returns call to this.translateService.getKeyValue()', function (assert) {
        var testObject = Ember['default'].Object.extend(mixinUnderTest['default'], {
            translateService: {
                getKeyValue: function getKeyValue(value) {
                    return value;
                }
            }
        });
        var subject = testObject.create();

        assert.strictEqual(subject.translate('called'), 'called');
    });

});
define('dummy/tests/unit/mixins/sl-get-translation-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/sl-get-translation-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/mixins/sl-get-translation-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/services/sl-translate-test', ['ember', 'ember-qunit', 'sl-ember-translate/services/sl-translate', 'sinon'], function (Ember, ember_qunit, TranslateService, sinon) {

    'use strict';

    var TS = undefined;

    ember_qunit.moduleFor('service:sl-translate', 'Unit | Service | sl translate', {
        beforeEach: function beforeEach() {
            TS = TranslateService['default'].create();
        },

        unit: true
    });

    ember_qunit.test('dictionary property defaults to null', function (assert) {
        assert.strictEqual(TS.get('dictionary'), null);
    });

    ember_qunit.test('setDictionary() accepts only an object as a parameter', function (assert) {
        var testProperty = Ember['default'].Object.create({
            parameter: ''
        });

        var callSetDictionary = function callSetDictionary() {
            return TS.setDictionary(testProperty.parameter);
        };

        // Undefined
        testProperty.set('parameter', undefined);

        assert.throws(callSetDictionary, 'Parameter was undefined');

        // Array
        testProperty.set('parameter', []);

        assert.throws(callSetDictionary, 'Parameter was an array');

        // Null
        testProperty.set('parameter', null);

        assert.throws(callSetDictionary, 'Parameter was null');

        // Number
        testProperty.set('parameter', 123);

        assert.throws(callSetDictionary, 'Parameter was a number');

        // Function
        testProperty.set('parameter', function () {});

        assert.throws(callSetDictionary, 'Parameter was a function');

        // String
        testProperty.set('parameter', 'testString');

        assert.throws(callSetDictionary, 'Parameter was a string');

        // Boolean
        testProperty.set('parameter', false);

        assert.throws(callSetDictionary, 'Parameter was false');

        // Object
        testProperty.set('parameter', {});

        assert.strictEqual(callSetDictionary(), undefined, 'Parameter was an object');

        // Ember.Object instance
        testProperty.set('parameter', Ember['default'].Object.create({}));

        assert.strictEqual(callSetDictionary(), undefined, 'Parameter was an Ember.Object instance');
    });

    ember_qunit.test('setDictionary() sets data on the dictionary property', function (assert) {
        var testDictionary = Ember['default'].Object.create({
            'the_key': 'my value'
        });

        TS.setDictionary(testDictionary);

        assert.deepEqual(TS.get('dictionary'), testDictionary);
    });

    ember_qunit.test('getKeyValue() Valid key returns key value while non valid key returns key name.', function (assert) {
        TS.setDictionary(Ember['default'].Object.create({
            'the_key': 'my value'
        }));

        assert.notStrictEqual(TS.getKeyValue('wrong_key'), 'the_key');

        assert.strictEqual(TS.getKeyValue('the_key'), 'my value');
    });

    ember_qunit.test('getKeyValue() is gets called by translateKey', function (assert) {
        var spy = sinon['default'].spy(TS, 'getKeyValue');

        TS.translateKey({
            key: 'singular_key',
            pluralKey: 'plural_key'
        });

        assert.strictEqual(spy.calledOnce, true, 'getKeyValue() is called once');
    });

    ember_qunit.test('setDictionary() accepts only an object as a parameter', function (assert) {
        var testProperty = Ember['default'].Object.create({
            parameter: ''
        });

        var callTranslateKey = function callTranslateKey() {
            return TS.translateKey(testProperty.parameter);
        };

        // Undefined
        testProperty.set('parameter', undefined);

        assert.throws(callTranslateKey, 'Parameter was undefined');

        // Array
        testProperty.set('parameter', []);

        assert.throws(callTranslateKey, 'Parameter was an array');

        // Null
        testProperty.set('parameter', null);

        assert.throws(callTranslateKey, 'Parameter was null');

        // Number
        testProperty.set('parameter', 123);

        assert.throws(callTranslateKey, 'Parameter was a number');

        // Function
        testProperty.set('parameter', function () {});

        assert.throws(callTranslateKey, 'Parameter was a function');

        // String
        testProperty.set('parameter', 'testString');

        assert.throws(callTranslateKey, 'Parameter was a string');

        // Boolean
        testProperty.set('parameter', false);

        assert.throws(callTranslateKey, 'Parameter was false');

        // Object
        testProperty.set('parameter', {});

        assert.strictEqual(callTranslateKey(), undefined, 'Parameter was an object');

        // Ember.Object instance
        testProperty.set('parameter', Ember['default'].Object.create({}));

        assert.strictEqual(callTranslateKey(), undefined, 'Parameter was an Ember.Object instance');
    });

    ember_qunit.test('translateKey() returns translated string for specified key', function (assert) {
        TS.setDictionary(Ember['default'].Object.create({
            'the_key': 'my value'
        }));

        assert.strictEqual(TS.getKeyValue('the_key'), 'my value');
    });

    ember_qunit.test('If either "pluralKey" or "pluralCount" are provided to translateKey() then both must be', function (assert) {
        assert.strictEqual(TS.translateKey({
            key: 'singular_key',
            pluralKey: 'plural_key'
        }), 'singular_key');

        assert.strictEqual(TS.translateKey({
            key: 'singular_key',
            pluralCount: 3
        }), 'singular_key');
    });

    ember_qunit.test('Pluralization occurs when provided the necessary information', function (assert) {
        TS.setDictionary(Ember['default'].Object.create({
            'the_singular_key': 'Singular translated value',
            'the_plural_key': 'Plural translated value'
        }));

        assert.strictEqual(TS.translateKey({
            key: 'the_singular_key',
            pluralKey: 'the_plural_key',
            pluralCount: 0
        }), 'Singular translated value');

        assert.strictEqual(TS.translateKey({
            key: 'the_singular_key',
            pluralKey: 'the_plural_key',
            pluralCount: 3
        }), 'Plural translated value');
    });

    ember_qunit.test('Token replacement in translation string', function (assert) {
        TS.setDictionary(Ember['default'].Object.create({
            'the_key': 'Replaced values: {0} and {1}'
        }));

        assert.strictEqual(TS.translateKey({
            key: 'the_key',
            parameters: {
                $0: 'ASDF',
                $1: 1234
            }
        }), 'Replaced values: ASDF and 1234');
    });

});
define('dummy/tests/unit/services/sl-translate-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/sl-translate-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/services/sl-translate-test.js should pass jshint.'); 
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
  require("dummy/app")["default"].create({"name":"sl-ember-translate","version":"1.10.0+462a7ac9"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map