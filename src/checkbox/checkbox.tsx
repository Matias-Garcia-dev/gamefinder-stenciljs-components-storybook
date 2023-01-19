import { Component, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'checkbox-gamefinder',
  styleUrl: 'checkbox.css',
  shadow: true,
})
export class input {
  @Event()gfClick: EventEmitter<boolean>;
  handleClick() {
    this.gfClick.emit(true)
}



  render() {

    return(
        <input type='checkbox' onClick={this.handleClick}></input>
        )
  }
}