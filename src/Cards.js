import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Cards extends Component{

    constructor(props){
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
		//creér un nouvel utilisateur
        var card = JSON.stringify({
            id : 4, 
            brand : document.getElementById("brand").value, 
            first_name : document.getElementById("name").value, 
            last_name : document.getElementById("lastname").value, 
            four_digit : document.getElementById("digit").value, 
            ccv : document.getElementById("ccv").value, 
            exp_date: document.getElementById("Datetime").value});
        localStorage.setItem('newCard', card ); //stockage mémoire des comptes non connectés
        event.preventDefault();
    }

    render(){
            return(
                <Form>
                    <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleName">Card's Brand</Label>
                            <Input type="brand" name="brand" id="brand" placeholder="Brand" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleName">First Name</Label>
                            <Input type="name" name="name" id="name" placeholder="Your first name" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleLastName">Last Name</Label>
                            <Input type="lastname" name="lastname" id="lastname" placeholder="Your last name" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Last 4 digits</Label>
                            <Input type="four_digit" name="four_digit" id="digit" placeholder="Last 4 digits" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">CCV</Label>
                            <Input type="password" name="ccv" id="ccv" placeholder="CCV" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleDate">Date</Label>
                            <Input type="date"  name="date" id="Datetime" placeholder="Expiration date"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Button onClick={this.handleSubmit}>Add Card</Button>
                </Form>
            );
    }
}
export default Cards;