import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    background: '#ff7875',
    borderRadius: 3,
    border: 0,
    color: 'white',
    width: 180,
    height: 44,
    padding: '0 30px',
    margin: '10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const MainButton = (props) => {
  return (
    <StyledButton>{props.title}</StyledButton>
  )
}

export default MainButton
