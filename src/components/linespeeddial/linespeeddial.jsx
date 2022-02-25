import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlagIcon from '@mui/icons-material/Flag';
import Container from '@mui/material/Container';
import CreateIcon from '@mui/icons-material/Create';

import {
  MODE_VIEWING_CATALOG
} from '../../constants';
/*
const actions = [
  { icon: <CameraAltIcon />, name: 'Camera', do: () => itemsActions.selectToolDrawingItem('camera_BAC2000')},
  { icon: <FlagIcon />, name: 'Target' , do: () => console.log("click speeddial Target")},
];
*/
export default class LineSpeedDial extends Component{

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  
  render() {

    let {
      context: { itemsActions,  linesActions}
    } = this;

    const actions = [
      { icon: <CreateIcon />, name: "Area I want", do: () => linesActions.selectToolDrawingLine('install area')},
      { icon: <CreateIcon />, name: "Area I don't want" , do: () => linesActions.selectToolDrawingLine('wall')},
    ];

    return (
      <Container 
        maxWidth='sm'
        sx={{ pl: 0, pr: 0}}
        >
        <SpeedDial
          ariaLabel="Line SpeedDial"
          sx={{ position: 'absolute', bottom: 16, right: 16}}
          icon={<CreateIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.do}
            />
          ))}
        </SpeedDial>
      </Container>
    );
  }
}

LineSpeedDial.propTypes = {
  state: PropTypes.object.isRequired,
  //width: PropTypes.number.isRequired,
  //height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

LineSpeedDial.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
