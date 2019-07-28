var Generator = require("yeoman-generator");
const express = require("express");
var fs = require("fs");
var yaml = require("js-yaml");
var doc = fs.readFileSync("./temp/docker-compose.yml", "utf8");
const cors = require("cors");
const bodyParser = require("body-parser");
var compose = require("./compose.js");
var ejs = require("ejs");

const calculator = require("./test.js");

var memFs = require("mem-fs");
var editor = require("mem-fs-editor");

var store = memFs.create();
var fs = editor.create(store);

const { exec } = require("child_process");

const app = express();
this.column = [];

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("hello from compose server");
});

app.get("/compose", (req, res) => {
  res.send("displayingg compose");
});

app.post("/", (req, res, next) => {
  console.log("received data from Post request");
  column = req.body;

  var ejsData = ejs.render(doc, column);
  console.log(ejsData);
  //    console.log( ejs.render('./templates/docker-compose.yml', {
  //         user : req.body,

  //         // We are now feeding your EJS template another variable

  //       }));

  //const doc = fs.readFileSync('./templates/docker-compose.yml', 'utf8');
  //console.log(doc);

  // var content;
  // fs.read('./templates/docker-compose.yml', function read(err, data) {
  // if (err) {
  //     throw err;
  // }
  // content = data;
  // console.log(content);
  // processFile();
  // });

  //console.log(doc)

  //console.log(content);

  // function processFile() {
  //     console.log(content);
  // }

  // fs.copyTpl(compose.template('./templates/docker-compose.yml'), compose.destination('public/docker-compose.yml'),
  // {
  //     columns: column
  // });

  // this.editor.copyTpl(
  //     this.templatePath('docker-compose.yml'),
  //     this.destinationPath('public/docker-compose.yml'),
  //     {
  //       columns: this.column
  //     }
  //   );
  // exec('yo compose', (error, stdout, stderr) => {
  //     if (error) {
  //       console.error(`exec error: ${error}`);
  //       return;
  //     }
  //     console.log(`stdout: ${stdout}`);
  //     console.log(`stderr: ${stderr}`);
  //   });
  //console.log(compose._writing);
  res.send(ejsData);
});

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option("babel"); // This method adds support for a `--babel` flag
  }
};

module.exports = class extends Generator {
  method1() {
    this.log("method 1 just ran");
  }

  method2() {
    this.log("method 2 just ran");
  }

  writing() {
    this.log("writing just ran");
    this.fs.copyTpl(
      this.templatePath("docker-compose.yml"),
      this.destinationPath("public/docker-compose.yml"),
      {
        columns: this.column
      }
    );
  }

  //   templatePath() {
  //     let filepath = path.join.apply(path, arguments);

  //     if (!path.isAbsolute(filepath)) {
  //       filepath = path.join(this.sourceRoot(), filepath);
  //     }

  //     return filepath;
  //   }

  //   destinationPath() {
  //     let filepath = path.join.apply(path, arguments);

  //     if (!path.isAbsolute(filepath)) {
  //       filepath = path.join(this.destinationRoot(), filepath);
  //     }

  //     return filepath;
  //   }
};

app.listen(7000, () => {
  console.log("server is listening to me");
});
