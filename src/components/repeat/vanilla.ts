import { html , ComponentContext , repeat } from '@lithium-framework/core';

export const sampleRepeat = html<ComponentContext< {} , { [key:string]:any } >>`${( context ) => {
  
  return html`<div>
    <ul>
      ${ repeat(["A" , "B"] , html`<li>${ str => str }</li>` ) }
    </ul>
  </div>`;
  
}}`