import { html , WebComponent , when , customElement, state } from '@lithium-framework/core';

const template = html<SampleUntil>`${( context ) => {

  const preloadData = new Promise(( next , reject ) => {
    setTimeout(() => {
        next( 1000 )
    } , 1000)
  });

  preloadData.then( ( result ) => {
    context.data = result;
  } )
  
  return html`<div>
    ${ when( !context.data , html`<p>...loading...</p>` ) }
    ${ when( context.data , html`<p>${context.data}</p>` ) }
  </div>`;
  
}}`;

@customElement({
  name : 'sample-when',
  template
})
export class SampleUntil extends WebComponent{

  @state data = null;

}