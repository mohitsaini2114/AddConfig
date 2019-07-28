const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
var objData;
var memFs = require("mem-fs");
var editor = require("mem-fs-editor");
 
var store = memFs.create();
var fs = editor.create(store);

var Generator = require('yeoman-generator');