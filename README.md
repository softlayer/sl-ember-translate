
[![Latest Release](https://img.shields.io/github/release/softlayer/sl-ember-translate.svg)](https://github.com/softlayer/sl-ember-translate/releases) ![Ember CLI version](https://img.shields.io/badge/ember%20cli-0.2.3-orange.svg) [![License](https://img.shields.io/npm/l/sl-ember-translate.svg)](LICENSE.md) [![Downloads](https://img.shields.io/npm/dm/sl-ember-translate.svg)](https://www.npmjs.com/package/sl-ember-translate)

[![Dependencies](https://img.shields.io/david/softlayer/sl-ember-translate.svg)](https://david-dm.org/softlayer/sl-ember-translate) [![Dev Dependencies](https://img.shields.io/david/dev/softlayer/sl-ember-translate.svg)](https://david-dm.org/softlayer/sl-ember-translate#info=devDependencies)

[![Build Status](https://img.shields.io/travis/softlayer/sl-ember-translate/develop.svg)](https://travis-ci.org/softlayer/sl-ember-translate) [![Code Climate](https://img.shields.io/codeclimate/github/softlayer/sl-ember-translate.svg)](https://codeclimate.com/github/softlayer/sl-ember-translate)

To see which issues are currently being worked on or are scheduled to be worked on next, visit [https://huboard.com/softlayer/sl-ember-translate/#/](https://huboard.com/softlayer/sl-ember-translate/#/)

---

# What sl-ember-translate is
An [Ember CLI Addon](http://www.ember-cli.com) that provides the ability to lookup a dictionary value either through method calls or via a component in your templates. It supports:

* singular/plural string substitution
* replacement of placeholder tokens in translation strings with passed parameters
* bindings



# What it is not
This addon does not translate text strings or provide internationalization (i18n) support for your application.  You will need to provide content to this addon that is already translated and/or localized.



# Then why is it called sl-ember-translate?
sl-ember-dictionary or something similar might in fact be a better name for this addon but in our opinion, which could very well turn out to be incorrect, this addon will most usually be used in conjuction with the displaying of translated text in an application.  Then when you take into account support for token replacement it seemed to move away from just a dictionary lookup into something "more".


---

# Demo

## Live

[http://softlayer.github.io/sl-ember-translate/#/demo](http://softlayer.github.io/sl-ember-translate/#/demo)

## Development Environment

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* View the demo at http://localhost:4200

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

---

# How to use this addon in your application

## Install this addon as a Node module

```
ember install sl-ember-translate
```


## Set dictionary data on Translate Service

Get a reference to the Translate Service and pass your dictionary as the only argument to *setDictionary()*

In a route, for example:

```
this.controllerFor( 'application' ).get( 'translateService' ).setDictionary( yourDictionaryData );
```

## Use as a Component

### Single Key

The simplest use of the *sl-translate* component is when you only need to translate a single key that will not be bound to or need any strings replaced within it.  Such use looks like:

```handlebars
{{sl-translate key="CLOSE"}}
```

---

### Singular/Plural

If a different key needs to be used based on whether or not a singular or plural context needs to be represented, then use the following format:

```handlebars
{{sl-translate key="DEVICE_COUNT_SINGULAR" pluralKey="DEVICE_COUNT_PLURAL" pluralCount="3"}}
```

The order of the parameters does not matter.

---

### String Replacement

If the translated string has tokens within it (e.g {0}, {1}, etc) that need to be replaced with values, use the following format:

```handlebars
{{sl-translate key="ACCESSLOG_LIST_PAGINATION" $0="5" $1="10" $2="200"}}
```

where each "$x" parameter numerically corresponds to the tokens in the translation string.  The order of the parameters does not matter.

---

### Used alongside other properties or attribute bindings

You can still use the *sl-translate* component alongside other properties or attribute bindings as well:

```handlebars
{{sl-translate tagName="div" class="btn :btn-primary" key="CLOSE"}}
```


## Call Translation Service directly

### getKeyValue()
If you know that your translation string does not need pluralization support or you do not need to replace any tokens you can use this method to keep from having to build up the data object needed by *translateKey()*.

It accepts one argument which is your key and will either return the translated string for this key or the original key text if the key is not found in the dictionary.


### translateKey()
This method provides the pluralization and token replacement support of the Tranlsate Service.  To call this method direclty, you must pass on object to it of the following format in any of the following combinations:

**No pluralization or token replacement**

```
{
    key: 'KEY_STRING'
}
```

**Pluralization**

```
{
    key         : 'KEY_STRING',
    pluralKey   : 'PLURALKEY_STRING',
    pluralCount : PLURALCOUNT_VALUE
}
```

**Token replacement**

```
{
    key        : 'KEY_STRING',
    parameters : {
        $0: 'REPLACEMENT_VALUE',
        $1: 'REPLACEMENT_VALUE'
        ...
    }
}
```

**Pluralization and Token replacement**

```
{
    key         : 'KEY_STRING',
    pluralKey   : 'PLURALKEY_STRING',
    pluralCount : PLURALCOUNT_VALUE,
    parameters  : {
        $0: 'REPLACEMENT_VALUE',
        $1: 'REPLACEMENT_VALUE'
        ...
    }
}
```



## Use as a Mixin

By using the *sl-get-translation* mixin on your controllers you can enable quick access to translations through the standard *Ember.get* method by simply prepending "translation." to the beginning of the key you want translated.  This is especially useful in templates where the use of the *sl-translate* component is not possible.  In those situations the path *controller.translate.[key]* will provide the translation for the specified key.

---

# How all the parts work

## Initializer
A singleton instance of the Translate Service is injected on every View, Controller and Component as the *translateService* property via an initializer named *translate-service*.

## Setting the dictionary data
Though the Translate Service has been injected it is not ready for use until a dictionary object is set on it via a call to *setDictionary()*.  The dictionary object should be simple key-value pairings, such as

```
{
    'SUBMIT_BUTTON': 'Submit',
    'CANCEL_BUTTON': 'Cancel',
    ...
}
```

## Single key lookup, pluralization, and token replacement

The Translate Service supports single key lookup, pluralization, token replacement and any combination of these together.

When a single key is provided but cannot be found in the dictionary, or an error occurs during the dictionary lookup, a warning is written to the console and the original key string is returned.

When pluralization is desired the *pluralKey* value is used instead of the one for *key* and the same error handling just described is still employed.

To invoke pluralization, you must populate both of the *pluralKey* and *pluralCount* properties.  If only one of these values is provided then a warning is written to the console and the *key* value is returned.  If the value for *pluralCount* is greater than 0 (zero) then the *pluralKey* will be retrieved from the dictionary, otherwise *key* will be.

The Translate Service supports the replacement of tokens within the translation string via simple string replacement without the application of any additional logic.  This is why pluralization is supported in the manner already described and not as a mechanism of token replacement.  While calling *translateKey()* directly does not place any restrictions on the text patterns of the replacement tokens you can use the *sl-component* presently does, therefore the safest pattern to use is a number surrounded by curly braces.  For example:

```
{
    'ITEM_PAGINATION': 'You are viewing items {3} of {1} of {0} pages',
}
```

The numerical values within each set of curly braces does not have any signifigance.  Just make sure that you correctly specify parameter values for each of these keys via the *sl-translate* component or via calls to *translateKey()* to ensure the desired substitution.  If you use the same token within the translation string more than once then each occurrence of the same string will be replaced with the same content specified as the replacement text.

Suffice it to say, the values of your translation strings should not themselves have any numbers surrounded by curly braces that you desire to be presented in this manner.  If you do then you will need to encode the curly braces as HTML entities, as one possible solution.


## sl-translate Component

The simplest use of the *sl-translate* component is

```
{{sl-translate key="SUBMIT_BUTTON"}}
```

The reason it is necessary to specify the *key* portion instead of just being able to pass in *"SUBMIT_BUTTON"* as a lone parameter in this usage is because a component is not able to accept both named and un-named parameters and support binding the way that is required.  We contemplated creating two different components, one to handle single keys and one to handle pluralizations, but that quickly became messy due to needing to support token replacments.  When we first set out to make this component we wanted to make it as easy as possible for a developer to use it in their templates and it quickly became evident that having a single *sl-translate* component that would be used everywhere, in every scenario, was a better pattern than different components for different scenarios, and that having to specify a *key* portion for single key translations was an acceptable trade-off.

Though a value can be bound to a property passed to the *sl-translate* component, due to how components work in Ember, these properties are not observed from within the component.  This is desired functionality of the *sl-translate* component so there is logic within it that distills the passed parameters to ones which should be observed and then on *willInsertElement()* and *willClearRender()* observers are added and removed.

---

# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)

---

# Contribution
[See CONTRIBUTING.md](CONTRIBUTING.md)

---

# Copyright and License
sl-ember-translate and its source files are Copyright © 2014-2015 [SoftLayer Technologies, Inc.](http://www.softlayer.com/) The software is [MIT Licensed](LICENSE.md)

---

# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the implied warranties of merchantability and fitness for a particular purpose.
