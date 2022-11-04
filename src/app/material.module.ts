import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MaterialModule {}