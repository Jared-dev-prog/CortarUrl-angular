import { Component } from '@angular/core';
import { UrlShortService } from 'src/app/services/url-short.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css'],
})
export class ShortUrlComponent {
  urlEntered: string = '';
  urlCut: string = '';
  urlProcessed: boolean = false;
  loading: boolean = false;
  alert: boolean = false;
  errorMessage: string = '';

  constructor(private _urlShortService: UrlShortService) {}

  public urlToCut(): void {
    if (this.urlEntered === '') {
      this.showError('The url is empty');
    }

    this.urlProcessed = false;
    this.loading = true;

    setTimeout(() => {
      this.showResult();
    }, 2000);
  }

  public showResult(): void {
    this._urlShortService.getUrlShort(this.urlEntered).subscribe({
      next: (data) => {
        this.urlCut = data.link;
        this.urlProcessed = true;
        this.loading = false;
        this.urlEntered = '';
      },
      error: (error) => {
        this.loading = false;
        console.log(error);
        if (error.error.description === 'The value provided is invalid.') {
          this.showError('The url is invalid.');
          this.urlEntered = '';
        }
      },
    });
  }

  public showError(e: string) {
    this.alert = true;
    this.errorMessage = e;
    setTimeout(() => {
      this.alert = false;
    }, 3000);

    return;
  }
}
