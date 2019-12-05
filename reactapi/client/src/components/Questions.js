import React, { Component } from 'react';

class Questions extends Component {
    
handleSubmit = (event) => {
    event.preventDefault();
    console.log("Answer submitted");
}

    render() { 
        return ( 
            <div className = "container">
                <form onSubmit ={this.handleSubmit}>
                <h2>Ask a Question</h2>
                <input type = "text" placeholder="Ask A Question"/>
                    <br/>
                    <button type ="submit">Submit</button>
                    <br/>
                   </form>                  
            </div>
         );
    }
}
 
export default Questions;