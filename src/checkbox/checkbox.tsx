import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'checkbox-gamefinder',
  styleUrl: 'checkbox.css',
  shadow: true,
})
export class input {
  @Prop() variant: string = 'light';  
  @Prop() color: string;
  @Event()gfClick: EventEmitter<boolean>;
  

  handleClick() {
    this.gfClick.emit(true)
}



  render() {

    return(
        <input type='checkbox' class='checkbox'></input>
        )
  }
}