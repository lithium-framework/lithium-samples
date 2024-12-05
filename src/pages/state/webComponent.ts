import { html , style , WebComponent , state , customElement } from '@lithium-framework/core';

const template = html<MyCounter>`${( context ) => {
  
  return html`<div style = ${style({ display : 'inline-flex' , gap : '10px' })}>
      <button @mousedown=${() => { context.counter += 1 }}>Add</button>
      <p>${ context.counter }</p>
  </div>`;
  
}}`;

@customElement({
  name : 'sample-state',
  template
})
export class MyCounter extends WebComponent{

  @state() counter = 0;

}