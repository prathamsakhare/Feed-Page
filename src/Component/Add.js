import React, { useState } from 'react'
import { makeStyles, Container, Fab, Tooltip, Card, Modal, TextField, MenuItem, FormLabel, Radio, RadioGroup, FormControlLabel, Button, Snackbar } from '@material-ui/core';
import Post from './post';
import { Add as AddIcon } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import AddalertIcon from '@material-ui/icons/AddAlert';

const useStyles = makeStyles((theme) => ({
    fab:{
        position: 'fixed',
        bottom: 20,
        right: 20,

    },
    container:{
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("md")]:{
            width: "100vw",
            height: "100vh",

        }
    },
    item:{
        marginBottom: "30px"
    },
    form: {
        padding: "20px",
    }
    
}))
export default function Add() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway'){
            return;
        }

        setOpenAlert(false);
    }




  return (
    <>
        <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
            <Fab color="primary" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>

{/* ########################################### MODAL (POPUP NOTIFICATION) ################################################### */}

        <Modal open={open}>
            <Container className={classes.container}>
                <form className={classes.form} autoComplete="off">
                    <div className={classes.item}>

                        <TextField 
                            id='standard-basic' 
                            label="Title"  
                            size="small" 
                            style={{width:"100%", marginBottom:"20px"}}
                        />

                        <TextField 
                            id='outlined-multiline-static' 
                            multiline 
                            rows={4} 
                             
                            variant='outlined' 
                            label="Description"  
                            size="small" 
                            style={{width:"100%"}}
                        />

                    </div>
                    <div className={classes.item}>
                        <TextField select label="Visibility" value="Public">
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                            <MenuItem value="Unlisted">Unlisted</MenuItem>
                        </TextField>
                    </div>
                    
                    <div className={classes.item}>
                    <FormLabel id="demo-radio-buttons-group-label">Who can comment?</FormLabel>
                    <RadioGroup>

                        <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" />
                        <FormControlLabel value="My Friends" control={<Radio size="small" />} label="My Friends" />
                        <FormControlLabel value="Nobody" control={<Radio size="small" />} label="Nobody" />
                        <FormControlLabel value="Custom" disabled control={<Radio size="small" />} label="Custom (Premium)" />
                    </RadioGroup>

                    </div>


                    <div className={classes.item}>
                        <Button variant="outlined" color="primary" style={{marginRight: "20px"}} onClick={() => setOpenAlert(true)}>Create</Button>
                        <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancle</Button>
                    </div>
                </form>
            </Container>
        </Modal>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
            <AddalertIcon onClose={handleClose} severity="success">
                This is a success 
            </AddalertIcon>
</Snackbar>
{/* MODAL is used for the notification or popup warning that we get on some websites */}



    </>
  )
}