import { Component, OnInit, OnChanges, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  innerWidth: number;
  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    this.onResize();
  }
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
