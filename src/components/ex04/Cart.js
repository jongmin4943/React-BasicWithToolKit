import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const Cart=({cart,resetCart,deleteItems,checked,setChecked}) =>{
    const classes = useStyles();

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };


    return (
        <List dense className={classes.root}>

            {cart?.map((item,idx) => {
                const labelId = `checkbox-list-secondary-label-${item.name}`;
                const total = item.price*item.count;
                return item.count>0 ?  (
                    <ListItem key={idx} button>
                        <ListItemAvatar>
                            <Avatar
                                alt={`Avatar n°${item.name + 1}`}
                                src={item.imgSrc}
                            />
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={`${item.name}`} />
                        <ListItemSecondaryAction>
                            {item.count} 개 {total}원
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(item.name)}
                                checked={checked.indexOf(item.name) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                ):null;
            })}
            <div>
                <h2>Total : {cart.reduce((a,b)=>{
                    if(typeof a === "object") {
                        return a.price*a.count + b.price*b.count
                    } else {
                        return a + b.price*b.count
                    }

                })} 원</h2>
            </div>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={()=>deleteItems(checked)}
            >
                Delete
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={resetCart}
            >
                Reset
            </Button>
        </List>
    );
}

export default Cart;