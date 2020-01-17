import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-comp-7',
  styleUrl: 'comp-7.css',
  shadow: true
})
export class Comp7 {

  sayHi() {
    console.log('hi 7');
  }


  render() {
    return (
      <Host>
        <h4 onClick={() => this.sayHi()}>7</h4>
        <slot></slot>
      </Host>
    );
  }

}
