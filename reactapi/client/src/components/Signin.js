 import React, { Component } from 'react';


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName : "",
            lastName:"",
            password:""
         }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submit')
    }
    
    render() { 
        return (  
            <div className = "container">
                <form onSubmit = {this.handleSubmit}>
                    <h1>Sign In</h1>
                        <br/>
                        <input type = "text" name = "firstName" required placeholder = "First Name"/>
                        <br/>
                        <input type ="text" name = "lastName" required placeholder = "Last Name"/>
                        <br/>
                        <input type ="password" name ="password" required placeholder = "Password"/>  
                        <br/> 
                        <button type = "submit">Submit</button>   
                        <br/> 
                        <br/>
                        <br/>
                        <img src = "login.jpg" width = "100" alt="login"/>          
                </form>
                <form onSubmit = {this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <br/>
                    <input type = "text" name ="signUpFirstName" placeholder = "First Name"/>
                    <br/>
                    <input type ="text" name = "signUpLastName" placeholder = "Last Name"/>
                    <br/>
                    <input type = "password" name = "signUpPassword1" placeholder= "Password"/>
                    <br/>
                    <input type = "password" name = "signUpPassword2" placeholder="Re-type Password"/>
                    <br/>
                    <button type ="submit">Submit</button>
                    <br/>
                    <br/>
                    <img src = "qn.jpg" alt = "answer" width = "200"/>
                </form>
            </div>
        );
    }
}
 
export default Signin;