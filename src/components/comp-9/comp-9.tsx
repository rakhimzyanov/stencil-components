import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-comp-9',
  styleUrl: 'comp-9.css',
  shadow: true
})
export class Comp9 {

  sayHi() {
    console.log('hi 9');
  }


  render() {
    return (
      <Host>
        <h4 onClick={() => this.sayHi()}>9</h4>
        <slot></slot>
      </Host>
    );
  }

}
