import { render , html , style } from '@lithium-framework/core'

import { sampleChildren } from "./vanilla";
import "./webComponent";

const ChildrenSample = html`<div style = ${style({ padding : '10px' , border : '1px solid black' })}>
    <div>
        <h1>Vanilla</h1>
        ${ sampleChildren }
    </div>
    <div>
        <h1>WebComponent</h1>
        <sample-children></sample-children>
    </div>
</div>`;

render( ChildrenSample );