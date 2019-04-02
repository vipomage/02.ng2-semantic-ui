import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SuiModule } from "ng2-semantic-ui";
import { SuiSidebarComponent } from "./sui-sidebar/sui-sidebar.component";
import { SuiSearchComponent } from "./sui-search/sui-search.component";
import { HttpClientModule } from "@angular/common/http";
import { LandingComponent } from "./landing/landing.component";
import { SuiCalendarComponent } from "./sui-calendar/sui-calendar.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SuiSidebarComponent,
    SuiSearchComponent,
    LandingComponent,
    SuiCalendarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SuiModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
