import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = "";
  @Input()
  contentTitle:string = "";
  @Input()
  contentText: string = "";
  private id:string | null= "0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
      )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.find(article => article.id === id);

    if(result){
      this.contentTitle = result.title;
      this.photoCover = result.photo;
      this.contentText = result.description;
    } else{
      console.error(Error.name);
    }
  }

}
