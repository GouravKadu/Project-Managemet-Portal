import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
const api='https://localhost:7223/api/';
export default class Login extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           Email:'',
           Password:''
        }
        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
      
    }

      Email(e){
        this.setState({Email: e.target.value});
     } 
     Password(e){
        this.setState({Password: e.target.value});
     }
    login(e){
        fetch(api+'/user/Login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response)=> Response.json())
        .then((res)=> {
            if(res.status === 200 ){
                this.props.history.push(`/Login`);
            }else{
                alert('User Not Found')
            }
        })
    }
  
    render() {
    
    return (
        <div>
        <div className='Image'></div>
        <div className='Container'>

        <form >

        <input type="email" name="email" value={this.state.Email} placeholder='Email Id' onChange={this.Email}/> <br/>
        <input type="password" name="password" value={this.state.Password} placeholder='Password' onChange={this.Password}/><br/>
        <a href='#'>Forgot Passsword?</a>
        <br/>

        <button onClick={this.login} >LOGIN</button><br/>

        <label >Don't have an account?</label>

        <br/>

        {/* <button>Create Account</button> */}

     

        </form>

        </div>

      </div>
          )

  }
}
