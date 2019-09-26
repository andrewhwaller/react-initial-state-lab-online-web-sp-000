// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <h1>I am on slide {this.currentSlideIndex}</h1>
    )
  }
}
