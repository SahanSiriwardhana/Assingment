import React, { Component } from 'react'
import { 
    Container,
    Row,
    Col
 } from 'reactstrap'
export default class PropertyDetails extends Component {
    render() {
        return (
            <Container>
                <Row>
                <Col md="8">.col-3</Col>
                <Col md="8">.col-3</Col>
                </Row>
                <Row>
                <Col md="8">.col-3</Col>
                </Row>
            </Container>
        )
    }
}
