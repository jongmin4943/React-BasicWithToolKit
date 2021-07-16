import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: "33vw",
        height: "33vh",
        marginLeft: "15vw"
    },
    media: {
        height: 250,
    },
});

const StoreCard =({detail}) =>{
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={detail.imgSrc||"http://image.kyobobook.co.kr/newimages/giftshop_new/goods/400/1794/S1560760769379.jpg"}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {detail.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default StoreCard;