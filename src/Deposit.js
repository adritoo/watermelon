import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Deposit extends Component{
    constructor(props){
        super(props)
        this.state = { amountIn : 0,
                       amountOut : 0 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeBis = this.handleChangeBis.bind(this);
        this.handleWithdraw = this.handleWithdraw.bind(this);
    }

    handleChange(event){
        this.setState({amountIn: event.target.value});
    }
    handleChangeBis(event){
        this.setState({amountOut: event.target.value});
    }


    handleSubmit(){
        if(this.state.amountIn>0){ //envoyer une valeur positive
            if (!(localStorage.getItem('cards'))){
                alert('A pay in requires at least one valid registered card !');
            }else if ((localStorage.getItem('wallet'))&&(localStorage.getItem('cards'))){
                //nouvelle balance
                var pers = JSON.parse(localStorage.getItem("wallet"));
                var sum = parseInt(pers['balance']);
                var sumb = parseInt(this.state.amountIn);
                var res = sum + sumb;
                //mise à jour du crédit et ajout en mémoire
                delete pers['balance'];
                pers['balance'] = res;
                localStorage.setItem('wallet', JSON.stringify(pers));
            }
        }
        else{
            alert(' Sorry. This value is not supported');
        }
    }

    handleWithdraw(){
        if(this.state.amountOut>0){  //envoyer une valeur positive

            if (!(localStorage.getItem('cards'))){ //le compte doit posséder une carte valide
                alert('A pay in requires at least one valid registered card !');
            }else if ((localStorage.getItem('wallet'))&&(localStorage.getItem('cards'))){
                //nouvelle balance
                var persb = JSON.parse(localStorage.getItem("wallet"));
                var sumbb = parseInt(persb['balance']);
                var sumbbb = parseInt(this.state.amountOut);
                var resb = sumbb - sumbbb;
                if(parseInt(resb)>0){ //le nouveau crédit doit être positif
                    //mise à jour du crédit en mémoire
                    delete persb['balance'];  
                    persb['balance'] = resb;
                    localStorage.setItem('wallet', JSON.stringify(persb));
                }
                else{
                    alert('you need a positive balance');
                }
                
            }
        }
        else{
            alert(' Sorry. This value is not supported');
        }
    }

    render(){
        return(
            <Form>
                <FormGroup>
                    <Label for="amountIn">Payin :</Label>
                    <Input
                    type="number"
                    value={this.state.amountIn} onChange={this.handleChange}
                    name="amount"
                    id="amountIn"
                    />
                    <Input 
                    type="submit" 
                    onClick={this.handleSubmit}
                    value="Envoyer" />

                    <Label for="amountOut">Withdraw :</Label>
                    <Input
                    type="number"
                    value={this.state.amountOut} onChange={this.handleChangeBis}
                    name="amount2"
                    id="amountOut"
                    />
                    <Input 
                    type="submit" 
                    onClick={this.handleWithdraw}
                    value="Envoyer" />
                </FormGroup>
            </Form>  
        );
    }
}

export default Deposit;