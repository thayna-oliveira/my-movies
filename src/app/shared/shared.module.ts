import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandComponent } from './components/brand/brand.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, BrandComponent],
  exports: [ButtonComponent, BrandComponent],
})
export class SharedModule {}
