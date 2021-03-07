import React from "react";
import {Box,Grid,Typography} from "@material-ui/core";
import {makeStyles}  from "@material-ui/core/styles";
const useStyels=makeStyles((theme)=>({
    aboutUsContainer:{
        background:'#1a1919',
        width:'100%',
        padding:'10px',
        marginTop:'5rem',
        color:'white',
    },
}));
export default function Footer(){
    const classes=useStyels();
    return (
     <>
    <Box className={classes.aboutUsContainer} display="flex" justifyContent="center">
        <Typography variant="h6">
            Copyright (c) 2021 : Developed BY Haseeb ALi
        </Typography>
    </Box>
     </>
 );   
}