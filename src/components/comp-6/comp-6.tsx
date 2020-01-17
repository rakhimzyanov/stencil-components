import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-comp-6',
  styleUrl: 'comp-6.css',
  shadow: true
})
export class Comp6 {

  sayHi() {
    console.log('hi 6');
  }


  render() {
    return (
      <Host>
        <h4 onClick={() => this.sayHi()}>6</h4>
        <slot></slot>
      </Host>
    );
  }

}
