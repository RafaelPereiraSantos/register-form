import React from 'react';
import './field.css'; 

export default class Field extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      value: e.target.value
    });

    this.props.onValueChange(this.state.value)
  }

  render() {
    return(
      <div class='field-container'>
        <p class='item'>{this.props.name}</p>
        <input type='text' class='item' onChange={this.handleChange}/>
      </div>
    );
  }
}
