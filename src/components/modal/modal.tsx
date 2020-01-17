import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';
import { TestUser } from './TestUser';

@Component({
  tag: 'my-modal',
  styleUrl: 'modal.css',
  shadow: true,
  // scoped: true,
  // styles: 'my-modal > * { display: none }'
})
export class Modal {

  @State() isHover: boolean = false;

  @Prop() open = false;
  @Prop() transparent = false;

  @Event() openChange: EventEmitter<boolean>;

  user: TestUser;

  // @Watch('open')
  // openModal(_newValue: boolean, _oldValue: boolean) {
  //   console.log(this.open)
  // }

  divMouseleave() {
    this.isHover = false;
  }

  divMouseenter() {
    this.isHover = true;
  }

  divClick() {
    console.log('handle click');
  }

  public render() {
    const css = `
      my-modal > * {
        color: green;
      }
    `
    return (
      <div>
        <style>{css}</style>

        <div class="hover-div" onMouseEnter={() => this.divMouseenter()} onMouseLeave={() => this.divMouseleave()} onClick={() => this.divClick()} >
          {this.isHover ? <div class="hidden-div">is hover</div> : null}
        </div>

        <div class={'overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '')}>
          <div class="modal-window">
            <header class="modal-window__header">
              header
              <button onClick={() => this.close()}>close</button>
            </header>
            <div class="modal-window__content">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>

    )
  }

  private close() {
    this.open = false;
    this.openChange.emit(false);
  }

}
