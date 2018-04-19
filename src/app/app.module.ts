import { ToastrService } from './common/toastr.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/event-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import {EventsListResolverService} from './events-list-resolver.service';

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
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventsListResolverService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

  export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?') ;
    return true;
    }
