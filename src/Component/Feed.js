import React from 'react'
import { makeStyles, Container } from '@material-ui/core';
import Post from './post';
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: "5rem"
    },
}))
export default function Feed() {
    const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </Container>
  )
}