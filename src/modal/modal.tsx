import { Component, h, EventEmitter, Element, Method, Event, Prop } from '@stencil/core';

@Component({
  tag: 'modal-gamefinder',
  styleUrl: 'modal.css',
  shadow: true,
})
export class input {
    @Prop() variant: string = 'small';
    @Prop() titleModal: string = '';
  @Event() gfClick: EventEmitter<boolean>;
  handleClick() {
    this.gfClick.emit(true)
}
@Element()
  element: HTMLElement;
  @Event()
  modalClosed: EventEmitter;

  @Event()
  modalOpened: EventEmitter;

@Method()
async close() {
  document.body.classList.remove('st-modal--is-open');
  this.element.classList.remove('st-modal--open');

  this.modalClosed.emit('closed');
}

@Method()
async open() {
  document.body.classList.add('st-modal--is-open');
  this.element.classList.add('st-modal--open');

  this.modalOpened.emit();
}


  render() {

    return(
        <div class={`container${this.variant}`}>
            <h1>{this.titleModal}</h1>
        </div>
        )
  }
}