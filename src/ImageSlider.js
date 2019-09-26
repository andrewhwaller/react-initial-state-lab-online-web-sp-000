// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  render() {
    return (
      'I am on slide <CURRENT_SLIDE>'
    )
  }
}
