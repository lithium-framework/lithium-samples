import { html , WebComponent , when , customElement, state } from '@lithium-framework/core';

const template = html<SampleUntil>`${( context ) => {

  const preloadData = new Promise(( next , reject ) => {
    setTimeout(() => {
        next( 1000 )
    } , 1000)
  });

  preloadData.then( ( result ) => {
    context.isLoaded = true;
  } )
  
  return html`<div>
    ${ when( !context.isLoaded , html`<p>⏳ loading ⏳</p>` ) }
    ${ when( context.isLoaded , html`<p>✅ loaded ✅</p>` ) }
  </div>`;
  
}}`;

@customElement({
  name : 'sample-when',
  template
})
export class SampleUntil extends WebComponent{

  @state isLoaded:boolean = false;

}