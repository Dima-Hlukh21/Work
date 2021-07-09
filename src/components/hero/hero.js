/* eslint-disable no-sequences */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItems from './ListItems';
import {  cyan } from '@material-ui/core/colors';
import Profile from "./Profile.js"
import {BrowserRouter, Route} from 'react-router-dom'
import History from "./History.js"
import Create from "./Create.js"




const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  '@global':{
    body:{
      backgroundColor:"#382E7E"
    },
   
},
  widthLogut:{
    width:'60px' ,
    float: "right",
    background:"none",
    fontSize:"20px"
    
  },
  root: {
    display: 'flex',
  },
  purple: {
   background: 'radial-gradient( ellipse at left bottom,rgba(22, 24, 47, 1) 0%,rgba(38, 20, 72, 0.9) 59%,rgba(17, 27, 75, 0.9) 100%)',
  },
  toolbar: {
    paddingRight: 24, 
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 20px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    width: 40,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: "auto",
  },
  rightbg: {
    backgroundColor: "#673ab7",
    
  },

  

}));

const Hero = ({handleLogout}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
  
  
  return (
    <BrowserRouter>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar, classes.purple}>
          <IconButton 
          style={{ color: cyan[50] }}
            edge="end"
            color=""
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6"  noWrap className={classes.title}>
            Admin Panel
          </Typography>
          <button className={classes.widthLogut} onClick={handleLogout}>Logout</button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ListItems/>
        <Divider />
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="false" className={classes.container}>
          <Grid container spacing={1}>
           
            {/* Recent Deposits */}
            <Grid item xs zeroMinWidth>
            <Paper className={fixedHeightPaper}>
              
              <Route path="/Profile" component={Profile}/>    
              <Route path="/Create" component={Create}/> 
              <Route path="/History" component={History}/> 
              <Route path="/Accesstime" component={Profile}/> 
              <Route path="/ControlAdmins" component={Profile}/> 
              <Route path="/LockAdd" component={Profile}/> 
              
            </Paper>
            </Grid>
            
           
          </Grid>
          
        </Container>
      </main>
    </div>
    </BrowserRouter>
);
}

export default Hero