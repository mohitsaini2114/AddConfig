import React, { Component } from "react";
import NetworkComponent from "./NetworkComponent";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import './compose.css';

class Compose extends Component {
  // state = {

  // };
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      service: [],
      serviceName: "",
      imageName: "",
      portNumber: "",
      health: "",
      replica: "",
      memory: "",
      isVolumeNAS: false,
      isIngress: false,
      networkClick: false,
      networksOne: [],
      secretsOne: [],
      localVolumeOne: [],
      configs: [],
      NASVol: []    
    };
    this.handleServiceNameChange = this.handleServiceNameChange.bind(this);
    this.handleImageNameChange = this.handleImageNameChange.bind(this);
    this.handlePortNumberChange = this.handlePortNumberChange.bind(this);
    this.handleHealthChange = this.handleHealthChange.bind(this);
    this.handleMemoryChange = this.handleMemoryChange.bind(this);
    this.handleReplicaChange = this.handleReplicaChange.bind(this);
    this.handleNetworkClick = this.handleNetworkClick.bind(this);
  }
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  handleServiceNameChange(event) {
    this.state.serviceName = event.target.value;
    this.setState({ serviceName: this.state.serviceName });
    console.log("servie name: " + this.state.serviceName);
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handleImageNameChange(event) {
    this.state.imageName = event.target.value;
    this.setState({ imageName: this.state.imageName });
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handlePortNumberChange(event) {
    this.state.portNumber = event.target.value;
    this.setState({ portNumber: this.state.portNumber });
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handleHealthChange(event) {
    this.state.health = event.target.value;
    this.setState({ health: this.state.health });
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handleReplicaChange(event) {
    this.state.replica = event.target.value;
    this.setState({ replica: this.state.replica });
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handleMemoryChange(event) {
    this.state.memory = event.target.value;
    this.setState({ memory: this.state.memory });
    this.props.callbackFromParent(this.state, this.state.id);
  }

  handleNetworkClick() {
    this.setState({
      networkClick: !this.state.networkClick
    });
  }

  handleAddNetworkOne() {
    this.setState({ networksOne: [...this.state.networksOne, ""] });
  }

  handleNetworkOneInput(e, index) {
    this.state.networksOne[index] = e.target.value;
    this.setState({ networksOne: this.state.networksOne });
    this.props.callbackFromParent(this.state, this.state.id);
  }

  handleRemoveNetworkOne(index) {
    this.state.networksOne.splice(index, 1);

    console.log(this.state.networksOne, "$$$$");

    this.setState({ networksOne: this.state.networksOne });
  }
  handleAddSecrets() {
    this.setState({ secretsOne: [...this.state.secretsOne, ""] });
  }

  handleSecretNameInput(e, index) {
    if (this.state.secretsOne[index] == "") {
        this.state.secretsOne[index] = {};
      }
  
      this.state.secretsOne[index].secretName = e.target.value;
      this.setState({ secretsOne: this.state.secretsOne });
      this.props.callbackFromParent(this.state, this.state.id);
  }
  handleSecretFileInput(e, index) {
    if (this.state.secretsOne[index] == "") {
      this.state.secretsOne[index] = {};
    }
    this.state.secretsOne[index].secretFile = e.target.value;
    this.setState({ secretsOne: this.state.secretsOne });
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handleRemoveSecretOne(index) {
    this.state.secretsOne.splice(index, 1);
    this.setState({ secretsOne: this.state.secretsOne });
  }
  handleAddLocalVolume() {
    this.setState({ localVolumeOne: [...this.state.localVolumeOne, ""] });
  }
  handleLocalVolumeOneInput(e, index) {
    this.state.localVolumeOne[index] = e.target.value;
    this.setState({ localVolumeOne: this.state.localVolumeOne });
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handleRemoveLocalVolumeOne(index) {
    this.state.localVolumeOne.splice(index, 1);
    this.setState({ localVolumeOne: this.state.localVolumeOne });
  }
  handleAddConfig() {
    this.setState({ configs: [...this.state.configs, ""] });
  }
  handleConfigSourceInput(e, index) {
    if (this.state.configs[index] == "") {
      this.state.configs[index] = {};
    }

    this.state.configs[index].source = e.target.value;
    this.setState({ configs: this.state.configs });
    //this.state.service.configs = this.state.configs[index]
    //this.state.service.configs[index] ={}
    //this.state.service.configs = this.state.configs
    //this.setState({service: this.state.service.configs})
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handleConfigTargetInput(e, index) {
    if (this.state.configs[index] == "") {
      this.state.configs[index] = {};
    }
    this.state.configs[index].target = e.target.value;
    this.setState({ configs: this.state.configs });
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handleConfigVersionInput(e, index) {
    if (this.state.configs[index] == "") {
      this.state.configs[index] = {};
    }
    this.state.configs[index].version = e.target.value;
    this.setState({ configs: this.state.configs });
  }
  handleConfigFileInput(e, index) {
    if (this.state.configs[index] == "") {
      this.state.configs[index] = {};
    }
    this.state.configs[index].file = e.target.value;
    this.setState({ configs: this.state.configs });
  }
  handleRemoveConfig(index) {
    this.state.configs.splice(index, 1);

    console.log(this.state.configs, "$$$$");

    this.setState({ configs: this.state.configs });
  }
  handleAddNASVolume() {
    this.setState({ NASVol: [...this.state.NASVol, ""] });
  }
  handleNASVolNameInput(e, index) {
    if (this.state.NASVol[index] == "") {
      this.state.NASVol[index] = {};
    }

    this.state.NASVol[index].NASVolume = e.target.value;
    this.setState({ NASVol: this.state.NASVol });
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handleNASHostInput(e, index) {
    if (this.state.NASVol[index] == "") {
      this.state.NASVol[index] = {};
    }
    this.state.NASVol[index].NASHost = e.target.value;
    this.setState({ NASVol: this.state.NASVol });
    this.props.callbackFromParent(this.state, this.state.id);
  }
  handleNASPathInput(e, index) {
    if (this.state.NASVol[index] == "") {
      this.state.NASVol[index] = {};
    }
    this.state.NASVol[index].NASPath = e.target.value;
    this.setState({ NASVol: this.state.NASVol });
  }
  handleRemoveNASVol(index) {
    this.state.NASVol.splice(index, 1);
    this.setState({ NASVol: this.state.NASVol });
  }
  //validations for numeric fields. The user can't enter e,-,+,.
  handleNumberInput(event) {
    if (
      event.key === "e" ||
      event.key === "-" ||
      event.key === "+" ||
      event.key === "."
    ) {
      event.returnValue = false;
      if (event.preventDefault) event.preventDefault();
    }
  }
  // handleSubmit(){
  //     var services = []
  //     //console.log(this.state.networksOne,"mera network")
  //     //console.log(this.state.configs, "mera config")

  //     services.push(this.state.configs)
  //     console.log(services)
  // }

  render() {
    const isVolumeNAS = this.state.isVolumeNAS;
    const isIngress = this.state.isIngress;
    let localVolLabel,
      lovalVolInput,
      localVolAdd,
      localVolAddRemoveButton,
      NASVolAdd,


      portNumberLabel,
      portNumberInput,

      NASVolAddAll;


    if(isIngress){

        portNumberLabel = (
            <span style={this.styles} className="badge badge-primary m-2">
              Port Mapping :
            </span> 

          );
          portNumberInput = (
            <input
              type="text"
              name="portNumber"
              value={this.state.portNumber}
              onChange={this.handlePortNumberChange}
              placeholder="8080:8080"
            />

          );

    }


    if (!isVolumeNAS) {
      //   localVolLabel = (
      //     <span style={this.styles} className="badge badge-primary m-2">
      //       Local Volume Name:{" "}
      //     </span>
      //   );
      //   lovalVolInput = (
      //     <input type="text" onChange={this.handleServiceNameChange} />
      //   );
      localVolAdd = (
        <button
          onClick={e => this.handleAddLocalVolume(e)}
          class="btn btn-outline-success"
        >
          {" "}
          Add Local Volume
        </button>
      );

      localVolAddRemoveButton = this.state.localVolumeOne.map(
        (secret, index) => {
          return (
            <div key={index}>
              &nbsp;&nbsp;&nbsp;
              <span style={this.styles} className="badge badge-primary m-2">
                Local Volume:{" "}
              </span>
              <input
                onChange={e => this.handleLocalVolumeOneInput(e, index)}
                value={secret}
              />
              &nbsp;&nbsp;
              <button
                onClick={() => this.handleRemoveLocalVolumeOne(index)}
                class="btn btn-outline-danger"
              >
                Remove
              </button>
            </div>
          );
        }
      );
    } else {
      NASVolAdd = (
        <button
          onClick={e => this.handleAddNASVolume(e)}
          class="btn btn-outline-success"
         
        >
          {" "}
          Add NAS Volume
        </button>
      );
      NASVolAddAll = this.state.NASVol.map((config, index) => {
        return (
          <div key={index}>
            &nbsp;
            <div>
              &nbsp;&nbsp;&nbsp;
              <span style={this.styles} className="badge badge-primary m-2">
                NAS Volume Name:{" "}
              </span>
              <input
                onChange={e => this.handleNASVolNameInput(e, index)}
                value={config.NASVolume}
              />
              &nbsp;&nbsp;
              <button
                onClick={() => this.handleRemoveNASVol(index)}
                class="btn btn-outline-danger"
              >
                Remove
              </button>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;
              <span style={this.styles} className="badge badge-primary m-2">
                NAS Host:{" "}
              </span>
              <input
                onChange={e => this.handleNASHostInput(e, index)}
                value={config.NASHost}
              />
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;
              <span style={this.styles} className="badge badge-primary m-2">
                NAS Path:{" "}
              </span>
              <input
                onChange={e => this.handleNASPathInput(e, index)}
                value={config.NASPath}
              />
            </div>
          </div>
        );
      });
    }

    return (
      <div key={this.props.id} class="border" >
        <label className="m-4">
          <span style={this.styles} className="badge badge-primary m-2">
            Services name :
          </span>
          <input
            type="text"
            text-align =  "right"
            name="ServiceName"
            value={this.state.serviceName}
            onChange={this.handleServiceNameChange}
          />
          {!this.props.isValid && this.state.serviceName == "" && (
            <font class="text-danger"> Please Enter Service Name</font>
          )}
          <div>
            <span style={this.styles} className="badge badge-primary m-2">
              Image name :
            </span>

            <input
              type="text"
              name="imageName"
              value={this.state.imageName}
              onChange={this.handleImageNameChange}
            />
            {!this.props.isValid && this.state.imageName == "" && (
              <font class="text-danger"> Please Enter Image Name</font>
            )}
          </div>

          <div>
              {}
         {/* <a href="https://docs.docker.com/compose/compose-file/#ports" target="_blank">what's this? </a> */}

            <BootstrapSwitchButton
              checked={false}
              onlabel="Traefik"
              onstyle="secondary"
              offlabel="Ingress"
              offstyle="success"
              style="w-50 mx-2"
              onChange={(checked: boolean) => {
                this.setState({ isIngress: checked });
              }}
            />

            {portNumberLabel}
      {portNumberInput}
            
            {/* <input
              type="text"
              name="portNumber"
              value={this.state.portNumber}
              onChange={this.handlePortNumberChange}
              placeholder="8080:8080"
            /> */}
          </div>
          <div>
            <span style={this.styles} className="badge badge-primary m-2">
              Health Check URL:
            </span>
            <input
              type="text"
              name="health"
              size="27"
              value={this.state.health}
              onChange={this.handleHealthChange}
              placeholder="http://localhost:8080/patient"
            />
          </div>
          <div class="column">
            <span style={this.styles} className="badge badge-primary m-2">
              No. of Replicas :
            </span>
            <input
              type="number"
              min="1"
              max="12"
              name="replica"
              value={this.state.replica}
              onChange={this.handleReplicaChange}
              onKeyDown={this.handleNumberInput}
            />
          </div>

          <div class="colset">
            <span style={this.styles}  text-align =  "right" className="badge badge-primary m-2">
              Memory(in megabytes) :
            </span>
            <input
              type="number"
              min="1"
              name="memory"
              value={this.state.memory}
              onChange={this.handleMemoryChange}
              onKeyDown={this.handleNumberInput}
            />
          </div>

          <div>
            <span style={this.styles} className="badge badge-primary m-2">
              Networks:
            </span >

            <a href="https://docs.docker.com/compose/compose-file/#networks" target="_blank" color= "black">what's this? </a>
            {/* <button onClick = {this.handleNetworkClick}>Plus</button> */}
            <button
              onClick={e => this.handleAddNetworkOne(e)}
              class="btn btn-outline-success"
             
            >
              {" "}
              Add Network
            </button>
            {/* {this.state.networkClick ? (<NetworkComponent></NetworkComponent>) :""} */}
            {this.state.networksOne.map((network, index) => {
              return (
                <div key={index}>
                  &nbsp;&nbsp;&nbsp;
                  <span style={this.styles} className="badge badge-primary m-2">
                    Network:{" "}
                  </span>
                  <input
                    onChange={e => this.handleNetworkOneInput(e, index)}
                    value={network}
                  />
                  &nbsp;&nbsp;
                  <button
                    onClick={() => this.handleRemoveNetworkOne(index)}
                    class="btn btn-outline-danger"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div>
            <span style={this.styles} className="badge badge-primary m-2">
              Secrets:
            </span>
            {/* <button onClick = {this.handleNetworkClick}>Plus</button> */}
            <button
              onClick={e => this.handleAddSecrets(e)}
              class="btn btn-outline-success"
            >
              {" "}
              Add Secrets
            </button>
            {/* {this.state.networkClick ? (<NetworkComponent></NetworkComponent>) :""} */}
            {this.state.secretsOne.map((secret, index) => {
              return (
                <div key={index}>
                  &nbsp;&nbsp;&nbsp;
                  <span style={this.styles} className="badge badge-primary m-2">
                    Secret:{" "}
                  </span>
                  <input
                    onChange={e => this.handleSecretNameInput(e, index)}
                    value={secret.secretName}
                  />
                  &nbsp;&nbsp;
                  <button
                    onClick={() => this.handleRemoveSecretOne(index)}
                    class="btn btn-outline-danger"
                  >
                    Remove
                  </button>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span
                      style={this.styles}
                      className="badge badge-primary m-2"
                    >
                      File Path:{" "}
                    </span>
                    ./&nbsp;
                    <input
                      onChange={e => this.handleSecretFileInput(e, index)}
                      value={secret.secretFile}
                    />
                  </div>
                </div>
                
              );
            })}
          </div>

          <div>
            <span style={this.styles} className="badge badge-primary m-2">
              Configs:
            </span>

            <button
              onClick={e => this.handleAddConfig(e)}
              class="btn btn-outline-success"
            >
              {" "}
              Add Config
            </button>

            {this.state.configs.map((config, index) => {
              return (
                <div key={index}>
                  &nbsp;
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span
                      style={this.styles}
                      className="badge badge-primary m-2"
                    >
                      Source:{" "}
                    </span>
                    <input
                      onChange={e => this.handleConfigSourceInput(e, index)}
                      value={config.source}
                    />
                    &nbsp;&nbsp;
                    <button
                      onClick={() => this.handleRemoveConfig(index)}
                      class="btn btn-outline-danger"
                    >
                      Remove
                    </button>
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span
                      style={this.styles}
                      className="badge badge-primary m-2"
                    >
                      Target:{" "}
                    </span>
                    <input
                      onChange={e => this.handleConfigTargetInput(e, index)}
                      value={config.target}
                    />
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span
                      style={this.styles}
                      className="badge badge-primary m-2"
                    >
                      Version:{" "}
                    </span>
                    <input
                      type="number"
                      min="1"
                      onKeyDown={this.handleNumberInput}
                      onChange={e => this.handleConfigVersionInput(e, index)}
                      value={config.version}
                    />
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span
                      style={this.styles}
                      className="badge badge-primary m-2"
                    >
                      File Path:{" "}
                    </span>
                    ./&nbsp;
                    <input
                      onChange={e => this.handleConfigFileInput(e, index)}
                      value={config.file}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <span style={this.styles} className="badge badge-primary m-2">
              Volumes:
            </span>
            <BootstrapSwitchButton
              checked={false}
              onlabel="NAS Volume"
              onstyle="secondary"
              offlabel="Local Volume"
              offstyle="success"
              style="w-50 mx-2"
              onChange={(checked: boolean) => {
                this.setState({ isVolumeNAS: checked });
              }}
            />
            {localVolAdd}
          </div>
          <div>{localVolAddRemoveButton}</div>

          <div>{NASVolAdd}</div>
          <div>{NASVolAddAll}</div>
        </label>
      </div>
    );
  }
}

export default Compose;
