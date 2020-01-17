import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-comp-1',
  styleUrl: 'comp-1.css',
  shadow: true
})
export class Comp1 {

  sayHi() {
    console.log('hi 1');
  }

  render() {
    return (
      <Host>
        <h4 onClick={() => this.sayHi()}>1</h4>
        <slot></slot>
      </Host>
    );
  }

}
