import { Error404Component } from './errors/404/404.component';
import { Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/event-list/events-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent},
    { path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent,
        canActivate: [EventRouteActivatorService]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
];
