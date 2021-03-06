import React, { Component } from "react";
import Compose from "./Compose";
import axios from "axios";
import {Helmet} from "react-helmet";
var fileDownload = require("js-file-download");


class Service extends Component {
  // MOHITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT...............................start
  constructor(props) {
    super(props);
    this.state = {
      services: [""],
      collectionName: "",
      isValid: false,
      errors: [],
      isValidTeam: true,
      serviceCount: 1
    };
    this.state.services[0]={}
    this.state.services[0].isDeleted = false;
    this.setState({services: this.state.services})
    this.handleAddService = this.handleAddService.bind(this);
    this.handleCollectionNameChange = this.handleCollectionNameChange.bind(
      this
    );
    // MOHITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT...............................end

    this.handleSubmit = this.handleSubmit.bind(this);
    this.myCallback = this.myCallback.bind(this);
    // this.handleRemoveService = this.handleRemoveService(this);
  }

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  validate(finalServiceState) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
    const teamName = finalServiceState.collectionName;
    //const servicesData = finalServiceState.services;
    // for(var ser=0; ser<servicesData.length; ser++){
    //     console.log(servicesData[ser].serviceName);
    //     var serviceName = servicesData[ser].serviceName;
    //     if (serviceName.length === 0) {

    //         errors.push("Service Name can't be empty");
    //       }
    // }

    if (teamName.length === 0) {
      this.setState({ isValidTeam: false });
    }

    // if (serviceName.length === 0) {
    //     errors.push("Service Name can't be empty");
    //   }

    // if (email.length < 5) {
    //   errors.push("Email should be at least 5 charcters long");
    // }
    // if (email.split("").filter(x => x === "@").length !== 1) {
    //   errors.push("Email should contain a @");
    // }
    // if (email.indexOf(".") === -1) {
    //   errors.push("Email should contain at least one dot");
    // }

    // if (password.length < 6) {
    //   errors.push("Password should be at least 6 characters long");
    // }

    return errors;
  }
  handleSubmit = e => {
    e.preventDefault();

    this.state.services.forEach((service, index) => {
      if (
        service == "" ||
        service.serviceName == "" ||
        service.imageName == "" ||
        this.state.collectionName == "" ||
        service.imageName == undefined ||
        service.serviceName == undefined
      ) {
        this.setState({ isValid: false });
      }
      else{
        this.setState({ isValid: true })
      }
    });

    // if (this.state.collectionName.length === 0) {
    //   this.setState({ isValidTeam: false });
    // }

    var finalServiceState = {};
    finalServiceState.services = this.state.services;
    finalServiceState.collectionName = this.state.collectionName;
    console.log(finalServiceState.collectionName);
    //console.log(finalServiceState.services.serviceName);
    // const errors = this.validate(finalServiceState);
    // if (errors.length > 0) {
    //   this.setState({ errors });
    //   return;
    // }
    //finalServiceState = this.state.services
    //console.log("final service state: " + finalServiceState[0].serviceName);
    if (this.state.isValid){
    axios
      .post("http://localhost:7000/", finalServiceState)
      //https://jsonplaceholder.typicode.com/posts
      .then(response => {
        fileDownload(response.data, "docker-compose.yml");
      })
      .catch(error => {
        console.log(error);
      });
    }
  };

  handleAddService() {
    this.setState({ services: [...this.state.services, ""] });
    // MOHITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT...............................start
    var serviceCount_actual = this.state.services.length;
    this.state.services[serviceCount_actual] = {};
    this.state.services[serviceCount_actual].isDeleted = false;
    this.setState({services: this.state.services})
    var count = 0;
    this.state.services.forEach((service, index) => {
      if(service.isDeleted == false){
        count++
        // this.state.serviceCount++;
        // this.setState({serviceCount: this.state.serviceCount})
      }
    })
    this.state.serviceCount = count;
    this.setState({serviceCount: this.state.serviceCount});
  }
  // MOHITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT...............................end
  handleCollectionNameChange(event) {
    this.state.collectionName = event.target.value;
    this.setState({ collectionName: this.state.collectionName });
    this.state.isValidTeam = true;
    this.state.services.forEach((service, index) => {
      if (
        service == "" ||
        service.serviceName == "" ||
        service.imageName == "" ||
        this.state.collectionName == "" ||
        service.imageName == undefined ||
        service.serviceName == undefined
      ) {
        this.setState({ isValid: false });
      }
      else{
        this.setState({ isValid: true })
      }
    });
  }

  myCallback(dataFromChild, index) {
    this.setState({ listDataFromChild: dataFromChild });
    //this.setFinalState()
    console.log("child to parent data" + this.state.listDataFromChild);

    if (this.state.services[index] == "") {
      this.state.services[index] = {};
    }
    this.state.services[index] = dataFromChild;
    this.setState({ services: this.state.services });
     // MOHITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT...............................start
    this.state.services[index].isDeleted = false;
    this.setState({ services: this.state.services });
     // MOHITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT...............................end


    // if(this.state.services[index] != null && this.state.services[index].serviceName != ""){
    //     console.log("service name in parent:" + this.state.services[index].serviceName)
    // }
    if (
      this.state.services[index].serviceName == "" ||
      this.state.services[index].imageName == "" ||
      this.state.collectionName == ""
    ) {
      this.setState({ isValid: false });
    }
    else{
      this.setState({ isValid: true })
    }
  }

  // MOHITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT...............................start
  handleRemoveService(index) {
    //this.state.services.splice(index, 1);
    this.state.services[index].isDeleted = true;

    this.setState({ services: this.state.services });
    
    var count = 0;
    this.state.services.forEach((service, index) => {
      if(service.isDeleted == false){
        count++
        // this.state.serviceCount++;
        // this.setState({serviceCount: this.state.serviceCount})
      }
    })
    this.state.serviceCount = count;
    this.setState({serviceCount: this.state.serviceCount});
    
  }
  // MOHITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT...............................end
  render() {
    const { errors } = this.state;
    //var count = 0;
    return (
      <div>
          <Helmet>
                <style>{}</style>
            </Helmet>
        <font color="red">
          {errors.map(error => (
            <p key={error}>Error: {error}</p>
          ))}
        </font>
        <br />
        <label>
          <span style={this.styles} className="badge badge-primary m-2">
            Collection(Team) name :
          </span>
          <input
            type="text"
            name="collectionName"
            value={this.state.collectionName}
            onChange={this.handleCollectionNameChange}
          />
          {!this.state.isValidTeam && (
            <font class="text-danger"> Please Enter Collection(Team) Name</font>
          )}
        </label>
        
        <h1 class="card-body">Services</h1>
        
        {this.state.services.map((service, index) => {
          let isDeletedVal = service != "" ? service.isDeleted : false;
        
          return (
            <div >
            <Compose
              service = {service}
              callbackFromParent={this.myCallback}
              id={index}
              isValid={this.state.isValid}
              isDeleted= {isDeletedVal}
            />
            { !isDeletedVal && this.state.serviceCount > 1 &&
            <button onClick={() => this.handleRemoveService(index)}>Remove Service</button>}
            </div>
          );
        })}
        <br />
        &nbsp; &nbsp; &nbsp;{" "}
        <button
          onClick={this.handleAddService}
          class="btn btn-outline-secondary"
        >
          Add More Services
        </button>{" "}
        &nbsp; &nbsp; &nbsp;
        <button onClick={this.handleSubmit} class="btn btn-outline-success">
          Generate the Docker Compose file
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Service;

// MOHITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT...................line 245,247,249,256,258,260,261
