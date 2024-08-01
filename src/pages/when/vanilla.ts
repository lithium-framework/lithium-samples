import { html , ComponentContext , when, ViewTemplate } from '@lithium-framework/core';

export const sampleWhen = html<ComponentContext< {} , { [key:string]:any } >>`${( context ) => {

  let [ data , setData ] = context.createState('data' , null);

  const preloadData = new Promise(( next , reject ) => {
    setTimeout(() => {
        next( 1000 )
    } , 1000)
  });

  preloadData.then( ( result ) => {
    setData( result );
  } )
  
  return html`<div>
    ${ when( !data , html`<p>...loading...</p>` ) }
    ${ when( data , html`<p>${data}</p>` ) }
  </div>`;
  
}}`