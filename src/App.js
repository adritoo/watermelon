import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register.js';
import Login from './Login.js';
import Home from './Home.js';
import { Button } from 'reactstrap';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';


class App extends Component {

  	render (){
		return(
			<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>WATERMELON</p>
				<BrowserRouter>
					<div>
						<Button color="warning"><Link to="/login">CONNEXION</Link></Button>
						<Button color="warning"><Link to="/register">INSCRIPTION</Link></Button>
						<Button color="warning"><Link to="/home">Home</Link></Button>
					</div>  
					<Switch>
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/home" component={Home}/>
					</Switch>
				</BrowserRouter>
			</header>
			</div>
		);
    }
}

export default App;
