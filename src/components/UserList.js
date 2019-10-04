import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'reactstrap';
import TableRows from './TableRow'
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TypographyStyled = styled(Typography)`
 padding-top:30px;
 
`;

const classes = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

export default class UserList extends Component {
  constructor(props){
    super(props);
    this.state={users:[]};
  }
  componentDidMount(){
    axios.get('http://localhost:8080/users')
    .then(response=>{
      this.setState({users:response.data});
    })
    .catch(function(error){
      console.log(error);

    })
  }
  tabRow(){
    return this.state.users.map(function(object,i){
        return <TableRows obj={object} key={i} object={i}/>;
    });
  }


  render() {
   
    return (
      <div>
      
        <Container>
        <TypographyStyled variant="h3" component="h2" gutterBottom>
        All Users
       </TypographyStyled>
        {/* <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          
        </thead>
        <tbody>
            {this.tabRow()}
          </tbody>
        </Table> */}
         <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>No </TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Action</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
          {this.tabRow()}
          </TableBody>
        </Table>
      </Paper>
    </div>
        </Container>
      </div>
    )
  }
}