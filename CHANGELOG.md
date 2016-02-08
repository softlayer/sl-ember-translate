# sl-ember-translate Changelog

### 1.10.1

**BUGFIX**

* [#225](https://github.com/softlayer/sl-ember-translate/pull/225) Lock down version of jQuery in bower.json

**ENHANCEMENT**

* [#223](https://github.com/softlayer/sl-ember-translate/pull/223) Improved Token Pattern to allow alphanumeric

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.10.0...v1.10.1)

### 1.10.0

**BREAKING ENHANCEMENT**

* [#180](https://github.com/softlayer/sl-ember-translate/pull/180) Upgrade to Ember CLI 1.13.8

**ENHANCEMENT**

* [#191](https://github.com/softlayer/sl-ember-translate/pull/191) Upgrade ember-cli-htmlbars dependency

**DOCUMENTATION**

* [#175](https://github.com/softlayer/sl-ember-translate/issues/175) Remove initializer references

**INTERNAL**

* [#200](https://github.com/softlayer/sl-ember-translate/pull/200) No longer adding custom observers to bound string replacement tokens in `sl-translate` component

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.9.0...v1.10.0)

### 1.9.0

**BUGFIX**

* [#146](https://github.com/softlayer/sl-ember-translate/issues/146) Support type of `Symbol`

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.8.0...v1.9.0)

### 1.8.0

**BREAKING ENHANCEMENT**

* [#132](https://github.com/softlayer/sl-ember-translate/issues/132) Reverse the changes introduced in [Issue #114](https://github.com/softlayer/sl-ember-translate/issues/114) and give service a unique name

**ENHANCEMENT**

* [#142](https://github.com/softlayer/sl-ember-translate/pull/142) [ENHANCEMENT] Uninstall ember-jsdoc; install ember-cli-jsdoc

**DOCUMENTATION**

* [#144](https://github.com/softlayer/sl-ember-translate/pull/144) Add information about how to generate documentation

**INTERNAL**

* [#129](https://github.com/softlayer/sl-ember-translate/issues/129) Replace instances of Ember.keys with Object.keys
* [#138](https://github.com/softlayer/sl-ember-translate/pull/138) Update CONTRIBUTING.md
* [Remove develop branch](https://github.com/softlayer/sl-ember-translate/commit/67e046f0b255f2c538d57bd86f90f91efb4a758e)

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.7.0...v1.8.0)

### 1.7.0

**BREAKING ENHANCEMENT**

* [#113](https://github.com/softlayer/sl-ember-translate/pull/113) Upgrade to Ember CLI 0.2.7

**ENHANCEMENT**

* [#116](https://github.com/softlayer/sl-ember-translate/pull/116) Add support for JSDoc generated documentation

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.6.0...v1.7.0)

### 1.6.0

**BREAKING ENHANCEMENT**

* [#107](https://github.com/softlayer/sl-ember-translate/pull/107) Upgrade to Ember CLI 0.2.3
* [#107](https://github.com/softlayer/sl-ember-translate/pull/107) Bound values now function in the normal Ember way

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.5.1...v1.6.0)

### 1.5.1

**BUG FIX**

* [#104](https://github.com/softlayer/sl-ember-translate/pull/104) Update dependencies for underlying dependency chaining mis-matches that have occurred within Ember CLI ecosystem

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.5.0...v1.5.1)

### 1.5.0

**ENHANCEMENT**

* [#101](https://github.com/softlayer/sl-ember-translate/pull/101) Add ember-cli-blanket for code coverage reporting

**BUG FIX**

* [#103](https://github.com/softlayer/sl-ember-translate/pull/103) Replace Ember.run.bind() calls with self=this references

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.4.1...v1.5.0)

### 1.4.1

**BUG FIX**

* [#100](https://github.com/softlayer/sl-ember-translate/pull/100) Fix binding reference for getTokenValue

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.4.0...v1.4.1)

### 1.4.0

**BREAKING ENHANCEMENT**

* [#94](https://github.com/softlayer/sl-ember-translate/pull/94) Upgrade to Ember CLI 0.1.15
* [#84](https://github.com/softlayer/sl-ember-translate/pull/88) Removed es5-shim

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.3.0...v1.4.0)

### 1.3.0

**BREAKING ENHANCEMENT**

* [#67](https://github.com/softlayer/sl-ember-translate/pull/67) Upgrade to Ember CLI 0.1.5

**INTERNAL**

* [#58](https://github.com/softlayer/sl-ember-translate/pull/58) Updated tests
* [#59](https://github.com/softlayer/sl-ember-translate/pull/59) Installed ember-cli-es5-shim to faciliate running of tests via TravisCI
* [DOCUMENTATION] Updated README.md
* [#65](https://github.com/softlayer/sl-ember-translate/pull/65) Changed how meta data in demo application is populated

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.2.0...v1.3.0)

### 1.2.0

**DOCUMENTATION**

* Documentation updates

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.1.0...v1.2.0)

### 1.1.0

**BREAKING ENHANCEMENT**

* [#36](https://github.com/softlayer/sl-ember-translate/pull/36) Upgrade to Ember CLI 0.1.4
* [Remove ember-cli-content-security-policy dependency](https://github.com/softlayer/sl-ember-translate/commit/7f51cb2def71e781ba369330f957f924974abeb0) 

**INTERNAL**

* [#5](https://github.com/softlayer/sl-ember-translate/pull/5) Remove "private: true" flag
* [#10](https://github.com/softlayer/sl-ember-translate/pull/10) Update contribution guidelines to reflect use of git-flow branching model
* [#11](https://github.com/softlayer/sl-ember-translate/pull/11) Add additional details to upgrade information
* [#12](https://github.com/softlayer/sl-ember-translate/pull/12) Add GitHub pages demo information
* [#13](https://github.com/softlayer/sl-ember-translate/pull/13) Style demo app to match http://softlayergithub.io/sl-ember-translate
* [#14](https://github.com/softlayer/sl-ember-translate/pull/14) Update demo url
* [New (final) design of demo application](https://github.com/softlayer/sl-ember-translate/commit/23cb54f75466ae92b34cf5a9b3e164e99b50d07e)
* [Change keywords meta value for demo application](https://github.com/softlayer/sl-ember-translate/commit/07333503cbae49acaf3bf0039a2c66f4785faa99)
* [Change spelling error in footer of demo application](https://github.com/softlayer/sl-ember-translate/commit/b466ead9b8143b68bcb8475d3f6c15f8e86a24ed)
* [Add homepage property to package.json](https://github.com/softlayer/sl-ember-translate/commit/a75853a5dc2e2ce577c6535384832516f16de4d3)
* Upgrade package.json properties
* [#31](https://github.com/softlayer/sl-ember-translate/pull/31) Update CONTRIBUTING.md
* Update demo application configuration

[View complete changeset](https://github.com/softlayer/sl-ember-translate/compare/v1.0.0...v1.1.0)

### 1.0.0

* Initial release
