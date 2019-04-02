import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SuiSearchComponent } from "./sui-search/sui-search.component";
import { LandingComponent } from "./landing/landing.component";
import { SuiCalendarComponent } from "./sui-calendar/sui-calendar.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "search", component: SuiSearchComponent },
  { path: "calendar", component: SuiCalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
