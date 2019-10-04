import React, { Component } from 'react'
import {LandConsumer} from '../../context'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container, Row, Col } from 'reactstrap';
import styled from "styled-components";
import axios from 'axios'
import BidInfo from './BidInfo'
import BidAdd from './BidAdd'

export default class Detail extends Component {

    constructor(props){
        super(props);
        this.state={
            user:[],
        }

    }

    componentDidMount(){
    let id=this.props.location.pathname.split("/");
    axios.get('http://localhost:8080/lands/'.concat(id[2]))
    .then(response=>{
      this.setState({user:response.data});
    })
    .catch(function(error){
      console.log(error);
    })
      
    }


    render() {
     
      const {_id,title,size,price,description,landImage}=this.state.user;
        return (
         <Container style={{ padding: '.5rem' }}>
                        <Row>
                            <Col md="8">
                                <Card>
                                  <CardBody>
                                    <CardTitle><h1>{title}</h1></CardTitle>
                                    <CardImg top width="100%" src={"http://localhost:8080/"+landImage} alt={landImage} /> 
                                    <br/>
                                    <CardSubtitle className="text-primary"><br/> Price(Rs) :{price}.00</CardSubtitle>
                                    <CardText><h4>Description :</h4>{description}</CardText>
                                  </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <BidInfo/>
                                <BidAdd/>
                            </Col>
                        </Row>
                        
                    </Container>
                
               
               
         
        )
    }
}
