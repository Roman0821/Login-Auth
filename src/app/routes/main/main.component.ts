import { Component } from '@angular/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  calendarPlugins = [timeGrigPlugin]; // important!
  calendarWeekends = true;
  aspectRatio = 4;

  eventSources: EventInput[] = [
    {
      events: [
        {
          title: 'Feedback',
          start: new Date(),
        }
      ],
      color: 'rgba(170, 180, 20, 0.35)',
      textColor: '#3c464b',
      borderColor: '#aab414',
    },
    {
      events: [
        {
          title: 'Visiting',
          start: new Date('2019-07-30 09:00:00'),
          end: new Date('2019-07-30 11:00:00'),
        }
      ],
      color: 'rgba(255, 185, 0, 0.35)',
      textColor: '#3c464b',
      borderColor: '#ffb900',
    },
    {
      events: [
        {
          title: 'Approved',
          start: new Date('2019-07-31 14:00:00'),
          end: new Date('2019-07-31 15:30:00'),
        }
      ],
      color: 'rgba(65, 170, 170, 0.35)',
      textColor: '#3c464b',
      borderColor: '#41aaaa',
    },
    {
      events: [
        {
          title: 'To be confirmed',
          start: new Date('2019-07-31 16:00:00'),
          end: new Date('2019-07-31 17:45:00'),
        }
      ],
      color: 'rgba(0, 95, 135, 0.35)',
      textColor: '#3c464b',
      borderColor: '#005f87',
    },
  ];
}
