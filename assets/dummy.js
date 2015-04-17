/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
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
        valueToDisplay: 'Unicorn'
    });

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
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
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/initializers/translate-service', ['exports', 'sl-ember-translate/initializers/translate-service'], function (exports, initializer) {

  'use strict';

  exports['default'] = {
    name: 'translate-service',

    initialize: initializer['default']
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

    'use strict';

    var Router = Ember['default'].Router.extend({
        location: config['default'].locationType
    });

    exports['default'] = Router.map(function () {
        this.route('index', { path: '/' });
        this.route('demo');
    });

});
define('dummy/routes/demo', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        actions: {
            updateStringValues: function updateStringValues() {
                this.controllerFor('demo').set('valueToDisplay', 'New Updated Value - ' + Math.random());
            }
        },

        model: function model() {
            return Ember['default'].Object.create({
                SIMPLE_KEY: 'I have been translated',
                SINGULAR_KEY: 'View my family',
                PLURAL_KEY: 'View my families',
                REPLACED_KEY: 'I have replaced {0} and {1}'
            });
        },

        setupController: function setupController(controller, model) {
            controller.get('translateService').setDictionary(model);
        }
    });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/components/sl-translate.jshint', function () {

  'use strict';

  module('JSHint - modules/sl-ember-translate/components');
  test('modules/sl-ember-translate/components/sl-translate.js should pass jshint', function () {
    ok(true, 'modules/sl-ember-translate/components/sl-translate.js should pass jshint.');
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/initializers/translate-service.jshint', function () {

  'use strict';

  module('JSHint - modules/sl-ember-translate/initializers');
  test('modules/sl-ember-translate/initializers/translate-service.js should pass jshint', function () {
    ok(true, 'modules/sl-ember-translate/initializers/translate-service.js should pass jshint.');
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/mixins/sl-get-translation.jshint', function () {

  'use strict';

  module('JSHint - modules/sl-ember-translate/mixins');
  test('modules/sl-ember-translate/mixins/sl-get-translation.js should pass jshint', function () {
    ok(true, 'modules/sl-ember-translate/mixins/sl-get-translation.js should pass jshint.');
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/services/translate.jshint', function () {

  'use strict';

  module('JSHint - modules/sl-ember-translate/services');
  test('modules/sl-ember-translate/services/translate.js should pass jshint', function () {
    ok(true, 'modules/sl-ember-translate/services/translate.js should pass jshint.');
  });

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.1",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-home");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
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
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-translate/blob/master/README.md");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-wrench");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Get Started");
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
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1, 1, 1, 3, 1]),0,0);
        var morph1 = dom.createMorphAt(element0,3,3);
        block(env, morph0, context, "link-to", ["index"], {}, child0, null);
        content(env, morph1, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/demo', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
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
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [36]);
        var morph0 = dom.createMorphAt(fragment,4,4,contextualElement);
        var morph1 = dom.createMorphAt(fragment,11,11,contextualElement);
        var morph2 = dom.createMorphAt(fragment,14,14,contextualElement);
        var morph3 = dom.createMorphAt(fragment,21,21,contextualElement);
        var morph4 = dom.createMorphAt(fragment,24,24,contextualElement);
        var morph5 = dom.createMorphAt(fragment,31,31,contextualElement);
        var morph6 = dom.createMorphAt(fragment,43,43,contextualElement);
        inline(env, morph0, context, "sl-translate", [], {"key": "SIMPLE_KEY"});
        inline(env, morph1, context, "sl-translate", [], {"key": "SINGULAR_KEY", "pluralKey": "PLURAL_KEY", "pluralCount": "1"});
        inline(env, morph2, context, "sl-translate", [], {"key": "SINGULAR_KEY", "pluralKey": "PLURAL_KEY", "pluralCount": "3"});
        inline(env, morph3, context, "sl-translate", [], {"key": "REPLACED_KEY"});
        inline(env, morph4, context, "sl-translate", [], {"key": "REPLACED_KEY", "$0": "First", "$1": "Unicorn"});
        inline(env, morph5, context, "sl-translate", [], {"key": "REPLACED_KEY", "$0": "First", "$1": get(env, context, "valueToDisplay")});
        element(env, element0, context, "action", ["updateStringValues"], {});
        inline(env, morph6, context, "sl-translate", [], {"tagName": "em", "key": "REPLACED_KEY", "$0": "First", "$1": "Dragon"});
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.1",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-cubes fa-5x");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.1",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Demo");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
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
        var el4 = dom.createTextNode("sl-ember-translate");
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
        dom.setAttribute(el4,"href","https://github.com/softlayer/sl-ember-translate/blob/master/README.md");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-book fa-5x");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","https://github.com/softlayer/sl-ember-translate/blob/master/README.md");
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
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2, 1]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        block(env, morph0, context, "link-to", ["demo"], {}, child0, null);
        block(env, morph1, context, "link-to", ["demo"], {}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/blanket-options', function () {

   'use strict';

   /* globals blanket */

   blanket.options({
      modulePrefix: 'dummy',
      filter: '//.*dummy/.*/',
      antifilter: '//.*(tests|template).*/',
      loaderExclusions: [],
      enableCoverage: true
   });

});
define('dummy/tests/blanket-options.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('blanket-options.js should pass jshint', function() { 
    ok(true, 'blanket-options.js should pass jshint.'); 
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
        Ember['default'].Test.registerHelper('contains', synchronous.contains);
        Ember['default'].Test.registerHelper('ajax', synchronous.ajax);
        Ember['default'].Test.registerHelper('requires', synchronous.requires);
    }

});
define('dummy/tests/helpers/sl/synchronous', ['exports', 'dummy/tests/helpers/sl/synchronous/contains', 'dummy/tests/helpers/sl/synchronous/ajax', 'dummy/tests/helpers/sl/synchronous/requires'], function (exports, contains, ajax, requires) {

	'use strict';



	exports.contains = contains['default'];
	exports.ajax = ajax['default'];
	exports.requires = requires['default'];

});
define('dummy/tests/helpers/sl/synchronous/ajax', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var AjaxHelper = function AjaxHelper() {};

    /**
     * Emulate the beginning of an AJAX request
     *
     * @param   {Ember.String} endpoint
     * @returns {void}
     */
    AjaxHelper.prototype.begin = function (endpoint) {
        Ember['default'].run(function () {
            if (endpoint) {
                $(document).trigger('ajaxSend', [null, { url: endpoint }]);
            } else {
                $(document).trigger('ajaxStart');
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
                $(document).trigger('ajaxComplete', [null, { url: endpoint }]);
            } else {
                $(document).trigger('ajaxStop');
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

        Ember['default'].assert('First non-optional argument must be an array, string or object', 'object' === typeof underTest || 'string' === typeof underTest || Array.isArray(underTest));

        Ember['default'].assert('Second non-optional argument must be an array, string or object', 'object' === typeof testFor || 'string' === typeof testFor || Array.isArray(testFor));

        return utils.doArraysIntersect(utils.convertToArray(underTest), utils.convertToArray(testFor));
    }

});
define('dummy/tests/helpers/sl/synchronous/requires', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = function (methodUnderTest, requiredTypes) {
        var typesToTest = {
            number: {
                required: false,
                testValue: 123987465,
                message: 'Parameter was a number'
            },
            string: {
                required: false,
                testValue: 'testString',
                message: 'Parameter was a string'
            },
            array: {
                required: false,
                testValue: [],
                message: 'Parameter was an array'
            },
            object: {
                required: false,
                testValue: {},
                message: 'Parameter was an object'
            },
            'function': {
                required: false,
                testValue: function testValue() {},
                message: 'Parameter was a function'
            },
            undefined: {
                required: false,
                testValue: undefined,
                message: 'Parameter was undefined'
            },
            boolean: {
                required: false,
                testValue: true,
                message: 'Parameter was a boolean'
            }
        },
            testsThatHaveFailed = [],
            assertionThrown,
            assertionPassed,
            property,
            parameter;

        Ember['default'].assert('First argument must be a function', 'function' === typeof methodUnderTest);
        Ember['default'].assert('Second argument must be an array', Array.isArray(requiredTypes));

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
            messages: testsThatHaveFailed.join('; ')
        };
    }

});
define('dummy/tests/helpers/sl/utils/utils', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var convertToArray = function convertToArray(underTest) {
        var returnArray;

        if (Array.isArray(underTest)) {
            returnArray = underTest;
        } else {
            switch (typeof underTest) {
                case 'string':
                    returnArray = convertStringToArray(underTest);
                    break;

                case 'object':
                    returnArray = convertObjectKeysToArray(underTest);
                    break;
            }
        }

        Ember['default'].assert('String, Object or Array must be supplied', 'undefined' !== typeof returnArray);

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
    var convertStringToArray = function convertStringToArray(underTest) {

        Ember['default'].assert('String must be supplied', 'string' === typeof underTest);

        return underTest.split(' ');
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
    var convertObjectKeysToArray = function convertObjectKeysToArray(underTest) {

        Ember['default'].assert('Object must be supplied', 'object' === typeof underTest && !Array.isArray(underTest));

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
    var doArraysIntersect = function doArraysIntersect(underTest, testFor) {

        Ember['default'].assert('Parameters must be Arrays', Array.isArray(underTest) && Array.isArray(testFor));

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
        translateKey: function translateKey(data) {
            this.set('key', data.key);
            this.set('pluralKey', data.pluralKey);
            this.set('pluralCount', data.pluralCount);
            this.set('parameters', data.parameters);

            return 'TRANSLATE: ' + data.key;
        }
    });

    ember_qunit.moduleForComponent('sl-translate', 'Unit - component:sl-translate');

    /**
     * Ensures that the template is wrapping the content in a span tag and not in
     * any block-level tags. While it appears that core Ember functionality is being
     * tested this test is ensuring that the implied contract about how this non-UI
     * component is rendered into the DOM is adhered to.
     */
    ember_qunit.test('Renders as a span tag with no classes', function (assert) {
        this.subject({ translateService: translateService });

        assert.equal(this.$().prop('tagName'), 'SPAN');
        assert.equal(this.$().prop('class'), 'ember-view');
    });

    /**
     * That it renders and functions as expected
     */
    ember_qunit.test('DOM and content of rendered translation', function (assert) {
        this.subject({ key: 'the_key', translateService: translateService });

        assert.equal(Ember['default'].$.trim(this.$().text()), 'TRANSLATE: the_key');
    });

    /**
     * Ensure haven't broken any default behavior of Ember, since manipulate properties passed to the component
     * A side effect of this test is the appearance that core Ember functionality is being tested
     */
    ember_qunit.test('Can be used alongside other properties or attribute bindings', function (assert) {
        this.subject({
            translateService: translateService,
            key: 'key_alongside',
            tagName: 'h1',
            classNames: ['testClass']
        });

        assert.equal(this.$().prop('tagName'), 'H1');
        assert.equal(Ember['default'].$.trim(this.$().text()), 'TRANSLATE: key_alongside');
        assert.equal(this.$().prop('class'), ['ember-view testClass']);
    });

    ember_qunit.test('On initialization, extractParameterKeys() filters passed parameters', function (assert) {
        var component = this.subject({
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1Binding: 'b',
            $2: 'c'
        });

        assert.deepEqual(component.get('parameters').sort(), ['$0', '$1', '$2']);
    });

    ember_qunit.test('On initialization, extractParameterKeys() filters passed parameters to be bound', function (assert) {
        var component = this.subject({
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1Binding: 'b',
            $2: 'c'
        });

        assert.deepEqual(component.get('observedParameters'), ['$1']);
    });

    ember_qunit.test('setTranslatedString() sets translatedString property with value from translateString()', function (assert) {
        var component = this.subject();

        component.translateString = function () {
            return 'test value';
        };

        component.setTranslatedString();

        assert.equal(component.get('translatedString'), 'test value');
    });

    ember_qunit.test('translateString() calls translateKey() on the translation service', function (assert) {
        this.subject({
            translateService: translateService,
            key: 'the_key',
            pluralKey: 'plural_key',
            pluralCount: 'plural_count',
            $0: 'a',
            $1: 'b'
        });

        this.render();

        assert.equal(translateService.get('key'), 'the_key');
        assert.equal(translateService.get('pluralKey'), 'plural_key');
        assert.equal(translateService.get('pluralCount'), 'plural_count');
        assert.deepEqual(translateService.get('parameters'), { $0: 'a', $1: 'b' });
    });

    ember_qunit.test('willInsertElement event causes setTranslatedString() to be called', function (assert) {
        var component = this.subject(),
            setTranslatedStringWasCalled = false;

        component.setTranslatedString = function () {
            setTranslatedStringWasCalled = true;
        };

        // Render in DOM to trigger willInsertElement event
        this.render();

        assert.equal(setTranslatedStringWasCalled, true);
    });

    ember_qunit.test('willInsertElement event causes observers to be added to each entry in observedParameters property', function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: 'the_key',
            $0Binding: 'a',
            $1: 'b'
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
            component.set('$0', 'c');
        });

        assert.equal(setTranslatedStringWasCalled, true);
    });

    ember_qunit.test('willClearRender event causes observers to be removed', function (assert) {
        var component = this.subject({
            translateService: translateService,
            key: 'the_key',
            $0Binding: 'a',
            $1: 'b'
        }),
            setTranslatedStringWasCalled = false;

        component.setTranslatedString = function () {
            setTranslatedStringWasCalled = true;
        };

        // Render in DOM to trigger willInsertElement event
        this.render();

        // Change value so can monitor for change
        setTranslatedStringWasCalled = false;

        component.trigger('willClearRender');

        Ember['default'].run(function () {
            component.set('$0', 'c');
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

    module('Unit - initializer:translate-service', {
        beforeEach: function beforeEach() {
            App = startApp['default']();
        },

        afterEach: function afterEach() {
            Ember['default'].run(App, App.destroy);
        }
    });

    ember_qunit.test('Registered on container as a singleton', function (assert) {
        assert.equal(typeof App.__container__.lookup('translateService:main'), 'object', 'The translateService is an object');

        assert.notEqual(App.registry._options['translateService:main'].instantiate, 'undefined', 'The service\'s instantiate value is defined');

        assert.equal(App.registry._options['translateService:main'].instantiate, false, 'The service is registered as a singleton');
    });

    ember_qunit.test('Injected on controllers', function (assert) {
        assert.expect(1);

        App.registry._typeInjections.controller.map(function (type) {
            if (type.property === 'translateService') {
                assert.ok(true, 'Service is available to controllers');
            }
        });
    });

    ember_qunit.test('Injected on views', function (assert) {
        assert.expect(1);

        App.registry._typeInjections.view.map(function (type) {
            if (type.property === 'translateService') {
                assert.ok(true, 'Service is available to views');
            }
        });
    });

    ember_qunit.test('Injected on components', function (assert) {
        assert.expect(1);

        App.registry._typeInjections.component.map(function (type) {
            if (type.property === 'translateService') {
                assert.ok(true, 'Service is available to components');
            }
        });
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

    module('Unit - mixins:sl-get-translation');

    test('Successfully mixed', function (assert) {
        assert.expect(1);

        var testObject = Ember['default'].Object.extend(mixinUnderTest['default']),
            subject = testObject.create();

        assert.ok(subject);
    });

    test('Call to get() with a key not beginning with "translate." is not intercepted', function (assert) {
        assert.expect(1);

        var testObject = Ember['default'].Object.extend(mixinUnderTest['default'], {
            testKey: 'testValue'
        }),
            subject = testObject.create();

        assert.equal(subject.get('testKey'), 'testValue');
    });

    test('Call to get() with a key beginning with "translate." calls this.translate()', function (assert) {
        assert.expect(1);

        var testObject = Ember['default'].Object.extend(mixinUnderTest['default'], {
            translate: function translate(value) {
                return value;
            }
        }),
            subject = testObject.create();

        assert.equal(subject.get('translate.testingKey'), 'testingKey');
    });

    test('translate() returns call to this.translateService.getKeyValue()', function (assert) {
        assert.expect(1);

        var testObject = Ember['default'].Object.extend(mixinUnderTest['default'], {
            translateService: {
                getKeyValue: function getKeyValue(value) {
                    return value;
                }
            }
        }),
            subject = testObject.create();

        assert.equal(subject.translate('called'), 'called');
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

    module('Unit - services:translate', {
        beforeEach: function beforeEach() {
            TS = TranslateService['default'].create();
        }
    });

    ember_qunit.test('container property defaults to null', function (assert) {
        assert.equal(TS.get('container'), null);
    });

    ember_qunit.test('dictionary property defaults to null', function (assert) {
        assert.equal(TS.get('dictionary'), null);
    });

    ember_qunit.test('setDictionary() accepts only an object as a parameter', function (assert) {

        // Empty parameter

        var assertionThrown = false;

        try {
            TS.setDictionary();
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Parameter was empty');

        // Number parameter

        assertionThrown = false;

        try {
            TS.setDictionary(4);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Parameter was a Number');

        // Array Parameter

        assertionThrown = false;

        try {
            TS.setDictionary([]);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Parameter was an Array');

        // Function

        assertionThrown = false;

        try {
            TS.setDictionary(function () {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Parameter was a Function');

        // String Parameter

        assertionThrown = false;

        try {
            TS.setDictionary('test');
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Parameter was a String');

        // Boolean Parameter

        assertionThrown = false;

        try {
            TS.setDictionary(false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Parameter was a Boolean');

        // Object Parameter

        assertionThrown = false;

        try {
            TS.setDictionary({});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Parameter was an Object');
    });

    ember_qunit.test('setDictionary() sets data on the dictionary property', function (assert) {
        var testDictionary = Ember['default'].Object.create({ the_key: 'my value' });

        TS.setDictionary(testDictionary);

        assert.deepEqual(TS.get('dictionary'), testDictionary);
    });

    ember_qunit.test('getKeyValue() returns requested key if not found in dictionary', function (assert) {
        TS.setDictionary(Ember['default'].Object.create({ the_key: 'my value' }));

        assert.notEqual(TS.getKeyValue('wrong_key'), 'the_key');
    });

    ember_qunit.test('getKeyValue() returns requested key\'s translated string', function (assert) {
        TS.setDictionary(Ember['default'].Object.create({ the_key: 'my value' }));

        assert.equal(TS.getKeyValue('the_key'), 'my value');
    });

    ember_qunit.test('translateKey() accepts only an object as a parameter', function (assert) {
        var test = synchronous.requires(TS.translateKey, ['object']);

        assert.ok(test.requires, test.messages);
    });

    ember_qunit.test('translateKey() returns translated string for specified key', function (assert) {
        TS.setDictionary(Ember['default'].Object.create({ the_key: 'my value' }));

        assert.equal(TS.getKeyValue('the_key'), 'my value');
    });

    ember_qunit.test('If either "pluralKey" or "pluralCount" are provided to translateKey() then both must be', function (assert) {
        assert.equal(TS.translateKey({ key: 'singular_key', pluralKey: 'plural_key' }), 'singular_key');
        assert.equal(TS.translateKey({ key: 'singular_key', pluralCount: 3 }), 'singular_key');
    });

    ember_qunit.test('Pluralization only works if "pluralCount" is a number', function (assert) {
        TS.setDictionary(Ember['default'].Object.create({
            the_singular_key: 'Singular translated value',
            the_plural_key: 'Plural translated value'
        }));

        assert.notEqual(TS.translateKey({ key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 'two' }), 'Plural translated value');
    });

    ember_qunit.test('Pluralization occurs when provided the necessary information', function (assert) {
        TS.setDictionary(Ember['default'].Object.create({
            the_singular_key: 'Singular translated value',
            the_plural_key: 'Plural translated value'
        }));

        assert.equal(TS.translateKey({ key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 0 }), 'Singular translated value');
        assert.equal(TS.translateKey({ key: 'the_singular_key', pluralKey: 'the_plural_key', pluralCount: 3 }), 'Plural translated value');
    });

    ember_qunit.test('Token replacement in translation string', function (assert) {
        TS.setDictionary(Ember['default'].Object.create({
            the_key: 'Replaced values: {0} and {1}'
        }));

        assert.equal(TS.translateKey({
            key: 'the_key',
            parameters: {
                $0: 'ASDF',
                $1: 1234
            }
        }), 'Replaced values: ASDF and 1234');
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
  require("dummy/app")["default"].create({"name":"sl-ember-translate","version":"1.6.0.dfc0f915"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map