export class Notepad {
  constructor(
    public id: number,
    public status: string,
    public title: string,
    public body: string,
    public views: number,
    public first_view ) {}
}
