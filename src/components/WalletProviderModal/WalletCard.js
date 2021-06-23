import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const WalletCard = ({ icon, onConnect, title }) => (
  <button type="button" onClick={onConnect} style={{display:'flex', alignItems:'center', outline: 'none', border:'none', width:'100%'}}>
    <span style={{marginRight: '1rem'}}>{icon}</span>
    <span>{title}</span>
  </button>
  // <ListItem button onClick={onConnect}>
  //   <ListItemIcon>{icon}</ListItemIcon>
  //   <ListItemText primary={title} />
  // </ListItem>
);

export default WalletCard;

// :)