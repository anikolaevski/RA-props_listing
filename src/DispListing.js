import React from 'react';
import PropTypes from 'prop-types';
// import shortid from 'shortid';

export class DispListing extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  render () {
    console.log(this.data);
    return (
      <div>
        <h2>The page is under development</h2>
      </div>
    );
  }
}
