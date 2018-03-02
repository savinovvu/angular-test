export class Commentary {

  constructor(public title?: string,
              public likes?: number) {
    this.title = title;
    this.likes = likes ? likes : 0;
  }

}
