import React from 'react';
import {  Grid  } from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';


import LatestorderCard from './LatestorderCard';


import { gridSpacing } from './../../../store/constant';

// const useStyles = makeStyles((theme) => ({
//     arrowicon: {
//         '& svg': {
//             width: '20px',
//             height: '20px',
//             verticalAlign: 'top',
//         },
//     },
//     flatcardbody: {
//         padding: '0px !important',
//         '& svg': {
//             width: '40px',
//             height: '40px',
//         },
//     },
//     flatcardblock: {
//         padding: '25px 25px',
//         borderLeft: '1px solid' + theme.palette.background.default,
//         [theme.breakpoints.down('xs')]: {
//             borderLeft: 'none',
//             borderBottom: '1px solid' + theme.palette.background.default,
//         },
//         [theme.breakpoints.down('sm')]: {
//             borderBottom: '1px solid' + theme.palette.background.default,
//         },
//     },
//     textsuccess: {
//         color: theme.palette.success.main,
//     },
//     texterror: {
//         color: theme.palette.error.main,
//     },
// }));

const Default = () => {
/* eslint-enable no-unused-vars */
    // const classes = useStyles();
    // const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing}>
           
            <Grid item xs={12}>
                <LatestorderCard title="Latest Order" />
     
            </Grid>
        </Grid>
    );
};

export default Default;
