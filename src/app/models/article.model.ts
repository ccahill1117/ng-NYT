export class Article {
  title: string = "";
  text: string = "";
  author: string = "";
  date: number = 0;


  constructor(public params) {
    this.title = params.title;
    this.text = params.text;
    this.author = params.text;
    this.date = params.date;

  }
}
