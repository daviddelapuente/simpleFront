import React, { Component } from 'react';
import { nameValidator } from '../helpers.js/nameValidator';
import { emailValidator } from '../helpers.js/emailValidator';
import axios from 'axios'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '',email:'',sex:'0',errormsg:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.link="";
        this.isRefered=false;
        if(window.location.href.split("/").length===5){
            this.link=window.location.href.split("/")[4];
            this.isRefered=true;
        }
        
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
        let sex=this.state.sex;
        let link=this.link;

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

        let url='';
        let sentData={};

        if(this.isRefered){
            url='http://localhost:3001/usersRefered';
            sentData={ "username":username,"email":email,"sex":sex,link:link}
        }else{
            url='http://localhost:3001/users';
            sentData={ "username":username,"email":email,"sex":sex};
        }

        axios.post(url, sentData)
        .then(({ data }) => {
            if(data.status===1){
                window.location.href="/NewUserSuccesfull"        
            }else{
                this.setState({
                    'errormsg': data.msg
                });
                return
            }
             
        })
        .catch((error) =>  console.log("error de conexion"));   
        
    }
    


  render() {
    return (
        <div className="logLayout">
            
            <div className="formBorder">
                <form>
                    {(this.isRefered ? (<h3>Registrate y gana $5000</h3>):(<h3>Registrar usuario</h3>))}
                    

                    <div className="form-group">
                        <label>Nombre completo</label>
                        <input name="username" type="text" className="form-control" value={this.state.username} onChange={this.handleChange}  />
                    </div>

                    <div className="form-group perfilPad ptop">
                        <label>Correo electronico</label>
                        <input name="email" type="email" className="form-control"  value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="form-group perfilPad ptop">
                        <label>Sexo</label>
                        <select name="sex" className="form-select" aria-label="Default select example" value={this.state.sex} onChange={this.handleChange}>
                            <option value="0" >Hombre</option>
                            <option value="1">Mujer</option>
                        </select>

                    </div>
                </form>
                <p style={{color:"red"}}>{this.state.errormsg}</p>
                <div className="perfilPad ">
                    <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Registrar</button>
                </div>
            </div>
        </div>
    );
  }
}