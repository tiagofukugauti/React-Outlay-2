import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import { apiPostUserOut } from '../services/apiService';

export const UserMenu = React.memo(function ({ sair, usuario }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function signOut() {
    apiPostUserOut();
    sair();
  }

  return (
    <div className="bg-blue-500 p-1.5">
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar>
          <Icon>person</Icon>
        </Avatar>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="mx-auto my-auto p-4 flex flex-col text-center">
          <div className="flex justify-center">
            <Avatar>
              <Icon>person</Icon>
            </Avatar>
          </div>
          <div className="mt-3 mb-1">{usuario.nome}</div>
          <small>{usuario.email}</small>
        </div>
        <div className="flex justify-end mr-1.5">
          <MenuItem onClick={signOut}>Sair</MenuItem>
        </div>
      </Menu>
    </div>
  );
});
