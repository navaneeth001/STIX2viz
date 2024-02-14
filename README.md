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

bash
Copy code
npm install react-stix2-visualization
Usage
jsx
Copy code
import React from 'react';
import STIX2Visualization from 'react-stix2-visualization';

const App = () => {
return (

<div>
<h1>STIX2 Visualization</h1>
<STIX2Visualization />
</div>
);
}

export default App;
Props
data (optional): The STIX 2 JSON data to visualize. If not provided, the component will allow users to upload a file, paste JSON text, or provide a URL for an external JSON file.
Example
jsx
Copy code
import React from 'react';
import STIX2Visualization from 'react-stix2-visualization';
import stixData from './data/sample_stix_data.json'; // Example JSON data

const App = () => {
return (

<div>
<h1>STIX2 Visualization</h1>
<STIX2Visualization data={stixData} />
</div>
);
}

export default App;
Demo
You can find a live demo of this component here.

Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
This project is inspired by the STIX Visualization project from the OASIS CTI Open Repository. Special thanks to the contributors of that project.

Support
For any questions or support, please open an issue on GitHub.

Author
Your Name

Version
Current version: 1.0.1

Changelog
1.0.1 (YYYY-MM-DD): Initial release.
Roadmap
Add support for custom styling options.
Improve performance for handling large JSON datasets.
Enhance accessibility features.
Integrate with other STIX-related tools and libraries.
