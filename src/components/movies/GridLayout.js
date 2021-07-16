import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "3vw"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const GridLayout=({movies})=> {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [data,setData] = useState(movies[0]);
    const openDetail = (movie) => {
        setOpen(true);
        setData(movie);
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {movies.map((movie,idx)=>{
                    return movie.RepresentationMovieCode !== "AD" ? (
                        <Grid key={idx} item xs={4}>
                            <Paper onClick={()=>openDetail(movie)} className={classes.paper}>
                                <MovieCard movie={movie}/>
                            </Paper>
                        </Grid>
                    ) : null
                })}
            </Grid>
            <MovieDetail movie={data} open={open} setOpen={setOpen}/>
        </div>
    );
}

export default GridLayout;