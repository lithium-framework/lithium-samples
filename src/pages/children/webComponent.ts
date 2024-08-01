import { html , WebComponent , state , children , repeat , customElement , elements } from '@lithium-framework/core';

const template = html<SampleAsyncAppend>`${( context ) => {
  
  return html`<div>
    <ul ${children({ property : "listItems" , filter: elements('li') })} >
      ${ repeat( [ 'A' , 'B' ] , html<string>`<li>${ str => str }</li>` ) }
    </ul>
    ${() => {
      return html`<p>total nodes : (${ context.listItems.length })</p>`
    }}
  </div>`;
  
}}`;

@customElement({
  name : 'sample-children',
  template
})
export class SampleAsyncAppend extends WebComponent{

  @state listItems = [];

}