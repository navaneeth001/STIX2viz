import './App.css';
import React from 'react';
import Stixviewer from './Stixviewer/Stixviewer';

function StixViewerView({stixJson,graphStyle = null,wrapStyle = null}) {
  return React.createElement('div', { className: 'App' },
    React.createElement(Stixviewer, { stixJson: stixJson,
      graphStyle: { graphStyle},
      wrapStyle: { wrapStyle }})
  );
}

export default StixViewerView;