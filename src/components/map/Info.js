import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StoreCard from "./StoreCard";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        backgroundColor: "#e6e6e6"
    },
}));

const Info = ({detail}) => {
    const classes = useStyles();
    return (
        <div>
          <h1>정보</h1>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <StoreCard detail={detail}/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <h2>이름 : {detail.name}</h2>
                        <h2>종류 : {detail.cat}</h2>
                        <h3>설명 : {detail.detail}</h3>
                        <h4>위치 : {detail.lat} , {detail.lng}</h4>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Info;