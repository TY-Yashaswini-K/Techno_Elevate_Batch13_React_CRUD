import axios from "axios";
import React, { Component } from "react";

export default class Register extends Component {
    state = {
        user:"",
        email:"",
        phn:"",
        regno:"",
        pwd:"",
        addr:""
    }

    handleChange =(event)=>{
        this.setState({
            [event.target.name ]: event.target.value
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);

        const url = "https://reactasscrud-default-rtdb.firebaseio.com/accounts.json"
        const data = {...this.state}
      
        axios.post(url , data ).then((resp)=>{
            console.log(resp);
            if (resp.status === 200) {
                alert("Data Stored Successfully")
                this.setState({
                    user:"",
                    email:"",
                    phn:"",
                    regno:"",
                    pwd:"",
                    addr:""
                })

                this.props.history.push("/details")
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

  render() {
    return (
      <div className="container card col-md-10">
        <h1 style={{textAlign:"center"}}>Student Registration Form</h1>
        <form className="container card-body" onSubmit={this.handleSubmit}>
        <div className="form-group ">
            <label htmlFor="user">Student Name</label>
            <input
              type="text"
              className="form-control"
              id="user"
              aria-describedby="emailHelp"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scn">Register Number</label>
            <input
              type="text"
              className="form-control"
              id="scn"
              aria-describedby="emailHelp"
              name="regno"
              value={this.state.regno}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email ID</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phn">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="phn"
              aria-describedby="emailHelp"
              name="phn"
              value={this.state.phn}
              onChange={this.handleChange}
            />
          </div>
         
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="pwd"
              value={this.state.pwd}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="addr">Address</label>
            <input
              type="text"
              className="form-control"
              id="addr"
              aria-describedby="emailHelp"
              name="addr"
              value={this.state.addr}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
