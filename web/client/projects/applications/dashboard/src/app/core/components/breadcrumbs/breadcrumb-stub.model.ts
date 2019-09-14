export class BreadcrumbStub {
  public text: string;
  public url: string | string[];
  public iconClass: string

  constructor(text: string, url: string | string[], iconClass?: string) {
    this.text = text;
    this.url = url;
    this.iconClass = iconClass || '';
  }
}