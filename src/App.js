import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      fname:"",
      lname:"",
      email:"",
      password:"",
      cpassword:""
      
    }
  }
  handlefname=(a)=>{
    this.setState({
      fname:a.target.value
    })

  } 
  handlelname=(a)=>{
    this.setState({
      lname:a.target.value
    })

  } 
  handleemail=(a)=>{
    this.setState({
      email:a.target.value
    })

  }             
  handlepassword=(a)=>{
    this.setState({
      password:a.target.value
    })

  }    
  handlecpassword=(a)=>{
    this.setState({
      cpassword:a.target.value
    })

  }  
  handlesubmit=()=>{
    if(this.state.fname.length<5){
      alert("character should be > 5")
    }
    else if(this.state.password !== this.state .cpassword){
      alert("password does not match..!")
    }
    else{
      alert("form succefully submited")
    }

  }                        

  render(){
    return(
      <div>
        <h2>form validation</h2>
        <form onSubmit={this.handlesubmit}>
        <label>First Name:</label>
      <input  value={this.state.fname} required type="text"placeholder="Enter Your First Name" onChange={ this.handlefname}></input><br></br><br></br>
      <label>Last Name:</label>
      <input  value={ this.state.lname} required type="text"placeholder="Enter Your Last Name" onChange={ this.handlelname}></input>
      <br></br>
      <br></br>
      <label>Email:</label>
      <input value={ this.state.email} required type="email" placeholder=" Enter your Email" onChange={ this.handleemail}></input>
      <br></br>
      <br></br>
      <label>Password:</label>
      <input  value={ this.state.password} required type="password" placeholder="Enter your Password" onChange={ this.handlepassword}></input>
      <br></br>
      <br></br>
      <label> Confirm Password:</label>
      <input  value={ this.state.cpassword} required type=" password" placeholder="Enter your Confirm" onChange={ this.handlecpassword}></input>
      <br></br>
      <br></br>
      <input type="submit" value="Register"/>
      </form>
      </div>
    )
  }
}
export default App;
