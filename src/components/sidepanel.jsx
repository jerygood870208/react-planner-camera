import React from 'react';
import PropTypes from 'prop-types';
import CatalogList from './catalog-view/catalog-list';

export default function Sidepanel(/*{width, height,*/{state}) {
  return <CatalogList state={state} width={50} height={100}/>;
}

Sidepanel.propTypes = {
  state: PropTypes.object.isRequired,
  //width: PropTypes.number.isRequired,
  //height: PropTypes.number.isRequired
};

