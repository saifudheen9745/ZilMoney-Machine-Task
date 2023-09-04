import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() name:string
  @Input() placeholder:string
  @Output() searchKeyEmit:EventEmitter<{value:string,name:string}> = new EventEmitter()

  emitKey(event:KeyboardEvent){
    this.searchKeyEmit.emit({
      value: (event.target as HTMLInputElement).value,
      name: (event.target as HTMLInputElement).name
    });
  }

}
