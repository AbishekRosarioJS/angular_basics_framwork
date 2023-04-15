import { Component } from "@angular/core";

@Component({
    selector:".app-server",
    template:`<p>i am the server Component...with a template & style propertie</p>`,
    styles:[
        `p{
            padding:20px;
            margin-left:20px;
            background-color:mistrose;
            border:1px solid red;
        }`
    ]
})


export class ServerComponet{

}