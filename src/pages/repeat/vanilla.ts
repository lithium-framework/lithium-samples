import { html , ViewContext , repeat } from '@lithium-framework/core';

export const sampleRepeat = html<ViewContext< {} , { [key:string]:any } >>`${( context ) => {
  
  return html`<div>
    <ul>
      ${ repeat(["A" , "B"] , html`<li>${ str => str }</li>` ) }
    </ul>
  </div>`;
  
}}`