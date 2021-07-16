import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import axios from "axios";
import GridLayout from "./GridLayout";

const initState = [{}];


const MovieList = () => {

    const [movies, setMovies] = useState(initState);

    useEffect(()=>{
        axios.get("http://localhost:8080/getMovies").then(res=>{
            setMovies(res.data.Movies.Items[0].Items);
        })
    },[])

    return (
        <Container fixed>
            <GridLayout movies={movies}></GridLayout>
        </Container>
    );
};



export default MovieList;