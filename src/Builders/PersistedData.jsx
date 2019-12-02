import React, { Component } from "react";

class Forms extends Component {
  state = {
    fValue: "",
    lValue: "",
    SEX:""
  };
  // constructor (props) {
  //     super(props)
  //     this.state = {
  //         fValue:""
  //      }
  // }

  savetoLocalStorage = state => {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem("state", serializedState);
    } catch (e) {
      console.log(e);
    }
  };

  loadFromLocalStorage = () => {
    try {
      const serializedState = sessionStorage.getItem("state");
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  };

  handleUserNameChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.savetoLocalStorage(this.state);
      }
    );
  };

  componentWillMount = () => {
    this.setState(this.loadFromLocalStorage());
  };

  //const persistedState = loadFromLocalStorage()
  render() {
    return (
      <React.Fragment>


        <div className="container">
          <div className="row">
            <div className="col-12">
              <form>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">First Name</label>
                  <input
                    type="text"
                    value={this.state.fValue}
                    name="fValue"
                    onChange={this.handleUserNameChange}
                  />

                  <label className="col-sm-2 col-form-label">Last Name</label>
                  <input
                    type="text"
                    value={this.state.lValue}
                    name="lValue"
                    onChange={this.handleUserNameChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="SEX"
                  id="exampleRadios1"
                  value="MALE"
                  checked={this.state.SEX=="MALE"}
                  onChange={this.handleUserNameChange}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="SEX"
                  id="exampleRadios2"
                  value="FEMALE"
                  checked={this.state.SEX=="FEMALE"}
                  onChange={this.handleUserNameChange}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>


      </React.Fragment>
    );
  }
}

export default Forms;
