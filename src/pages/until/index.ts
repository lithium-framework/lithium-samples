import { render , html , style } from '@lithium-framework/core';

import { sampleUntil } from './vanilla';
import "./webComponent";

const UntilSample = html`<div style = ${style({ padding : '10px' , border : '1px solid black' })}>
    <div>
        <h1>Vanilla</h1>
        ${ sampleUntil }
    </div>
    <div>
        <h1>WebComponent</h1>
        <sample-until></sample-until>
    </div>
</div>`;

render( UntilSample );