import React, { Component } from 'react'
import { Card,  CardBody,
    CardTitle, Form, FormGroup, Row, Input, Col } from 'reactstrap';
import styled from "styled-components";

export default class BidAdd extends Component {
    render() {
        return (
            <div>
                  <br/>
                <Card>
                    <CardBody>
                        <CardTitle><h4>Add Your Bid</h4></CardTitle>
                            <Form inline>
                                <Row>
                                    <Col sm={8}>
                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    
                                        <Input type="text" name="bid" id="bid" placeholder="Your Bid" />
                                        </FormGroup>
                                    </Col>
                                    <Col sm={8}>
                                        <Button>Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const Button = styled.button`
  font-size: 1em;

  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;
