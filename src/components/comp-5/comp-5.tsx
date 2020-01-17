import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-comp-5',
  styleUrl: 'comp-5.css',
  shadow: true
})
export class Comp5 {

  sayHi() {
    console.log('hi 5');
  }


  render() {
    return (
      <Host>
        <h4 onClick={() => this.sayHi()}>5</h4>
        <slot></slot>
      </Host>
    );
  }

}
