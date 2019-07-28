var Generator = require('yeoman-generator');
var path = require('path');

class AdvancedCalculator extends Generator {
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

  module.exports =  AdvancedCalculator