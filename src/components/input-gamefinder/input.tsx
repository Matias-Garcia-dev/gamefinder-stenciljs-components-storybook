import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'input-gamefinder',
  styleUrl: 'input.css',
  shadow: true,
})
export class input {
  @Prop() variant: string;
  @Prop() color: string;
  @Prop() label: string;
  @Prop() disable: boolean;
  @Prop() helpText: string;
  @Prop() placeholder: string = '';
  @Prop() icon: string;

  render() {
    return(<input placeholder={this.placeholder}></input>)
  }
}