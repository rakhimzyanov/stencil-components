import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-comp-2',
  styleUrl: 'comp-2.css',
  shadow: true
})
export class Comp2 {

  sayHi() {
    console.log('hi 2');
  }


  render() {
    return (
      <Host>
        <h4 onClick={() => this.sayHi()}>2</h4>
        <slot></slot>
      </Host>
    );
  }

}
