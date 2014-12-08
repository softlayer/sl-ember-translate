# Repository Release Instructions

This document captures the steps a project maintainer should follow when releasing a new version of this Addon.

* Merge all desired pull requests into `develop` branch
* Merge `develop` branch into `master` branch
* If change is due to upgrading Ember CLI version
    * Update Ember CLI version text in README.md file
* Update CHANGELOG.md
* After changes have been committed:
    * `npm version x.x.x`, where *x.x.x* is the Semantic Version of the changeset
    * `git push origin master`
    * `git push origin --tags`
    * `npm publish --registry http://registry.npmjs.org/`
        * Note: `--registry` flag is workaround for occasional issues with default SSL url
* Merge `master` branch into `develop`

If any of these conditions are true:

* There have been modifications to the *tests/dummy/app* demo application
* There has been a change in the NPM or Bower dependencies
* Ember CLI has been upgraded

Then follow these steps:

* Run `ember build`
* Copy the following files from */dist* folder outside of the working directory so they can be retained between switching branches:
    * */dist/index.html*
    * */dist/assets/dummy.css*
    * */dist/assets/dummy.js*
    * */dist/assets/vendor.css*
    * */dist/assets/vendor.js*
* Switch to the `gh-pages` branch
* Replace the same files listed above with their copies
* Within the */dist/index.html* file, replace the following href values:
    * `assets/vendor.css` with `sl-ember-translate/dist/assets/vendor.css`
    * `assets/dummy.css` with `sl-ember-translate/dist/assets/dummy.css`
    * `assets/vendor.js` with `sl-ember-translate/dist/assets/vendor.js`
    * `assets/dummy.js` with `sl-ember-translate/dist/assets/dummy.js`
* Also within the */dist/index.html* file, in the `<meta name="dummy/config/environment"...` tag, replace the `locationType` value from `auto` to `hash`
* Commit and push the changes