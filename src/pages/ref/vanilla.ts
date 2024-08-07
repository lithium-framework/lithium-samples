import { html , ViewContext , ref , createRef } from '@lithium-framework/core';

export const sampleRef = html<ViewContext< {} , { [key:string]:any } >>`${( context ) => {

  const element_ref = createRef<HTMLDivElement>();
  
  return html`<div ${ref( element_ref )}>
    <p>${() => `Hello ref -> ${element_ref.value.constructor.name || 'unknown'}`}</p>
  </div>`;
  
}}`