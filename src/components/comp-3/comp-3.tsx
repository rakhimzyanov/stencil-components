import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-comp-3',
  styleUrl: 'comp-3.css',
  shadow: true
})
export class Comp3 {

  sayHi() {
    console.log('hi 3');
  }


  render() {
    return (
      <Host>
        <h4 onClick={() => this.sayHi()}>3</h4>
        <slot></slot>
      </Host>
    );
  }

}
