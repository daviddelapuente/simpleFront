import React, { Component } from 'react';
import { nameValidator } from '../helpers.js/nameValidator';
import { emailValidator } from '../helpers.js/emailValidator';
import axios from 'axios'

export default class NewLink extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '',email:'',errormsg:'',linkExist:false,link:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
          [name]: value
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        let username=this.state.username;
        let email=this.state.email;

        //check all inputs are ok
        let nameError=nameValidator(username);
        let emailError=emailValidator(email);

        if (nameError) {
            this.setState({
                'errormsg': nameError
              });
            return
        }else if(emailError){
            this.setState({
                'errormsg': emailError
            });
            return
        }

        axios.post('http://localhost:3001/generateLink', { "username":username,"email":email})
        .then(({ data }) => {
          if(data.status===1){
              console.log("yei");
              this.setState({
                'errormsg': "",
                'linkExist':true,
                'link':"http://localhost:3000/Signup/"+data.link,
               });


          }else{
            this.setState({
                'errormsg': data.msg
            });
          }
        })
        .catch((error) =>  console.log("error de conexion"));


        
    }

  render() {
    return (
        <div className="logLayout">
            <div className="formBorder">
                <form>
                    <h3>Generar link</h3>

                    <div className="form-group ptop">
                        <label>Nombre completo</label>
                        <input name="username" type="text" className="form-control" value={this.state.username} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group ptop">
                        <label>Correo electronico</label>
                        <input name="email" type="email" className="form-control" value={this.state.email} onChange={this.handleChange}/>
                    </div>

                </form>
                <p style={{color:"red"}}>{this.state.errormsg}</p>
                
                {this.state.linkExist ? (<a href={this.state.link}>{this.state.link}</a>):(null)}

                <div className="ptop">
                    <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>crear link</button>
                </div>
            </div>
        </div>
    );
  }
}