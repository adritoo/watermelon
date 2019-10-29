import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
var jsondata = require('./backend/data.json');

class Transfert extends Component{
    constructor(props){
        super(props); 
        this.state = { 
          countTransfert : 4,
          amountSent : 0,
          receivId : 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeI = this.handleChangeI.bind(this);
        this.handleChangeA = this.handleChangeA.bind(this);
    }

    handleSubmit(){
        //ID de l'envoyeur :
        var pers = JSON.parse(localStorage.getItem('perso'));
        var persId = parseInt(pers['id']);

        //Balance de l'envoyeur :
        var curWallet = JSON.parse(localStorage.getItem("wallet"));
        var curBalance = parseInt(curWallet["balance"]);

        //Nouvelle balance
        var newBalance = (curBalance-this.state.amountSent);

        if(newBalance>0){  //La nouvelle balance doit etre positive 
            //créer l'objet transfert correspondant
            var transfert = JSON.stringify(
				{id : this.state.countTransfert,
                debited_wallet_id: persId,
                credited_wallet_id: this.state.receivId,
                amount: this.state.amountSent}
            );

            //affecter chgt balance en mémoire
            delete curWallet['balance'];
            curWallet['balance'] = newBalance;
            localStorage.setItem('wallet', JSON.stringify(curWallet));

            //ajouter le transfert à la liste :
            let transf = jsondata['transferts'];
            var transfArray = [];
            for(var l=0; l <transf.length; l++){
				var ctotest = transf[l]["debited_wallet_id"];
				var walletID = curWallet['id'];
				if (parseInt(ctotest)===parseInt(walletID)){
					transfArray.push(JSON.stringify(transf[l]));
				}
            }
            //ajouter le transfert actuel
            transfArray.push(transfert);

            //ajouter liste des transferts en mémoire
        	localStorage.setItem('transferts', transfArray);

            //change ID pour prochain transfert
            var count = this.state.countTransfert +1;
            this.setState({countTransfert : count});
        }
        else{
            alert("you don't have enough money");
        }
    }

    handleChangeI(event){
        this.setState({receivId: event.target.value});
    }
    handleChangeA(event){
      this.setState({amountSent: event.target.value});
	}
	
    render(){
        return(
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="receivers' ID" className="mr-sm-2">Receiver ID : </Label>
					<Input 
						type="number" 
                        value={this.state.receivId} onChange={this.handleChangeI} 
                        name="receivId" 
                        id="receivId" 
					/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="amount" className="mr-sm-2">Amount to send : </Label>
					<Input 
						type="number" 
                        value={this.state.amountSent} onChange={this.handleChangeA} 
                        name="Amount" 
                        id="amount" 
					/>
                    <Input 
                    	type="submit" 
                    	onClick={this.handleSubmit}
                    	value="Envoyer" 
					/>
                </FormGroup>  
            </Form>
        );
    }
}
export default Transfert;