import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  https://github.com/kadoshms/ionic2-autocomplete
*/
@Injectable()
export class SearchDataProvider {
  labelAttribute = "name";

  constructor(public http: Http) {
    console.log('Hello SearchDataProvider Provider');
  }

  // TODO: let server filter results.
  getResults(keyword:string) {
    return this.http.get("https://restcountries.eu/rest/v1/name/"+keyword)
    .map(
      result =>
      {
        return result.json()
          .filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
      });        
      
  }
}
