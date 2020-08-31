import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
    public persondata = [];
  constructor(private myservice: MyserviceService) {}
  ngOnInit() {
    this.myservice.getData().subscribe((data) => {
    this.persondata = Array.from(Object.keys(data), k=>data[k]);
    console.log(this.persondata);
  });
  }
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex,
    event.currentIndex);
    } else {
    transferArrayItem(event.previousContainer.data,
    event.container.data,
    event.previousIndex,
    event.currentIndex);
    }
  }

}
