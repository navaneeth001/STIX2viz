# Stix2Vis: Visualize STIX Data with Ease!

![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&ts=1683906897&type=6e&v=0.1.19&x2=0)

### This React component enables developers to generate STIX2 visualizations from STIX 2 JSON files within their React applications. It is inspired by the STIX Visualization project from the OASIS CTI Open Repository ***https://oasis-open.github.io/cti-stix-visualization/***

![Sample rendering of a STIX2 Json indicating malware, indicators and identity](/public/stix2.png)

### Features

Rapid visualization of STIX 2.0 content using D3.js library.
100% browser-based, ensuring data privacy as no data is transmitted to any server.
Supports visualization of objects and relationships between them.
Easily load JSON files,and it provides a relationship diagram as per oasis standards
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

stixJson (required): The STIX 2 JSON data to visualize. If not provided, the component will render a sample json file,
wrapStyle: style object that covers the style of outer wrapper of the visualisation
graphStyle: style object that covers the style of the visualiser

### Example

`import React from 'react';`  
`import StixViewerView from 'stix2vis';`  
`import stixData from './data/sample_stix_data.json'; // Example JSON data`

`const App = () => {`  
`return (`  
`<div>`  
`<StixViewerView stixJson={stixData} wrapStyle={{backgroundColor:'white'}} graphStyle={{backgroundColor:'white'}}/>`  
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
Current version: 0.1.12

Changelog
0.1.12 (2024-02-14): Initial release.

### Roadmap

Add support for custom styling options.
Make new views for selected node view
Incoming and outgoing connecting view.
Improve performance for handling large JSON datasets.
Enhance accessibility features.
Integrate with other STIX-related tools and libraries.
