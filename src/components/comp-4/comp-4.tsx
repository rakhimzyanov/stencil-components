import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-comp-4',
  styleUrl: 'comp-4.css',
  shadow: true
})
export class Comp4 {

  sayHi() {
    console.log('hi 4');
  }


  render() {
    return (
      <Host>
        <h4 onClick={() => this.sayHi()}>4</h4>
        <slot></slot>
      </Host>
    );
  }

}
