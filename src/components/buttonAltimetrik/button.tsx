import { Component, Prop, Element, State, h } from '@stencil/core';

@Component({
  tag: 'button-gamefinder',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {

  @Prop() variant: string = 'primary';
  @Prop() icon: string;
  @Prop() disabled: boolean;
  @Prop() onClick = () => {}
  @Prop() size: string = 'large';
  

  @Element() host: HTMLElement;
  @State() childrenData: any = {};

componentDidLoad() {
  console.log('CHILDREN', this.host.innerHTML ? true : false)
}

  buttonClass = {
      primary: 'primary',
      secondary: 'secondary',
  }
  buttonSizeClass = {
    small: 'small',
    large: 'large',
  }

  camelize(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      });
  }

  render() {
      const camelizedVariant = this.camelize(this.variant)
      const camelizedSize = this.camelize(this.size)
      const isDisabledClass = this.disabled ? `${camelizedVariant}Disabled` : camelizedVariant
      const hasTextClass = !this.host.innerHTML ? 'noPadding' : ''

      return (
          <button disabled={this.disabled} onClick={this.onClick.bind(this)} class={`${this.buttonClass[camelizedVariant]} ${this.buttonSizeClass[camelizedSize]}`}>
             <div class={`defaultButton ${hasTextClass}`}>
                  <p><slot/></p>
              </div> 
          </button>
      )
  }
}
