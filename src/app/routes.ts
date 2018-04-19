import {Error404Component} from './errors/404/404.component';
import {Routes} from '@angular/router';
import {
  CreateEventComponent,
  EventsListComponent, EventsListResolverService
} from './events';
import {EventDetailsComponent, EventRouteActivatorService} from './events/event-details';

export const appRoutes: Routes = [
  {
    path: 'events', component: EventsListComponent,
    resolve: {events: EventsListResolverService}
  },
  {
    path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];
