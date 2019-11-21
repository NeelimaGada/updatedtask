import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription, timer } from 'rxjs';
import {switchMap} from 'rxjs/operators'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  res;
  dis: any;
  neelu: Subscription;

  constructor(private s:DataService) { }
  GetData() {
    this.neelu=timer(0,10000).pipe(switchMap(()=>this.s.getData())).subscribe(response=>{this.res=response['hits']
    console.log(response)})
  }
  set(set) {
    this.dis=set
    this.s.postData(set).subscribe(response1=>console.log(response1))
  }
  ngOnInit() {
   this.GetData()
    
  }

}
