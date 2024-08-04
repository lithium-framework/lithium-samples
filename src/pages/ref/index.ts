import { render , html , style } from '@lithium-framework/core'

import {sampleRef} from './vanilla';
import "./webComponent";

const RefSample = html`<div style = ${style({ padding : '10px' , border : '1px solid black' })}>
    <div>
        <h1>Vanilla</h1>
        ${ sampleRef }
    </div>
    <div>
        <h1>WebComponent</h1>
        <sample-ref></sample-ref>
    </div>
</div>`;

render( RefSample )