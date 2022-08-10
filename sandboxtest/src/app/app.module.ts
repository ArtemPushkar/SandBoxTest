import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { MainComponent } from "./Main/main.component";
import { Str1Component } from "./str1/str1.component";
import { Str2Component } from "./str2/str2.component";
import { MenuComponent } from "./menu/menu.component";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "one", component: Str1Component },
  { path: "second", component: Str2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Str1Component,
    Str2Component,
    MenuComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
