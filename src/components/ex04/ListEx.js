import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
        marginLeft: "10vw"
    },
    inline: {
        display: 'inline',
    },
}));

const ListEx = ({item,addToCart}) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={item.imgSrc} />
                </ListItemAvatar>
                <ListItemText
                    primary={item.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                            {item.price} 원
                            </Typography>
                            <Button onClick={()=>addToCart(item)} variant="contained" color="primary" disableElevation style={{marginLeft:"10px"}}>
                                구매
                            </Button>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
}


export default ListEx;