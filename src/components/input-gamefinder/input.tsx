import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'textfield-gamefinder',
  styleUrl: 'input.css',
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

  handleChange(event) {
    const val = event.target.value;
    console.log(val);
    this.value = val;
    this.valueChange.emit(val);
  }

  render() {
    const searchIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.99999C5.67392 1.99999 4.40215 2.52677 3.46447 3.46446C2.52678 4.40214 2 5.67391 2 6.99999C2 8.32607 2.52678 9.59784 3.46447 10.5355C4.40215 11.4732 5.67392 12 7 12C8.32608 12 9.59785 11.4732 10.5355 10.5355C11.4732 9.59784 12 8.32607 12 6.99999C12 5.67391 11.4732 4.40214 10.5355 3.46446C9.59785 2.52677 8.32608 1.99999 7 1.99999ZM2.20582e-07 6.99999C2.1098e-06 5.89125 0.263375 4.79837 0.768432 3.81134C1.27349 2.82431 2.00578 1.97138 2.90501 1.32276C3.80423 0.674152 4.84467 0.24842 5.94064 0.080626C7.03661 -0.0871681 8.15676 0.00777569 9.20885 0.357639C10.2609 0.707502 11.2149 1.30228 11.9921 2.09298C12.7693 2.88369 13.3476 3.84771 13.6794 4.90567C14.0111 5.96362 14.0868 7.08524 13.9001 8.17816C13.7135 9.27108 13.27 10.304 12.606 11.192L17.707 16.292C17.8946 16.4795 18.0001 16.7339 18.0002 16.9991C18.0003 17.2644 17.895 17.5188 17.7075 17.7065C17.52 17.8941 17.2656 17.9996 17.0004 17.9997C16.7351 17.9998 16.4806 17.8945 16.293 17.707L11.193 12.607C10.1525 13.3853 8.91592 13.8587 7.62167 13.9741C6.32741 14.0895 5.02658 13.8424 3.86481 13.2604C2.70304 12.6784 1.72618 11.7846 1.0436 10.6789C0.361026 9.57321 -0.000325925 8.29938 2.20582e-07 6.99999Z" fill="#939393"/>
    </svg>
    switch(this.state) {
        case 'error':
            return(
                <div>
                    <div class={`container error-container ${this.disabled && 'disabled'}`}>
                        <input value={this.value} onInput={event => this.handleChange(event)} class='default-input' placeholder={this.placeholder} disabled={this.disabled}></input><span>{searchIcon}</span></div>
                    <p class='help-text error'>{this.helptext}</p>
                </div>
                )
        default:
            return(
                <div>
                    <div class={`container ${this.disabled && 'disabled'}`}>
                        <input value={this.value} onInput={event => this.handleChange(event)} class='default-input' placeholder={this.placeholder} disabled={this.disabled}></input><span>{searchIcon}</span></div>
                    <p class='help-text'>{this.helptext}</p>
                </div>
                )
    }
  }
}
