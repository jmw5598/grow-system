import { animate, query, style, transition, trigger } from '@angular/animations';

export const FadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0}),
    animate('300ms', style({ opacity: 1}))
  ]),
  transition(':leave', [
    style({ opacity: 1}),
    animate('300ms', style({ opacity: 0}))
  ])
]);
