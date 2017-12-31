#!/usr/bin/env nodejs
'use strict'
var jsel = require("jsel");
var fs = require('fs');
var argparse = require('argparse')


var ArgumentParser = argparse.ArgumentParser;
var parser = new ArgumentParser({
    version: '0.0.1',
    addHelp:true,
    description: 'Return JSON matching this jsel XPath. '
});
parser.addArgument(
    'jselpath',
    {
        help: 'baz bar'
    }
);
parser.addArgument(
    'file',
    {
        nargs: '?',
        help: 'Read from this file'
    }
);


var args = parser.parseArgs();
var input = fs.readFileSync('/dev/stdin').toString();
var dom = jsel(JSON.parse(input));

console.log(JSON.stringify(dom.select(args.jselpath)));



