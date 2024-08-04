import { render , html , ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element';

let userProfile = html<{ userId:string }>`${(context:ViewContext) => {
    return html`<p>${context.userId ? `UserId ${context.userId}` : `Users ( No userId )`}</p>`
}}`;

let users_router_config = [
    { 
        path : '*/' , 
        render : userProfile
    },
    { 
        path : '*/:userId' , 
        render : userProfile
    }
]

let home = html`<h1>Hello</h1>` ;
let users = html`<div>
    <h1>Users</h1>
    <lithium-router :config = ${users_router_config} ></lithium-router>
</div>` ;

let home_router_config = [
    { 
        path : '/' , 
        render : home
    },
    { 
        path : '/users/*' , 
        render : users
    },
];

const RouterSample = html`<div>
    <lithium-router :config = ${home_router_config} ></lithium-router>
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
    render( RouterSample , document.body );

    // render( html`<main-application :config = ${[
    //     {
    //         path : '/' ,
    //         name : 'home',
    //         render : html`<h1>Home</h1>`
    //     },
    //     { 
    //         path : '/users' , 
    //         name : 'users',
    //         render : html`<div>
    //             <h1>Users</h1>
    //             <lithium-router 
    //                 :config = ${[
    //                     { 
    //                         path : '/:userId' ,
    //                         render : RouterSample
    //                     }
    //                 ]} >
    //             </lithium-router>
    //         </div>` 
    //     },
    // ]}>
    // </main-application>` , document.body );

});
