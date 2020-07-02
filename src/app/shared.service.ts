import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  @Output() naviagationReload: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public navigationReloadRequest(){
    this.naviagationReload.emit();
  }

  public navigationReloadRespond(){
    return this.naviagationReload;
  }

}
