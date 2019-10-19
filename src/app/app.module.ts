import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeoDbFreeModule } from 'wft-geodb-angular-client';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from "@angular/material";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { MeteoComponent } from './meteo/meteo.component';
import { ConvertIntPipe } from './convert-int.pipe';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { TodoComponent } from './todo/todo.component';
import { TestComponent } from './test/test.component';
import { AddtoComponent } from './todo/addto/addto.component';
import { AffichtodoComponent } from './todo/affichtodo/affichtodo.component';
import { ModiftodoComponent } from './todo/modiftodo/modiftodo.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FilterPipe } from './filter.pipe';
import { RegisterComponent } from './register/register.component';


registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SettingsComponent,
    MeteoComponent,
    ConvertIntPipe,
    TodoComponent,
    AddtoComponent,
    AffichtodoComponent,
    ModiftodoComponent,
    ConnexionComponent,
    FilterPipe,
    RegisterComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GeoDbFreeModule.forRoot({
      apiKey: null,
      serviceUri: "http://geodb-free-service.wirefreethought.com"
    }),
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CKEditorModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
