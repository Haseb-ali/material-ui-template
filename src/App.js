import React from "react";
import {Grid,Paper,Typography,Box,Card,CardContent,CardActions,CardHeader,CardMedia,Button,ButtonGroup} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const useStyles=makeStyles((theme)=>({
  header:{
    width:'100%',
    backgroundColor:'royalblue',
    height:'100vh',
  },
  mainHeading:{
    textTransform:"uppercase",
    color:'white',
    
  },
  subHeading:{
    color:'white',
    fontSize:'1rem',
    textTransform:'capitalize'

  },
  productSection:{
    width:'80%',
    margin:'2rem auto',
  },
  productSectionHeading:{
    display:'flex',
    justifyContent:'center',
  },
  productSectionHeadingContent:{
    color:'#555',
    textTransform:'uppercase',
    letterSpacing:'1.2px',
  },
  contentSection:{
    margin:'3rem 0'
  },
  media:{
    height:'40vh',
    objectFit:'cover',
  },
  productHeading:{
    textTransform:'capitalize',
    color:'#555',
  },
  productSubHeading:{
    fontSize:'1rem',
    marginTop:'0.7rem',
    textAlign:'justify'
  },
  line:{
    width:'80%',
    height:'1px',
    borderTop:'1px solid #e8d9d9',
    margin:'5rem  auto',
  }
}));
{/**
============================
CUSTUM STYLING
============================


*/}
const memeberImageDesing={
  height:'200px'
  
}
const fullWidth={
  width:'100%'
}
const App =(props) => {
  const classes=useStyles();
  return(
    <>
    <Box className={classes.header} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Typography variant="h1" className={classes.mainHeading} >
      material ui
      </Typography>
      <Typography variant="subtitle1" className={classes.subHeading} >
      material ui is Awasome framework for front-end
      </Typography>
    </Box>
    <Box className={classes.productSection}>
      <Box className={classes.productSectionHeading}>
        <Typography variant="h3" className={classes.productSectionHeadingContent}>
          our products
        </Typography>
      </Box>
      <Box className={classes.contentSection}>
        <Grid container spacing={4}> 
          <Grid item xs={12} sm={12} md={4} lg={4}>
            
            <Card variant="outlined">
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
              />
              <CardContent>
              <Typography variant="h5" className={classes.productHeading}>
                Chat masala
              </Typography>
              <Typography variant="subtitle" className={classes.productSubHeading} color="primary">
                Price:$150
              </Typography>
              </CardContent>
              <CardActions>
                  <Button variant="contained"color="primary">order now</Button>
                  <Button variant="contained" color="secondary">Add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card>
              <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
              />
              <CardContent>
                <Typography variant="h5" className={classes.productHeading}>
                  Chat masala
                </Typography>
                <Typography variant="subtitle" className={classes.productSubHeading} color="primary">
                  Price:$150
                </Typography>  
              </CardContent>
              <CardActions>
                  <Button variant="contained"color="primary">order now</Button>
                  <Button variant="contained" color="secondary">Add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card>
              <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
              />
              <CardContent>
                <Typography variant="h5" className={classes.productHeading}>
                  Chat masala
                </Typography>
                <Typography variant="subtitle" className={classes.productSubHeading} color="primary">
                  Price:$150
                </Typography>  
              </CardContent>
              <CardActions>
                  <Button variant="contained"color="primary">order now</Button>
                  <Button variant="contained" color="secondary">Add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>  
      </Box>
    </Box>
    {/*
    =========================
    Team section
    =========================
    */}
    <Box className={classes.line}></Box>
    <Box className={classes.productSection}>
      <Box className={classes.productSectionHeading}>
        <Typography variant="h3" className={classes.productSectionHeadingContent}>
          our team
        </Typography>
      </Box>
      <Box className={classes.contentSection}>
        <Grid container spacing={4}> 
          <Grid item xs={12} sm={12} md={4} lg={3}>
            
            <Card variant="outlined" style={{textAlign:'justify'}}>
              <CardMedia
                className={classes.media}
                style={memeberImageDesing}
                image="team/memer1.jpg"
              />
              <CardContent>
              <Typography variant="h5" className={classes.productHeading}>
                Chat masala
              </Typography>
              <Typography variant="subtitle" className={classes.productSubHeading} color="primary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </Typography>
              </CardContent>
              <CardActions>
                  <Button variant="contained"color="primary" style={fullWidth}>read more..</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Card style={{textAlign:'justify'}} >
              <CardMedia
              className={classes.media}
              style={memeberImageDesing}
                
              image="team/memer2.jpg"
              />
              <CardContent style={{textAlign:'justify'}}>
                <Typography variant="h5" className={classes.productHeading}>
                  Chat masala
                </Typography>
                <Typography variant="subtitle" className={classes.productSubHeading} color="primary" style={{
        
                }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>  
              </CardContent>
              <CardActions>
              <Button variant="contained"color="primary" style={fullWidth}>read more..</Button>
                  
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Card style={{textAlign:'justify'}}>
              <CardMedia
              className={classes.media}
              style={memeberImageDesing}
                
              image="team/memer3.jpg"
              />
              <CardContent>
                <Typography variant="h5" className={classes.productHeading}>
                  Chat masala
                </Typography>
                <Typography variant="subtitle" className={classes.productSubHeading} color="primary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>  
              </CardContent>
              <CardActions>
              <Button variant="contained"color="primary" style={fullWidth}>read more..</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Card style={{textAlign:'justify'}}>
              <CardMedia
              className={classes.media}
              style={memeberImageDesing}
                
              image="team/memer3.jpg"
              />
              <CardContent>
                <Typography variant="h5" className={classes.productHeading}>
                  Chat masala
                </Typography>
                <Typography variant="subtitle" className={classes.productSubHeading} color="primary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>  
              </CardContent>
              <CardActions>
              <Button variant="contained"color="primary" style={fullWidth}>read more..</Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>  
      </Box>
    </Box>
    <AboutUs/>
    <Footer/>
    </>
  )
}
export default App;