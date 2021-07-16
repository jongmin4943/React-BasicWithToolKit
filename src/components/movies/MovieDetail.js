import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(({ children, classes, onClose, ...other }) => {
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const MovieDetail=({movie,open,setOpen}) =>{

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {movie.MovieNameKR}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom style={{textAlign:"center"}}>
                        <img src={movie.PosterURL} alt="사진"/>
                    </Typography>
                    <Typography gutterBottom>
                        <span style={{fontSize:"20px"}}>{movie.ReleaseDate+" 대개봉"||"미정"}</span>
                    </Typography>
                    <Typography gutterBottom>
                        {movie.ViewGradeNameUS}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <a href={`https://www.lottecinema.co.kr`+movie.URL} target="_blank" rel="noreferrer" autoFocus onClick={handleClose} color="primary">
                        평점 및 리뷰 보러 가기
                    </a>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default MovieDetail;