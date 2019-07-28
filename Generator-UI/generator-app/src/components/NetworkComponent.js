import React, { Component } from "react";

class NetworkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: [],
      size: 0
    };
    this.handleNetworkName = this.handleNetworkName.bind(this)
  }
  handleNetworkName(event) {
      console.log("event  called")
    var networkArray = [];
    networkArray.push({network1:  event.target.value})
    console.log("network : "+ networkArray[0].network1 )
    console.log("network size : "+ networkArray.length )
   
    this.setState({network: networkArray})
    console.log("servie name: " + this.state.serviceName)
  }


//   renderNetworkComponent() {
//       console.log("called renderNetworkComponent ")
//     return (
//       <div>{this.state.network.length != 0 ?
//         (
           
//         <div><span style={this.styles} className="badge badge-primary m-2">
//           Network 1 :
//         </span>
         
//         <input type="text" name="network1" value={this.state.network[0].network1} onChange={this.handleNetworkName}  /> </div>)
//         : ""}
//       </div>
//     );
//     // return(<div></div>);
//   }
renderNetworkComponent(networkObj) {
    console.log("called renderNetworkComponent " + networkObj.network1)
  return (
    <li>
    {/* {this.state.network.length != 0 ? */}
   { networkObj != undefined || networkObj != null ?
      (
         
      <div>
        Network 1 :
     
       
      <input type="text" name="network1" value={networkObj.network1}  /> </div>)
      : ""}
    </li>
  );
  // return(<div></div>);
}

  render() {
    this.state.size = this.state.size + 1;
    console.log(" networkrender called")
    return (
      <div>
         <ul>{this.state.network.map(this.renderNetworkComponent)}</ul> 
        {/* {this.renderNetworkComponent()} */}
        <div>
          <span style={this.styles} className="badge badge-primary m-2">
            Network 1 :
          </span>
          <input type="text" name="network1" onChange={this.handleNetworkName}/>
        </div>
      </div>
    );
  }
}

export default NetworkComponent;
