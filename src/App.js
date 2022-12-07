import logo from './logo.svg';
import './App.css';
import { makeStyles, Grid } from '@material-ui/core';
import Person from '@material-ui/icons/Person';
import Navbar from './Component/Navbar';
import Leftbar from './Component/Leftbar';
import Feed from './Component/Feed';
import Rightbar from './Component/Rightbar';
import Add from './Component/Add'

const useStyles = makeStyles((theme)=>({
  
  // you can make styles with the help of the makestyles function and then you can use it in another variable and that variable will be used in className of the button

  // these are custom classes
  
  // button: {
  //   color: "white",
  //   backgroundColor: "black",
  // },

  // button2: {
  //   color: "black",
  //   backgorund: "blue"
  // }
  right:{
    [theme.breakpoints.down("sm")]:{
      display: "none"
    }
  }


}))

function App() {
  const classes = useStyles()

  return (
    <div className="App">

      <Navbar />
      <Grid container >
        <Grid item sm={2} xs={2}>
          {/* sm means small and xs means extra small */}
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      {/* here the item means one section of the container and sm means how much width it want so it will be divide into 12 parts out of them here we have spent 2 on leftbar 7 on Feed, and 3 on rightbar */}
      <Add />
    </div>
  );
}

export default App
