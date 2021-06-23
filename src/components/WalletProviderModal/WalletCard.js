import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';

const WalletCard = ({ icon, onConnect, title }) => (
  <Button fullWidth onClick={onConnect} className="wallet-button">
    <span style={{ marginRight: '1rem' }}>{icon}</span>
    <span>{title}</span>
  </Button>
);

export default WalletCard;

// :)
