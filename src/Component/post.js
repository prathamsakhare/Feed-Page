import React from 'react'
import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: "50px"
    },
    media:{
        height: "250px",
        [theme.breakpoints.down("md")]:{
            height: '175px',
        }
    }
}))
export default function Post() {
    const classes = useStyles();
  return (
    <>
        <Card className={classes.card}> 
            <CardActionArea>
                <CardMedia className={classes.media} image="https://jooinn.com/images/beautiful-lake-5.jpg" title="My Post"></CardMedia>
                <CardContent>
                    <Typography gutterBottom className={classes.h5}>My first post</Typography>
                    {/* gutterBottom is used to give margin at bottom of a tag */}
                    <Typography className={classes.body} variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    </>
  )
}