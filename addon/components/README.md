# sl-translate

## Single Key

The simplest use of the *sl-translate* component is when you only need to translate a single key that will not be bound to or need any strings replaced within it.  Such use looks like:

```handlebars
{{sl-translate key="CLOSE"}}
```

---

## Singular/Plural

If a different key needs to be used based on whether or not a singular or plural context needs to be represented, then use the following format:

```handlebars
{{sl-translate key="DEVICE_COUNT_SINGULAR" pluralKey="DEVICE_COUNT_PLURAL" pluralCount="3"}}
```

The order of the parameters does not matter.

---

## String Replacement

If the translated string has tokens within it (e.g {0}, {1}, etc) that need to be replaced with values, use the following format:

```handlebars
{{sl-translate key="ACCESSLOG_LIST_PAGINATION" $0="5" $1="10" $2="200"}}
```

where each "$x" parameter numerically corresponds to the tokens in the translation string.  The order of the parameters does not matter.

---

## Binding

If you need to pass parameters whose values are bound to other values rather than be hard-coded, use the following format:

```handlebars
{{sl-translate key="ACCESSLOG_LIST_PAGINATION" $0Binding="examplePropertyBoundTo1" $1Binding="examplePropertyBoundTo2" $2Binding="examplePropertyBoundTo3"}}
```

The order of the parameters does not matter.