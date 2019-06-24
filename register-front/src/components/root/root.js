import React from 'react';
import './root.css';

export default class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div class='root'>
        <div class='header'>
          header
        </div>
        <div class='content'>
          {this.props.children}
        </div>
        <div class='bottom'>
          bottom
        </div>
      </div>
    );
  }
}
