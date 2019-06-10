import React from 'react';
import ButtonAppBar from './components/ButtonAppBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonAppBar />
    </div>
  );
}

export default App;
