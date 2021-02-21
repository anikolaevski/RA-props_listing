import React from 'react';

import './App.css';
import './css/main.css';
import { items } from './data';
import {DispListing} from './DispListing';

export default function App() {
  return (<DispListing items={items} />);
}
