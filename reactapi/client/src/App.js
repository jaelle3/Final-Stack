import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Signin from './components/Signin';
import Home from './components/Home';
import Questions from './components/Questions';
import Navbar from './components/Navbar';

//React Router to redirect to different pages
import { BrowserRouter as Router, Route, Switch}
    from "react-router-dom";

class App extends React.Component{ 

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}
//We inserted the method callAPI() that will fetch the data from the API and store the response on this.state.apiResponse.
callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}
//We inserted a react lifecycle method called componentDidMount(), that will execute the callAPI() method after the component mounts.
componentDidMount() {
    this.callAPI();
}

render(){
  return (
       
      <Router>
     <Navbar/>
        <Switch>
          <div className = "App">
          <Route path ="/signin" component ={Signin}/>
          <Route path ="/" component = {Home}/>
          <Route path = "/questions" component = {Questions}/>
          <Route path = "/navbar" component = {Navbar}/>
          <p className="App-intro">;{this.state.apiResponse}</p>

          
          </div>

        </Switch>
        
      </Router>
    

  );
}
}

  

export default App;
