import { html , ComponentContext , children , state , repeat , elements } from '@lithium-framework/core';

export const sampleChildren = html<ComponentContext< { listItems:HTMLElement[] } , {} >>`${( context ) => {

  context.createConsumable( 'listItems' , [] );
  
  return html`<div>
    <ul ${ children({ property : "listItems" , filter: elements('li') }) } >
      ${ repeat( [ 'A' , 'B' ] , html<string>`<li>${ str => str }</li>` ) }
    </ul>
    ${() => {
      return html`<p>total nodes : (${ context.listItems.length })</p>`
    }}
  </div>`;
  
}}`