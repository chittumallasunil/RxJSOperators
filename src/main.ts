import { bootstrapApplication } from '@angular/platform-browser';
import { RxjsComponent } from './rxjs/rxjs.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(RxjsComponent,{
  providers: [provideHttpClient()]
});
