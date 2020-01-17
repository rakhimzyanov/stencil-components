import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-comp-8',
  styleUrl: 'comp-8.css',
  shadow: true
})
export class Comp8 {

  sayHi() {
    console.log('hi 8');
  }


  render() {
    return (
      <Host>
        <h4 onClick={() => this.sayHi()}>8</h4>
        <slot></slot>
      </Host>
    );
  }

}
