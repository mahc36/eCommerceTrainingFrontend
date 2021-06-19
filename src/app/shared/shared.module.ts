import { NgModule } from '@angular/core';
import { NotFoundComponent } from './https-states/not-found/not-found.component';
import { ForbiddenComponent } from './https-states/forbidden/forbidden.component';

@NgModule({
  declarations: [NotFoundComponent, ForbiddenComponent],
  imports: [],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
