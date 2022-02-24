import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, Divider, Grid, CardContent, } from '@material-ui/core';
import './index.css';
import { gridSpacing } from '../../../../store/constant';

import profile from '../../../../assets/images/users/dummy3.png';
//import profile1 from '../../../../assets/images/users/Rectangle_1.png';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 350,
    },
    imgproduct: {
        width: '20px',
        height: 'auto',
    },
});

function createData(userid,name,email,profile,gender,dob,mobileno) {
    return { userid,name,email,profile,gender,dob,mobileno};
}

const rows = [
    createData('Kuramavel', 'Ravi Kumar', 'ravikumar.s@gmail.com', 'profile', 'male', '17-10-1999','9876543210'),
    createData('Social Activist', 'Balaji Kumar ', 'balajikumar254@gmail.com', 'profile', 'male', '17-10-1999','9876543210'),
    createData('Kuramavel', 'Ravi Kumar', 'ravikumar.s@gmail.com', 'profile', 'male', '17-10-1999','9876543210'),
    createData('Social Activist', 'Balaji Kumar ', 'balajikumar254@gmail.com', 'profile', 'male', '17-10-1999','9876543210'),
    createData('Kuramavel', 'Ravi Kumar', 'ravikumar.s@gmail.com', 'profile', 'male', '17-10-1999','9876543210'),
    createData('Social Activist', 'Balaji Kumar ', 'balajikumar254@gmail.com', 'profile', 'male', '17-10-1999','9876543210'),
];

export default function LatestorderCard() {
    const classes = useStyles();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Card>
                    <Divider />
                    <CardContent className="p-0">
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>User Id</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>E-mail</TableCell>
                                        <TableCell>Profile Photo</TableCell>
                                        <TableCell>Gender</TableCell>
                                        <TableCell>D.O.B</TableCell>
                                        <TableCell> Mobile No.</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell> {row.userid} </TableCell>
                                            <TableCell> {row.name} </TableCell>
                                            <TableCell> {row.email} </TableCell>
                                            <TableCell>
                                            <img src={profile} alt="profile" style={{height:'50px', width:'50px'}}/>  
                                            </TableCell>
                                            <TableCell>{row.gender}</TableCell>
                                            <TableCell>{row.dob}</TableCell>
                                            <TableCell>{row.mobileno}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                    {/* <CardActions className="f-right">
                    <div class="pagination">
  <a href="/" >&laquo;</a>
  <a href="/" >1</a>
  <a href="/">2</a>
  <a href="/">3</a>
  <a href="/">4</a>
  <a href="/">5</a>
  <a href="/">6</a>
  <a href="/">&raquo;
  </a>
  </div>
                    </CardActions> */}
                </Card>
            </Grid>
        </Grid>
    );
}
