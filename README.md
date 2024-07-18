# Stix2Vis: Visualize STIX Data with Ease!

![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&ts=1683906897&type=6e&v=1.0.4&x2=0)

### This React component enables developers to generate STIX2.1 visualizations from STIX 2.1 JSON files within their React applications. It is inspired by the STIX Visualization project from the OASIS CTI Open Repository ***https://oasis-open.github.io/cti-stix-visualization/***

![Sample rendering of a STIX2.1 Json indicating malware, indicators and identity](/public/stix2.png)

### Bridging the Gap in Cyber Threat Intelligence

Cyber Threat Intelligence (CTI) is all about storytelling. Information transforms into intelligence when given context and narrative, often crystallized in reports from intelligence providers. These reports, if structured and machine-readable, are supplemented with STIX2.1 bundles.

### Features

Rapid visualization of STIX 2.1 content using D3.js library.
100% browser-based, ensuring data privacy as no data is transmitted to any server.
Supports visualization of objects and relationships between them.
Easily load JSON files,and it provides a relationship diagram as per OASIS standards
Installation
Install the package via npm:

`npm install stix2vis`

### Usage

`import React from 'react';`  
`import StixViewerView from 'stix2vis';`

`const App = () => {`  
`return (`  
`<div>`  
`<StixViewerView stixJson={data}/>`  
`</div>`  
`);`  
`}`  
`export default App;`

### Props

stixJson (required): The STIX 2.1 JSON data to visualize. If not provided, the component will render a sample json file,
wrapStyle: style object that covers the style of outer wrapper of the visualisation
graphStyle: style object that covers the style of the visualiser
onNodeclick: A callback function that is called when a node is clicked

### Example

`import React from 'react';`  
`import StixViewerView from 'stix2vis';`  
`import stixData from './data/sample_stix_data.json'; // Example JSON data`

`const App = () => {`  
`return (`  
`<div>`  
`<StixViewerView stixJson={stixData} wrapStyle={{backgroundColor:'white'}} graphStyle={{backgroundColor:'white'}} onNodeclick = ()=>{}/>`  
`</div>`  
`);`  
`}`  
`export default App;`

### Demo

You can find a live demo of this component at https://github.com/navaneeth001/STIX2viz

### Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
This project is inspired by the STIX Visualization project from the OASIS CTI Open Repository. Special thanks to the contributors of that project.

Support
For any questions or support, please open an issue on GitHub.

### Author

Navaneeth001 / navaneethpqln@gmail.com

Version
Current version: 1.0.4

Changelog
1.0.4 (2024-07-18): Initial release.

### Roadmap

Add support for custom styling options.
Make new views for selected node view
Incoming and outgoing connecting view.
Improve performance for handling large JSON datasets.
Enhance accessibility features.
Integrate with other STIX-related tools and libraries.
