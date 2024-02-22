import React from 'react';
import Stixviewer from './Stixviewer/Stixviewer';
import PropTypes from 'prop-types';

function StixViewerView({ stixJson, ...props }) {
  return (
    <div className="App">
      <Stixviewer stixJson={stixJson} {...props} />
    </div>
  );
}

StixViewerView.propTypes = {
  stixJson: PropTypes.object.isRequired,
  graphStyle: React.CSSProperties,
  wrapStyle: React.CSSProperties,
};

export default StixViewerView;
