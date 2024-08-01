import { html , asyncAppend , WebComponent , repeat , customElement } from '@lithium-framework/core';

const template = html<SampleRepeat>`${( context ) => {
  
  return html`<div>
    <ul>
      ${ repeat(["A" , "B"] , html`<li>${ str => str }</li>` ) }
    </ul>
  </div>`;
  
}}`;

@customElement({
  name : 'sample-repeat',
  template
})
export class SampleRepeat extends WebComponent{

}