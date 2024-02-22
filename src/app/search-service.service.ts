import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor() { }
  private searchTermSubject=new BehaviorSubject<string>('');
  setSearchTerm(term:string){
    this.searchTermSubject.next(term)
  }
  getSearchTerm(){
    return this.searchTermSubject.asObservable();
  }

}
