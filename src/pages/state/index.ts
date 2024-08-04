import { render , html , style } from '@lithium-framework/core';

import { sampleState } from './vanilla';
import "./webComponent";

const StateSample = html`<div style = ${style({ padding : '10px' , border : '1px solid black' })}>
    <div>
        <h1>Vanilla</h1>
        ${ sampleState }
    </div>
    <div>
        <h1>WebComponent</h1>
        <sample-state></sample-state>
    </div>
</div>`;

render( StateSample );