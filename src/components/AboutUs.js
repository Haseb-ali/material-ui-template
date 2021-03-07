import React from "react";
import {Box,Grid,Typography} from "@material-ui/core";
import {makeStyles}  from "@material-ui/core/styles";
const useStyels=makeStyles((theme)=>({
    aboutUsContainer:{
        background:'royalblue',
        width:'100%',
        padding:'5px',
        
    },
    headerHeading:{
        color:'white',

    },
    contentSection:{
        marginTop:'3rem',
        marginBottom:'2rem'
    },
    AboutUsContent:{
        width:'80%',
        color:'white',
        marginTop:'1rem'
    }
}));
export default function AboutUs(){
    const classes=useStyels();
    return (
     <>
    <Box className={classes.aboutUsContainer}  >
        <Box className={classes.contentSection} display="flex"  alignItems="center" flexDirection="column">
        <Typography variant="h2" className={classes.headerHeading}>
            About us
        </Typography>
        <Box className={classes.AboutUsContent}>
        <Typography variant="subtitle" >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
        </Box>
        </Box>
    </Box>
     </>
 );   
}