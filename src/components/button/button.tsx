import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'shared-button',
  styleUrl: 'button.css',
  shadow: false
})
export class HelloButton {

  fixedName = 'fixed name';

  @Prop() name: string;
  @Event() clickBtn: EventEmitter;


  render() {
    return (
      <button class="my-btn" onClick={() => this.testBtnClick()}>
        {this.fixedName} {this.name} <slot />
      </button>
    );
  }

  private testBtnClick() {
    this.clickBtn.emit({test: 222})
  }

}
