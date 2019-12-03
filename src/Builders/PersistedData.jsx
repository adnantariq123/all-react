import React, { Component } from "react";
import { connect } from 'react-redux';


const mapping = xyz => ({ 
  fValue: xyz.DataPersist.fValue ,
  lValue: xyz.DataPersist.lValue,
  SEX: xyz.DataPersist.SEX,
});

const dispatching =(actions) => {

}

class Forms extends Component {
  // state = {
  //   fValue: "",
  //   lValue: "",
  //   SEX: "",
  //   OPTIONS:[]
  // };
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

  // is going to be a UNIVERSAL grabb, will require more logic
  handleUserNameChange = event => {

    // if(event.target.name ==="OPTIONS" && !this.state.OPTIONS.includes(event.target.value) === true) {
    //     console.log("Came to options")

    //     this.setState(
    //       {
    //         [event.target.name]: [... this.state.OPTIONS ,event.target.value]
    //       },
    //       () => {
    //         this.savetoLocalStorage(this.state);
    //       }
    //     );        
    // }
    // else {
      this.setState(
        {
          [event.target.name]: event.target.value
        },
        () => {
          this.savetoLocalStorage(this.state);
        }
      );
    // }


  };

  //componentWillMount would throw a warning(not an error)
  UNSAFE_componentWillMount = () => {
    this.setState(this.loadFromLocalStorage());
  };

  //const persistedState = loadFromLocalStorage()
  render() {
    return (
      <React.Fragment>
        <form>


          <div className="container">
            <div className="form-row">

              <div className="form-group col-md-6">
                <label className="col-form-label">First Name</label>
                <input
                  type="text"
                  value={this.props.fValue}
                  name="fValue"
                  onChange={this.handleUserNameChange}
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group col-md-6">
                <label className="col-form-label">Last Name</label>
                <input
                  type="text"
                  value={this.props.lValue}
                  name="lValue"
                  onChange={this.handleUserNameChange}
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
          


          {/* GRAB THE USER SEX MALE/FEMALE - BOOLEAN */}
          <div className="form-row">
              <div className="form-group col-md-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="SEX"
                    id="exampleRadios1"
                    value="MALE"
                    checked={this.props.SEX === "MALE"}
                    onChange={this.handleUserNameChange}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Male
                  </label>
                </div>


                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="SEX"
                    id="exampleRadios2"
                    value="FEMALE"
                    checked={this.props.SEX === "FEMALE"}
                    onChange={this.handleUserNameChange}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    Female
                  </label>
                </div>

                </div>


                {/* Grab multiple options to select from!  - NOT a boolean, but will need to be an array 
                <div className="form-group col-md-8">

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="OPTIONS"
                    id="checkbox1"
                    value="ONE"
                    //checked={this.state.OPTIONS === "ONE"}
                    //onChange={this.handleUserNameChange} did not work :(
                  />
                  <label className="form-check-label" htmlFor="checkbox1">
                    Option 1
                  </label>
                </div>


                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="OPTIONS"
                    id="checkbox2"
                    value="TWO"
                    //checked={this.state.OPTIONS === "TWO"}
                    //onChange={this.handleUserNameChange} did not work :(
                  />
                  <label className="form-check-label" htmlFor="checkbox2">
                    Option 2
                  </label>
                </div>

                </div>*/}








            </div>



          </div>  {/*  one containr to rule them ALL */}
        </form>
      </React.Fragment>
    );
  }
}

//export default connect(mapping, dispatching)(TechSithStateCounter);

export default connect(mapping, dispatching)(Forms);

