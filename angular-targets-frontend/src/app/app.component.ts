import { Component, OnInit, OnChanges, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  innerWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event);
    this.innerWidth = window.innerWidth;
  }
  ngOnInit() {}
}
