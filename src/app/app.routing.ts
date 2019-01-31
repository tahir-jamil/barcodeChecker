import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { QrPageComponent } from "./qr-page/qr-page.component";
import { InputFieldComponent } from "./input-field/input-field.component";
import { SendReciveComponent } from "./send-recive/send-recive.component";


const routes: Routes = [
    { path: "", redirectTo: "/inputfield", pathMatch: "full" },
    { path: "qrpage", component:  QrPageComponent },
    { path: "inputfield", component:  InputFieldComponent },
    { path: "sendrecive", component:  SendReciveComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }