import { html , WebComponent , until , customElement, ViewTemplate } from '@lithium-framework/core';

const template = html<SampleUntil>`${( context ) => {
  
  return html`<div>
    ${ until( context.preloadData , html`<p>⏳ loading ⏳</p>` ) }
  </div>`;
  
}}`;

@customElement({
  name : 'sample-until',
  template
})
export class SampleUntil extends WebComponent{

  preloadData:Promise<ViewTemplate> = new Promise(( next , reject ) => {
    setTimeout(() => {
        next( html`<p>✅ loaded ✅</p>` )
    } , 1000)
  })

}