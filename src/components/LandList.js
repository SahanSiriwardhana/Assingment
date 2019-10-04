import React, { Component } from 'react';
import axios from 'axios';
import { Container,Row } from 'reactstrap';
import {LandConsumer} from '../context';
import Land from './Land';
import jwt_decode from 'jwt-decode';
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';

const TypographyStyled = styled(Typography)`
 padding-top:30px;
 
`;
export default class LandList extends Component {
  

  componentDidMount(){
    if(localStorage.usertoken){
      const usertoken=localStorage.usertoken;
      const decode=jwt_decode(usertoken);
      console.log(decode);
    }
   
  }

  render() {
  
    return (
      <React.Fragment>
        <Container >
        <TypographyStyled variant="h3" component="h2" gutterBottom>
       Lands for Sale
       </TypographyStyled>
          <Row>
              <LandConsumer>
                {(data)=>{
                  return data.lands.map(land=>{
                    return <Land land={land} key={land.id} handleDetails={land.id}/>
                  });
                //  console.log(data.lands);
                }}
              </LandConsumer>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

