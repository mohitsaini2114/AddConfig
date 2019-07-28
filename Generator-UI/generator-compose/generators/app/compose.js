var Generator = require('yeoman-generator');
var path = require('path');
module.exports = class extends Generator {};

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
      // Calling the super constructor is important so our generator is correctly set up
      super(args, opts);
  
      // Next, add your custom code
      this.option('babel'); // This method adds support for a `--babel` flag
    }
  };

  module.exports = class extends Generator {
    _method1() {
      
      this.log('method 1 just ran');
    }
  
    method2() {
      this.log('method 2 just ran');
    }

     writing() {

      this.log("main aa gyaa");
        // app.post('/', (req,res,next) => {
        //     console.log("hellooooooo");
        //     // console.log(req.body.serviceName)
        //      var objData = req.body
        //      column = objData;
        
        //      module.exports._writing;
        //      console.log("byeeeee");
        
        //      //console.log(objData.serviceName)
        //      res.send('displayingg compose');
        //  });

        this.log('writing just ran');
        this.fs.copyTpl(
          this.templatePath('docker-compose.yml'),
          this.destinationPath('public/docker-compose.yml'),
          {
            columns: this.column
          }
        );
      }
  };


  function templatePath() {
    let filepath = path.join.apply(path, arguments);

    // if (!path.isAbsolute(filepath)) {
    //   filepath = path.join(this.sourceRoot(), filepath);
    // }

    return filepath;
  }

  function destinationPath() {
  
    let filepath = path.join.apply(path, arguments);

    // if (!path.isAbsolute(filepath)) {
    //   filepath = path.join(this.destinationRoot(), filepath);
    // }

    return filepath;
  }

  module.exports.template = templatePath;
  module.exports.destination = destinationPath;
  module.exports.writing = this.writing;
