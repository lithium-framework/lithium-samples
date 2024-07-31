import { html , asyncAppend , WebComponent , state , customElement } from '@lithium-framework/core';

const template = html<SampleAsyncAppend>`${( context ) => {
  
  return html`<div>
    ${ asyncAppend( context.preloadData , ( result ) => {
      return html`<p>time : ${result}</p>`
    } ) }
  </div>`;
  
}}`;

@customElement({
  name : 'sample-async-append',
  template
})
export class SampleAsyncAppend extends WebComponent{

  preloadData = new Promise(( next , reject ) => {
    setTimeout(() => {
        next( 1000 )
    } , 1000)
  })

}