import { html , ViewContext , asyncAppend } from '@lithium-framework/core';

export const sampleAsyncAppend = html<ViewContext< {} , { [key:string]:any } >>`${( context ) => {

  const preloadData:Promise<number> = new Promise(( next , reject ) => {
    setTimeout(() => {
        next( 1000 )
    } , 1000)
  })
  
  return html`<div>
    ${ asyncAppend( preloadData , ( result ) => {
      return html`<p>time : ${result}ms</p>`
    } ) }
  </div>`;
  
}}`