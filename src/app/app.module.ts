import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponet } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { EasterBindingComponent } from './easter-binding/easter-binding.component';
import { EasterPropertyComponent } from './easter-property/easter-property.component';
import { EasterEventBindingComponent } from './easter-event-binding/easter-event-binding.component';
import { EasterPassingdataEventComponent } from './easter-passingdata-event/easter-passingdata-event.component';
import { EasterTwowayDatabindingComponent } from './easter-twoway-databinding/easter-twoway-databinding.component';
import { EasterBindingsComponent } from './easter-bindings/easter-bindings.component';
import { EasterEmptybindingComponent } from './easter-emptybinding/easter-emptybinding.component';
import { EasterNgforComponent } from './easter-ngfor/easter-ngfor.component';
import { EasterNgIfComponent } from './easter-ng-if/easter-ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponet,
    ServersComponent,
    EasterBindingComponent,
    EasterPropertyComponent,
    EasterEventBindingComponent,
    EasterPassingdataEventComponent,
    EasterTwowayDatabindingComponent,
    EasterBindingsComponent,
    EasterEmptybindingComponent,
    EasterNgforComponent,
    EasterNgIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
