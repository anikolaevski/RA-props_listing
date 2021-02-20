import React from 'react';

import './App.css';
import './css/main.css';
import { data } from './data';
import {DispListing} from './DispListing';

export default function App() {
  return (<DispListing data={data} />);
}
