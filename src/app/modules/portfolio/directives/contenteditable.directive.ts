import {Directive, ElementRef, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appContenteditable]',
  host: {
    '(keyup)': 'onKeyUp()'
  }
})
export class ContenteditableDirective {

  @Input('contenteditableModel') model: any;
  @Output('contenteditableModelChange') update = new EventEmitter();

  private lastViewModel: any;


  constructor(private elRef: ElementRef) {
  }

  ngOnChanges(changes: {[key: string]: SimpleChanges}) {
    console.log(changes);
  }

  onKeyUp() {
    const value = this.elRef.nativeElement.innerText;
    this.lastViewModel = value;
    this.update.emit(value);
  }

  private refreshView() {
    this.elRef.nativeElement.innerText = this.model
  }

}
