import { render , html , style } from '@lithium-framework/core'

import './webComponent';
import { sampleAsyncAppend } from './vanilla';

const AsyncAppendSample = html`<div style = ${style({ padding : '10px' , border : '1px solid black' })}>
    <div>
        <h1>Vanilla</h1>
        ${ sampleAsyncAppend }
    </div>
    <div>
        <h1>WebComponent</h1>
        <sample-async-append></sample-async-append>
    </div>
</div>`;

render( AsyncAppendSample )