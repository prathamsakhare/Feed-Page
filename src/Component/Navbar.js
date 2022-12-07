import React, { useEffect, useState } from "react";
import { AppBar, InputBase, makeStyles, Toolbar, Typography, Badge, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CancelIcon from '@material-ui/icons/Cancel';

// so here we have made a separate const for styles in which we have applied makeStyles function of material ui with theme named parameter

// #################################################### RESPONSIVE DESIGN ########################################################

const useStyles = makeStyles((theme) => ({

    toolbar: {
        display: 'flex',
        justifyContent: "space-between"
    },
    logolg:{
        display: "none",
        marginRight:"25px",
        [theme.breakpoints.up("sm")]: {
            display:'block',
        },

    },
    // so here we have made a component inside the useStyles const, in which logolg says, display none until and unless the screen size should be greater that 0 - 600 (sm means that) and when it comes below 600 px then hide it 
    
    logosm: {
        display: "block",
        [theme.breakpoints.up("sm")]:{
            display: "none"
        },
    },
    // so here we have made a component inside the useStyles const, in which logosm says, display until and unless the screen size should in that 0 - 600 (sm means that) and when it comes below 600 px then hide it 

    search: {
        display: 'flex',
        alignItems: "center",
        backgroundColor: "#808080",

        "&:hover": {
            Color: "white"
        },//this property is used for the same purpose as we use hover in html css

        borderRadius: "5px",
        width: "70%",
        
        [theme.breakpoints.down("sm")]:{
            display: (props) => props.open ? "flex" : "none",
            // here it describes that if the props open is true then the search bar should be displayed in flex and if it is false then it should not display
        },


    },
    input:{
        color: "#000080",
        marginLeft: "10px"
    },
    cancel:{
        marginLeft: "auto",
        marginRight:"10px",
        [theme.breakpoints.up("md")]:{
            display:"none",
        }
    },
    icons:{
        alignItems:"center",
        display: (props) => (props.open ? "none" : "flex"),
        // this shows that when the prop open is true at that time the icons should be hidden and if it is false at that time the icons should be flex
        

    },
    badge:{
        marginRight: "20px",
        marginLeft:"15px"
    },
    searchButton:{
        marginRight: "20px",
        
        [theme.breakpoints.up("md")]:{
            display: "none",
        },

    }

}))

// ###############################################################################################################################

function Navbar() {

    const [open, setOpen] = useState(false);

    // so the need of using this state currently is when we reduce the screen size to less than sm at that time our search bar will be disappear and instead of that we are going to get the search icon, so our need is, when we will click on that icon, after that it should get into the shape of search bar and should occupy all the header space so to do that we have put initial state to false means the initial state is in the size where screen size is greater than sm

    const classes = useStyles({ open });
  
    return (
      <div className="App">
  
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>

                {/* ###################################### LOGO ############################################################## */}

                <Typography variant="h6" className = {classes.logolg}>
                    {/* TypoGraphy is the component of material ui which is used to standardize the text and its related css properties, 
                    Now here if we write h1 inside the variant then it will show the text as the size of the h1 */}
                    Pratham P. Sakhare
                </Typography>
                <Typography variant="h6" className={classes.logosm}>
                    PPS
                </Typography>

                {/* ########################################## SEARCHBAR ##################################################### */}

                <div className={classes.search}>

                    <SearchIcon />
                    {/* this is the search icon that we've imported from the material ui icons package */}

                    <InputBase placeholder='Search' className={classes.input}/>
                    {/* this is the search bar place simply input tag of the html */}

                    <CancelIcon className={classes.cancel} onClick={() => setOpen(false)}/>
                    {/* by using this icon we can close the setOpen state */}

                </div>

                {/* ######################################### ICONS ########################################################## */}
                
                <div className={classes.icons}>

                    <SearchIcon  className={classes.searchButton} onClick={() => setOpen(true)} />

                    {/* now here when we reduce the size of the screen, at that time the search bar which is coded below in search division, occupies more space. so to reduce it, we are going to use only search icon and applying breakpoint to it, so that whenever screen size is less that 600 px i.e sm then the search bar will get compressed into search icon */}


                    <Badge badgeContent={4} color="secondary" className={classes.badge}  >
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge} >
                        <NotificationsIcon />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="./img/p.png" />
                </div>
            </Toolbar>
        </AppBar>      
        {/* this AppBar is primarily used for making Navbars */}
  
      </div>
    );
  }
  
  export default Navbar;