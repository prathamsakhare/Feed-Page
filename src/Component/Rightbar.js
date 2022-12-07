import React from 'react'
import { Container, makeStyles, Typography, Avatar, ImageList, ImageListItem, Link, Divider } from '@material-ui/core';
import { AvatarGroup } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: "5rem",
        position: "sticky",
        top: 0
    },
    title:{
        fontSize: 16,
        fontWeight: 500,
        color: "#555",
    },
    gallery : {
        marginTop: "25px",
        
    },
    item:{
        marginBottom:"7px"
    },
    link:{
        marginRight:"10px",
        color:"#555",
        fontSize:16
    }
}))
export default function Rightbar() {
    const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>Online Friends</Typography>
        <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/5.jpg" />
            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/6.jpg" />
        </AvatarGroup>
        <Typography className={classes.gallery} gutterBottom>Gallery</Typography>
        <ImageList rowHeight={130} sx={{ width: 500 }} className={classes.imageList} cols={1}>
            <ImageListItem className={classes.item}>
                <img src='https://i.pinimg.com/originals/f6/f9/3d/f6f93dc993ae513f03a66ba159962ff3.jpg' alt='collage' />
            </ImageListItem>
            <ImageListItem className={classes.item}>
                <img src='http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg' alt='collage' />
            </ImageListItem>
            <ImageListItem className={classes.item}>
                <img src='https://wallpapercave.com/wp/wp2722874.jpg' alt='collage' />
            </ImageListItem>
        </ImageList> 


        <Typography className={classes.title} gutterBottom>Categories</Typography>
        <Link href="#" className={classes.link} variant="body2">
            Science
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Sport
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Music
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Life
        </Link>
        <Divider flexItem style={{marginBottom: 5}}></Divider>
        <Link href="#" className={classes.link} variant="body2">
            Food
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Movies
        </Link>
          
           
        
    </Container>
  )
}
