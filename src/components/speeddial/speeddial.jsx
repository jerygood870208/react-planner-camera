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

import {
  MODE_VIEWING_CATALOG
} from '../../constants';

const actions = [
  { icon: <CameraAltIcon />, name: 'Camera' },
  { icon: <FlagIcon />, name: 'Target' },
];

export default class BasicSpeedDial extends Component{

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  
  render() {

    let {
      context: { projectActions }
    } = this;

    return (
      <Container maxWidth='sm'>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16}}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              //onClick={event => projectActions.openCatalog()}
              onClick={event => projectActions.setMode( MODE_VIEWING_CATALOG )}
            />
          ))}
        </SpeedDial>
      </Container>
    );
  }
}

BasicSpeedDial.propTypes = {
  state: PropTypes.object.isRequired,
  //width: PropTypes.number.isRequired,
  //height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

BasicSpeedDial.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
