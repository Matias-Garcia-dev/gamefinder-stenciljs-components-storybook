import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'chip-gamefinder',
  styleUrl: 'chip.css',
  shadow: true,
})
export class input {
  @Prop() variant: string = 'light';  
  @Prop() color: string;
  @Event()gfClick: EventEmitter<boolean>;
  

  handleClick() {
    this.gfClick.emit(true)
}

chipClass = {
    light: 'light',
    green: 'green',
    dark: 'dark',

};

camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  };

  render() {
    const camelizedVariant = this.camelize(this.variant);

    return(
        <div class={`container ${this.chipClass[camelizedVariant]}`}>
            <h3 class='ranking-number'></h3><span class='text'><slot></slot></span>
        </div>
        )
  }
}
