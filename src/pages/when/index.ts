import { render , html , style } from '@lithium-framework/core';

import { sampleWhen } from './vanilla';
import "./webComponent";

const WhenSample = html`<div style = ${style({ padding : '10px' , border : '1px solid black' })}>
    <div>
        <h1>Vanilla</h1>
        ${ sampleWhen }
    </div>
    <div>
        <h1>WebComponent</h1>
        <sample-when></sample-when>
    </div>
</div>`;

render( WhenSample );