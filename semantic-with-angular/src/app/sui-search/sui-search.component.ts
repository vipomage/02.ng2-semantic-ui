import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Result {
  name:string;
}
@Component({
  selector: "app-sui-search",
  templateUrl: "./sui-search.component.html",
  styleUrls: ["./sui-search.component.css"]
})



export class SuiSearchComponent implements OnInit {
  private ghApi: string = "https://api.github.com";
  private template:Result;
  private last;

  constructor(private http: HttpClient) {}

  optionsSearch = (query: string) =>
    this.http
      .get(`${this.ghApi}/search/repositories?q=${query}&order=desc`)
      .toPromise()
      .then(res => new Promise(resolve => resolve(res["items"])));

  ngOnInit() {}
}
