import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <Grid container direction="column" justify="center" alignItems="center">
        <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={age}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
            >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Label + placeholder</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">Age1</InputLabel>
            <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={age}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
            >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={10}>Ten1</MenuItem>
                <MenuItem value={20}>Twenty1</MenuItem>
                <MenuItem value={30}>Thirty1</MenuItem>
            </Select>
            <FormHelperText>Label + placeholder</FormHelperText>
        </FormControl>
        </Grid>
    )
}