import { html , asyncAppend , WebComponent , state , customElement } from '@lithium-framework/core';

const template = html`${( context:SampleAsyncAppend ) => {
  
  return html`<div>
    ${ asyncAppend( context.preloadData , ( result ) => {
      return html`<p>time : ${result}ms</p>`
    } ) }
  </div>`;
  
}}`;

@customElement({
  name : 'sample-async-append',
  template
})
export class SampleAsyncAppend extends WebComponent{

  preloadData:Promise<number> = new Promise(( next , reject ) => {
    setTimeout(() => {
        next( 1000 )
    } , 1000)
  })

}