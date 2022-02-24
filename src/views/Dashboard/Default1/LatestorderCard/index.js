import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, Divider, Grid, CardContent } from '@material-ui/core';
import './index.css';
import { gridSpacing } from '../../../../store/constant';
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

function createData(postid, posturl, comments, likes, share, view, button) {
    return { postid, posturl, comments, likes, share, view, button };
}

const rows = [
    createData('https://platform.linkedin.com/in.js', '978536475', '35', '546', '10', '898'),
    createData('https://platform.linkedin.com/in.js', '978536475', '36', '546', '10', '898'),
    createData('https://platform.linkedin.com/in.js', '978536475', '37', '546', '10', '898'),
    createData('https://platform.linkedin.com/in.js', '978536475', '38', '546', '10', '898'),
    createData('https://platform.linkedin.com/in.js', '978536475', '39', '546', '10', '898'),
    createData('https://platform.linkedin.com/in.js', '978536475', '40', '546', '10', '898'),
    createData('https://platform.linkedin.com/in.js', '978536475', '41', '546', '10', '898'),
    createData('https://platform.linkedin.com/in.js', '978536475', '42', '546', '10', '898'),
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
                                        <TableCell>Post Id</TableCell>
                                        <TableCell>Post Url</TableCell>
                                        <TableCell>Comments</TableCell>
                                        <TableCell>Likes</TableCell>
                                        <TableCell>Share</TableCell>
                                        <TableCell>View </TableCell>
                                    
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell> {row.posturl} </TableCell>
                                            <TableCell> {row.postid} </TableCell>
                                            <TableCell> {row.comments} </TableCell>
                                            <TableCell>{row.likes}</TableCell>
                                            <TableCell>{row.share}</TableCell>
                                            <TableCell>{row.view}</TableCell>
                                            
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
