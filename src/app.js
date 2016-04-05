import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './hello.js';

console.log('mains');

render(<HelloWorld/>, document.getElementById('app'));
