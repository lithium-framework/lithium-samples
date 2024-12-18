import { html , ViewContext , when, ViewTemplate } from '@lithium-framework/core';

export const sampleWhen = html<ViewContext< {} , { [key:string]:any } >>`${( context ) => {

  let [ isLoaded , setLoading ] = context.bindState<boolean>('data' , false);

  const preloadData:Promise<number> = new Promise(( next , reject ) => {
    setTimeout(() => {
        next( 1000 )
    } , 1000)
  });

  preloadData.then( ( result ) => {
    setLoading( true );
  } )
  
  return html`<div>
    ${ when( !isLoaded , html`<p>⏳ loading ⏳</p>` ) }
    ${ when( isLoaded , html`<p>✅ loaded ✅</p>` ) }
  </div>`;
  
}}`