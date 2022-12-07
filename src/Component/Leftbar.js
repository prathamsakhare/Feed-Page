import React, { useEffect, useState } from 'react';
import { Container, makeStyles, Typography, Menu, MenuItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@material-ui/icons/List";
import CameraIcon from "@material-ui/icons/Camera";
import MobileIcon from "@material-ui/icons/TabletMac";
import Circle from "@material-ui/icons/PlayCircleOutline";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SettingIcon from '@material-ui/icons/Settings';
import ExitIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles((theme) => ({
  Leftbar:{
    position: "sticky",
    top: 0,
  },
  container: {
    paddingTop: "5.5rem",
    backgroundColor: "#5C6BC0",
    color:"#555",
    height: "100vh",
    [theme.breakpoints.up("md")]:{
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7"
      
    },
    
  },
  item:{
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    marginRight: "30px",
    
    [theme.breakpoints.down("sm")]:{
      marginBottom: "30px",
      cursor: "pointer",
      
    },
  },
  text:{
    [theme.breakpoints.down("sm")]:{
      display: "none"
      
    },
  },
  icon: {
    fontWeight: 500,
    marginRight: "6px",
    color: "white",
    [theme.breakpoints.up("md")]:{
      fontSize: "18px",
      color: "grey"
      
    }
  }, 
  dropdown :{
    position: "relative",
    width: "100px",
    height: "100px",
    top: "50px",
    left: "50px"
  },
}))
function Leftbar() {
    const classes = useStyles()
    const [anchor, setAnchorEl] = useState(null);
    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    }

    return (
      <div className={classes.Leftbar}>
        <Container className={classes.container}>

          
          {/* ################################## ITEM ON LEFTBAR ####################################### */}
          
          <div className={classes.item}>
              <HomeIcon className={classes.icon}/>
              <Typography className={classes.text} aria-controls="basic-menu" aria-haspopup ="true" aria-expanded="false" onClick={() => {}}>Homepage</Typography>
          </div>  
          {/* here it is one items structure which will be displayed on left bar, here firstly there will be icon of that part and after that its name will be there */}
          {/* <div className={classes.dropdown} style={{position:"absolute",
  backgroundColor: "white",
  right:"0px", top: "0px"}}>
          <Menu id="basic-menu" anchorEl open="true" onClose={{handleClick}} >
            <MenuItem>Men</MenuItem>
            <MenuItem>Women</MenuItem>
          </Menu>
          </div> */}

          
          <div className={classes.item}>
              <PersonIcon className={classes.icon}/>
              <Typography className={classes.text}>Friends</Typography>
          </div>  
          <div className={classes.item}>
              <ListIcon className={classes.icon}/>
              <Typography className={classes.text}>Lists</Typography>
          </div>  
          <div className={classes.item}>
              <CameraIcon className={classes.icon}/>
              <Typography className={classes.text}>Camera</Typography>
          </div>  
          <div className={classes.item}>
              <Circle className={classes.icon}/>
              <Typography className={classes.text}>Videos</Typography>
          </div>  
          <div className={classes.item}>
              <MobileIcon className={classes.icon}/>
              <Typography className={classes.text}>Apps</Typography>
          </div>  
          <div className={classes.item}>
              <BookmarkIcon className={classes.icon}/>
              <Typography className={classes.text}>Bookmarks</Typography>
          </div>  
          <div className={classes.item}>
              <StorefrontIcon className={classes.icon}/>
              <Typography className={classes.text}>Market Place</Typography>
          </div>  
          <div className={classes.item}>
              <SettingIcon className={classes.icon}/>
              <Typography className={classes.text}>Settings</Typography>
          </div>  
          <div className={classes.item}>
              <ExitIcon className={classes.icon}/>
              <Typography className={classes.text}>Logout</Typography>
          </div>  
          
        </Container> 
        
        
  
      </div>
    );
  }
  
  export default Leftbar;