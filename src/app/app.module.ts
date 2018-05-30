///<reference path="events/event-details/event-details.component.ts"/>
import { ToastrService } from './common/toastr.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404/404.component';
import {
  CreateEventComponent,
  EventsListComponent, EventsListResolverService, EventThumbnailComponent
} from './events';
import {EventsAppComponent} from './events-app.component';
import {EventDetailsComponent, EventRouteActivatorService} from './events/event-details';
import {EventService} from './events/shared';
import {AuthService} from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventsListResolverService,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

  export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?') ;
    return true;
    }
