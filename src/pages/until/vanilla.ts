import { html , ComponentContext , until, ViewTemplate } from '@lithium-framework/core';

export const sampleUntil = html<ComponentContext< {} , { [key:string]:any } >>`${( context ) => {

  const preloadData:Promise<ViewTemplate> = new Promise(( next , reject ) => {
    setTimeout(() => {
        next( html`<p>✅ loaded ✅</p>` )
    } , 1000)
  })
  
  return html`<div>
    ${ until( preloadData , html`<p>⏳ loading ⏳</p>` ) }
  </div>`;
  
}}`