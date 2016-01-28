import {Component, OnInit, Inject} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Hello World!';

  constructor() {
  }

  ngOnInit() {
    this.title = 'Angular2 + Babel + SystemJS'
  }
}
