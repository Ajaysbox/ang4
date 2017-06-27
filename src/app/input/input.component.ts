import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

 customInputEvent = new EventEmitter()

  constructor() { }
  ngOnInit() {
  }
  addText(val:HTMLDataElement){
  console.log(val.value);
  this.customInputEvent.emit(val.value);
    //this.addedText.push(val.value);
    //   console.log(this.addedText)
   
  }
  removeText(){

  //  this.addedText.length>0?this.addedText.splice(this.addedText.length-1,1):null
    //console.log(this.addedText)
  }
}
