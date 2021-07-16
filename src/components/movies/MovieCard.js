import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxHeight: "50vh",
        overflowX: "hidden",
        textOverflow:"ellipsis",
        whiteSpace:"nowrap",
    },
    media: {
        minHeight: "40vh",
    },
});

const MovieCard=({movie})=> {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={movie.PosterURL||"data:image/jpeg;base64,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"}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movie.MovieNameKR||"미정"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <span style={{fontSize:"20px"}}>{movie.ReleaseDate+" 대개봉"||"미정"}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default MovieCard;