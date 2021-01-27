import React from 'react';
import { render } from 'react-dom';
import { App } from './containers/app';
import './styles.css';

const app = document.getElementById('app');

render(<App />, app);
