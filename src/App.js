import React from 'react';
import PropTypes from 'prop-types';
import Stixviewer from './Stixviewer/Stixviewer';

function StixViewerView(props) {
  const { stixJson, graphStyle, wrapStyle } = props;
  return React.createElement('div', { className: 'App' },
    React.createElement(Stixviewer, { 
      stixJson: stixJson,
      graphStyle: graphStyle,
      wrapStyle: wrapStyle
    })
  );
}

StixViewerView.propTypes = {
  stixJson: PropTypes.object.isRequired,
  graphStyle: React.CSSProperties,
  wrapStyle: React.CSSProperties
};

export default StixViewerView;