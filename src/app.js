import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './hello.js';

console.log('mainjs');

render(<HelloWorld/>, document.getElementById('app'));
