import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'dropdown-list-gamefinder',
  styleUrl: 'dropdownList.css',
  shadow: true,
})
export class input {
  @Prop({mutable: true}) value: string = ''   
  @Prop({mutable: true}) state: string;
  @Prop() color: string;
  @Prop() label: string;
  @Prop() disabled: boolean;
  @Prop() helptext: string = '';
  @Prop() placeholder: string = '';
  @Prop() icon: string;
  @Event() valueChange: EventEmitter;
  @Event()gfClick: EventEmitter<boolean>;
  

  handleChange(event) {
    const val = event.target.value;
    console.log(val);
    this.value = val;
    this.valueChange.emit(val);
  }
  handleClick() {
    this.gfClick.emit(true)
}

  render() {
    return(
        <div class='container-list'>
            <ul onClick={this.handleClick} >
                <slot></slot>
                
            </ul>
        </div>
        )
  }
}
