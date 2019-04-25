import React from 'react';
import './App.css';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    }
    this.onUserName = this.onUserName.bind(this);
    this.onUserPassword = this.onUserPassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onUserName(event) {
    this.setState({ userName: event.target.value });
    console.log(this.state.userName);
  }

  onUserPassword(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }

  formSubmit(event) {
    //alert( this.state.userName);
    alert(`Welcome ${this.state.userName}`);
    console.log(this.state.userName);
    //event.preventDefault();
  }

  render() {
    return (
      <div className="mainDiv">

        <div className="logo-div">
          <img id="logo-img-id" src="http://www.sangdatared.com/rd/images/logo_cisco-grande.svg?crc=128874106" alt="Logo"></img>
        </div>

        <div className="formDiv">
          <form onSubmit={this.formSubmit}>

            <div className="inputDiv">
              <label>
                Name: <input type="text" placeholder="Name here" value={this.state.userName} onChange={this.onUserName}></input>
              </label>

              <label className="passwordLabel">
                Password: <input type="password" placeholder="Password here" value={this.state.password} onChange={this.onUserPassword}></input>
              </label>
            </div>
            <div className="J">
              <input type="submit" value="submit"></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default Login;


