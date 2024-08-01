import { html , WebComponent , createRef , ref , customElement } from '@lithium-framework/core';

const template = html<SampleAsyncAppend>`${( context ) => {
  
  return html`<div ${ref( context.element_ref )}>
    <p>${() => `Hello ref -> ${context.element_ref.value.constructor.name || 'unknown'}`}</p>
  </div>`;
  
}}`;

@customElement({
  name : 'sample-ref',
  template
})
export class SampleAsyncAppend extends WebComponent{

  element_ref = createRef<HTMLDivElement>();

}