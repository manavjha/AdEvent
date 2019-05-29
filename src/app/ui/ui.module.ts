import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, FooterComponent, HeaderComponent, SliderComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
