import { html , ComponentContext , style } from '@lithium-framework/core';

export const sampleState = html<ComponentContext< {} , { [key:string]:any } >>`${( context ) => {

  let [ counter , setCounter ] = context.createState<number>( "counter" , 0 );

  return html`<div style = ${style({ display : 'inline-flex' , gap : '10px' })} >
      <button @mousedown=${() => setCounter( counter + 1 )}>Add</button>
      <p>${ counter }</p>
  </div>`;

}}`