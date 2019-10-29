import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Deposit from'./Deposit.js';
import Balance from './Balance.js';
import Transfert from './Transfert.js';
import Cards from './Cards.js';
import Manage from './Manage.js'


class Home extends Component {

  
  	render (){
      	return(
  
			<BrowserRouter>
				<div>Current  balance :</div>
				<Balance></Balance>
				<div>
					<Button><Link to="/Deposit">Manage my wallet</Link></Button>
					<Button><Link to="/Transfert">Pay someone</Link></Button>
					<Button><Link to="/Cards">Add Cards</Link></Button>
					<Button><Link to="/Manage">My Cards</Link></Button>
				</div>
				
				<Switch>
					<Route exact path="/Deposit" component={Deposit} />
					<Route exact path="/Transfert" component={Transfert} />
					<Route exact path="/Cards" component={Cards} />
					<Route exact path="/Manage" component={Manage} />
				</Switch>
			</BrowserRouter>
      	);
	}
}

export default Home;
