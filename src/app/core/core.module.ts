import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { TokenInterceptorService } from './token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error-interceptor.service';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [ MatSnackBarModule ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorInterceptor,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
