import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // private observable = new Observable();
//  private data: Observable<string>;
//   private fruits: Array<string> = [];

  constructor(){
    const observable = Observable.create((observer: Observer<string>)=>
    {
      setTimeout(() => {
        observer.next( "first" );
        },2000);
        setTimeout(() => {
        observer.next( "second" );
        },4000);
        setTimeout(() => {
        observer.complete();
        },5000);
      }); 
     observable.subscribe(
        (data:string)=> {console.log(data)},
        (error : string) => { console.log(error) } ,
       // error => this.anyErrors = true,
        () => { console.log("completed")}
      );
   }
  
  ngOnInit(){}
  }
 
 
 
