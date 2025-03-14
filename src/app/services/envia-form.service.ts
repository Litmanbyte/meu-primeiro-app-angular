import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormService {

  constructor() { }

  sentToBack() : void{
    console.log("finge que vai pro back");
  }
}
