React STIX2 Visualization Component
This React component enables developers to generate STIX2 visualizations from STIX 2 JSON files within their React applications. It is inspired by the STIX Visualization project from the OASIS CTI Open Repository.

Features
Rapid visualization of STIX 2.0 content using D3.js library.
100% browser-based, ensuring data privacy as no data is transmitted to any server.
Supports visualization of objects and relationships between them.
Click on nodes or paths to view detailed information for the element.
Double-click to unpin a pinned node.
Easily load JSON files, paste JSON text, or provide the URL for an external JSON file.
Installation
Install the package via npm:

npm install stix2vis
Usage

import React from 'react';
import STIX2Visualization from 'stix2vis';

<!-- const App = () => {
return (

<div>
<STIX2Visualization stixJson={data}/>
</div>
);
} -->

export default App;

Props
data (optional): The STIX 2 JSON data to visualize. If not provided, the component will render a sample json file

Example
import React from 'react';
import Stixviewer from 'stix2vis';
import stixData from './data/sample_stix_data.json'; // Example JSON data

<!-- const App = () => {
return (

<div>
<STIX2Visualization stixJson={stixData} wrapStyle={{backgroundColor:'white'}} graphStyle={{backgroundColor:'white'}}/>
</div>
);
} -->

export default App;
Demo
You can find a live demo of this component at https://github.com/navaneeth001/STIX2viz

Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
This project is inspired by the STIX Visualization project from the OASIS CTI Open Repository. Special thanks to the contributors of that project.

Support
For any questions or support, please open an issue on GitHub.

Author
Navaneeth001 / navaneethpqln@gmail.com

Version
Current version: 1.0.2

Changelog
1.0.2 (2024-02-14): Initial release.
Roadmap
Add support for custom styling options.
Improve performance for handling large JSON datasets.
Enhance accessibility features.
Integrate with other STIX-related tools and libraries.
