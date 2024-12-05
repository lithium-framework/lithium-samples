import { html , ViewContext , style } from '@lithium-framework/core';

export const sampleState = html<ViewContext< { states : { counter : number }} , { [key:string]:any } >>`${( context ) => {

  let [ counter , setCounter ] = context.bindState<number>( "counter" , 0 );

  return html`<div style = ${style({ display : 'inline-flex' , gap : '10px' })} >
      <button @mousedown=${() => setCounter( context.states.counter + 1 )}>Add</button>
      <p>${ counter }</p>
  </div>`;

}}`