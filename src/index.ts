import { render , html , ViewTemplate , ComponentContext } from '@lithium-framework/core';
import { repeat , useState , style , asyncAppend , createRef , ref , until } from '@lithium-framework/core';

// import { sampleState } from './components/state/vanilla';
// import './components/state/webComponent';

// import { sampleAsyncAppend } from './components/asyncAppend/vanilla';
// import './components/asyncAppend/webComponent';

// import { sampleUntil } from './components/until/vanilla';
// import './components/until/webComponent';

// import { sampleRef } from './components/ref/vanilla';
// import './components/ref/webComponent';

// import { sampleRepeat } from './components/repeat/vanilla';
// import './components/repeat/webComponent';

// import { sampleWhen } from './components/when/vanilla';
// import './components/when/webComponent';

// import { sampleChildren } from './components/children/vanilla';
// import './components/children/webComponent';

// import "./index.scss";
// import { SampleRepeat } from './components/repeat/webComponent';

// let blocks_style = { padding : '10px' , border : '1px solid black' }

// const StateSample = html`<div style = ${style(blocks_style)}>
//     <div>
//         <h1>Vanilla</h1>
//         ${ sampleState }
//     </div>
//     <div>
//         <h1>WebComponent</h1>
//         <sample-state></sample-state>
//     </div>
// </div>`;

// const AsyncAppendSample = html`<div style = ${style(blocks_style)}>
//     <div>
//         <h1>Vanilla</h1>
//         ${ sampleAsyncAppend }
//     </div>
//     <div>
//         <h1>WebComponent</h1>
//         <sample-async-append></sample-async-append>
//     </div>
// </div>`;

// const UntilSample = html`<div style = ${style(blocks_style)}>
//     <div>
//         <h1>Vanilla</h1>
//         ${ sampleUntil }
//     </div>
//     <div>
//         <h1>WebComponent</h1>
//         <sample-until></sample-until>
//     </div>
// </div>`;

// const RefSample = html`<div style = ${style(blocks_style)}>
//     <div>
//         <h1>Vanilla</h1>
//         ${ sampleRef }
//     </div>
//     <div>
//         <h1>WebComponent</h1>
//         <sample-ref></sample-ref>
//     </div>
// </div>`;

// const RepeatSample = html`<div style = ${style(blocks_style)}>
//     <div>
//         <h1>Vanilla</h1>
//         ${ sampleRepeat }
//     </div>
//     <div>
//         <h1>WebComponent</h1>
//         <sample-repeat></sample-repeat>
//     </div>
// </div>`;

// const WhenSample = html`<div style = ${style(blocks_style)}>
//     <div>
//         <h1>Vanilla</h1>
//         ${ sampleWhen }
//     </div>
//     <div>
//         <h1>WebComponent</h1>
//         <sample-when></sample-when>
//     </div>
// </div>`;

// const ChildrenSample = html`<div style = ${style(blocks_style)}>
//     <div>
//         <h1>Vanilla</h1>
//         ${ sampleChildren }
//     </div>
//     <div>
//         <h1>WebComponent</h1>
//         <sample-children></sample-children>
//     </div>
// </div>`;

const RouterSample = html`<div>
    <lithium-router :config = ${[
        { path : '/' , render : html`<h1>Hello</h1>` },
        { path : '/users/*' , render : html`<div>
            <h1>Users</h1>
            <lithium-router :config = ${[
                { path : '*/:userId' , render : html<{ userId:string }>`${(context:ComponentContext) => {
                    return html`<p>userId ${context.userId}</p>`
                }}` }
            ]} ></lithium-router>
        </div>` },
    ]}></lithium-router>
</div>`;

// let ApplicationSample = html`<main-application
//     :title = ${'Test'}
//     :pageLayout = ${html`<h1>Hello World</h1>`}
//     :routes = ${[
//         { path: '', redirect: 'home' },
//         { path: 'home', title: 'Home', element: RouterSample },
//     ]} 
// >
// </main-application>`

document.addEventListener('DOMContentLoaded', () => {

    // render( StateSample , document.body );
    // render( AsyncAppendSample , document.body );
    // render( UntilSample , document.body );
    // render( RefSample , document.body );
    // render( RepeatSample , document.body );
    // render( WhenSample , document.body );
    // render( ChildrenSample , document.body );
    // render( RouterSample , document.body );

    render( html`<main-application :config = ${[
        {
            path : '/' ,
            name : 'home',
            render : html`<h1>Home</h1>`
        },
        { 
            path : '/users' , 
            name : 'users',
            render : html`<div>
                <h1>Users</h1>
                <lithium-router 
                    :config = ${[
                        { 
                            path : '/:userId' ,
                            render : RouterSample
                        }
                    ]} >
                </lithium-router>
            </div>` 
        },
    ]}>
    </main-application>` , document.body );

});
