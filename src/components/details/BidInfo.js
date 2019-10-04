import React, { Component } from 'react'
import { Card,  CardBody,
    CardTitle ,Table} from 'reactstrap';
export default class BidInfo extends Component {
    render() {
        return (
            <div>
              
                <Card>
                    <CardBody>
                        <CardTitle><h4>Bids Information</h4></CardTitle>
                
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                   
                    </tbody>
                </Table>
                </CardBody>
                </Card>
            </div>
        )
    }
}
