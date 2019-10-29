import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
var jsondata = require('./backend/data.json');

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
          mel: '',
          pwd: ''};
        this.handleChangeM = this.handleChangeM.bind(this);
        this.handleChangeP = this.handleChangeP.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
		return(
			<Form inline>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="exampleEmail" className="mr-sm-2">Email</Label>
					<Input type="email" value={this.state.mel} onChange={this.handleChangeM} name="email" id="exampleEmail" placeholder="something@very.cool" />
				</FormGroup>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="examplePassword" className="mr-sm-2">Password</Label>
					<Input type="password" value={this.state.pwd} onChange={this.handleChangeP} name="password" id="examplePassword" placeholder="Password" />
				</FormGroup>
				<Button onClick={this.handleSubmit}>Submit</Button>
			</Form>
		);
    }

    handleChangeM(event){
      this.setState({mel: event.target.value});
    }
    handleChangeP(event){
      this.setState({pwd: event.target.value});
    }

    handleSubmit(event){
		//charger les données en mémoire
		let wallets = jsondata['wallets'];
		let cards = jsondata['cards'];
		
		if(this.state.mel === 0){
			alert('Error');
		}
		else if(this.okConnect(this.state.mel, this.state.pwd)){  //si on trouve on compte correspondant
			
			alert(this.state.mel + ' Succesfully connected !');

			if(localStorage.getItem('perso')){
				var pers = JSON.parse(localStorage.getItem('perso'));
				var id = pers['id'];

				///charger WALLET du compte en mémoire
				for(var k=0; k <wallets.length; k++){
					var toTest = wallets[k]['id'];
					if (parseInt(toTest)===parseInt(id)){
						localStorage.setItem('wallet', JSON.stringify(wallets[k]));
					}
				}
				///si pas de wallet : le créer
				if (!(localStorage.getItem('wallet'))){
					var wallet = JSON.stringify({id : 4,
												user_id : 4,
												balance : 0});
					localStorage.setItem('wallet', wallet);
				}

				///charger CARDS du compte en mémoire
				var cardsArray = [];
				for(var l=0; l <cards.length; l++){
					var cToTest = cards[l]["user_id"];
					if (parseInt(cToTest)===parseInt(id)){
						cardsArray.push(JSON.stringify(cards[l]));
					}
				}
				if(cardsArray.length>0){
					localStorage.setItem('cards', cardsArray);
				}else{
					alert('You have no card in this account');
				}

			}
		}
		else{
			alert("Error");
		}
		event.preventDefault();
    }

    okConnect(value, valueb){
		let accounts = jsondata['users'];
		let found = false;

		if(localStorage.getItem("newPerso")){  ///cas ou un compte a été créé manuellement
			var newPers = JSON.parse(localStorage.getItem("newPerso"));
			let newMail = newPers['email']; 
			let newPwd = newPers['password'];
			if(newMail === value){ //test email
				if(newPwd === valueb){ //test mdp
					found = true ;
					localStorage.clear();
					localStorage.setItem('perso', JSON.stringify(newPers)); //affecter la nouveau compte au 
				}															 //compte actuellement connecté
				else{
					alert('wrong password');
				}
			}
		}else {  //sinon éssayer les comptes en mémoire
			for(var j=0; j <accounts.length; j++){ //parcourir les accounts en mémoire
				if (accounts[j]['email'] === value){ 
					if(accounts[j]['password'] === valueb){
						found=true
						localStorage.clear();
						localStorage.setItem('perso', JSON.stringify(accounts[j]));
					}
					else{
						alert('wrong password');
					}
				}
			}
		}
		return found;
    }
}

export default Login;