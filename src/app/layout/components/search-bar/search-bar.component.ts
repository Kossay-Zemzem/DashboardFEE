import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  searchQuery: string = '';
  @Input() placeholderText: string = "Chercher...";

  onSearch(): void {
    this.searchEvent.emit(this.searchQuery);
  }
}
