import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Menu from '@mui/icons-material/Menu';
import Pets from '@mui/icons-material/Pets';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ExitToApp from '@mui/icons-material/ExitToApp';

// import {
//   Options
// } from "../../../Options/index";

export const mainListItems = (
  <div>
    <ListItem button component="" href="/menu/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    {/* <ListItem button component={<Options />} href="/menu"> */}
    <ListItem button href="/menu">
      <ListItemIcon>
        <Menu />
      </ListItemIcon>
      <ListItemText primary="Menu" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);