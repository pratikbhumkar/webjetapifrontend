import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function MovieSearchBox({movies}) {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={movies}
            getOptionLabel={(option) => option.title}
            className={'AutoComplete'}
            renderInput={(params) => <TextField {...params} label="Search Movies" variant="outlined" />}
        />
    );
}