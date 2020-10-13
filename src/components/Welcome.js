import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const NoResults =() => (

    <Grid item xs={12}>
        <Paper className="paper">
            <h1 className="titleHeader" >¡Bienvenid@! <span role="img" aria-label="hi">🙋‍♂️</span></h1>
            <h3 className="titleHeader">Ingresa la comuna a consultar.</h3>
        </Paper>
    </Grid>

);


NoResults.displayName = 'NoResults';
export default NoResults;