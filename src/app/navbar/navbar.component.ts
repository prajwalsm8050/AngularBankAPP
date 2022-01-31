import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { flatMap } from 'rxjs';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  constructor(private dataservice: DataserviceService) { }

  isSignedIn = false

  ngOnInit(): void {
    this.isSignedIn = this.dataservice.isSignedIn;
  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    throw new Error('Method not implemented.');
    this.isSignedIn =  this.dataservice.isSignedIn;
  }

}
