import { render , html , style } from '@lithium-framework/core'

import { sampleRepeat } from './vanilla';
import "./webComponent";

const RepeatSample = html`<div style = ${style({ padding : '10px' , border : '1px solid black' })}>
    <div>
        <h1>Vanilla</h1>
        ${ sampleRepeat }
    </div>
    <div>
        <h1>WebComponent</h1>
        <sample-repeat></sample-repeat>
    </div>
</div>`;

render( RepeatSample );