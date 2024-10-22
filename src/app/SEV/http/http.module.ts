// src/app/http/http.module.ts
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule], // Asegúrate de exportarlo
})
export class HttpModule {}
