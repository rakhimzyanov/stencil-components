import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-comp-10',
  styleUrl: 'comp-10.css',
  shadow: true
})
export class Comp10 {

  sayHi() {
    console.log('hi 10');
  }

  render() {
    return (
      <Host>
        <h4 onClick={() => this.sayHi()}>10</h4>
        <slot></slot>
      </Host>
    );
  }

}
