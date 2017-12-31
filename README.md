# jselcli

Use [Xpath](https://www.w3.org/TR/1999/REC-xpath-19991116/) to select items from JSON data from the command line.
Makes use of Ali Chamas's [jsel](https://github.com/dragonworx/jsel).

## Usage

```
cat blah.json | jselcli '*[@focused="true"]'
```

## Install
```
npm install -g jselcli
```

# Alternatives and prior work

* [jq](https://stedolan.github.io/jq/) is a domain specific language for processing JSON. In the author's experience, it is not well suited for dealing with nested data.
* [JsonPath](https://github.com/json-path/JsonPath) is a [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) influenced by Xpath that appears to be influenced by the JavaScript language. 
* Unfortunately, many authors have used the name JsonPath (or json-path or jsonpath) for different DSLs with different (though similar) languages. Some libraries include: [json-path](https://github.com/flitbit/json-path), [jsonpath](https://github.com/NodePrime/jsonpath), [jsonpath-rw](https://github.com/kennknowles/python-jsonpath-rw).
