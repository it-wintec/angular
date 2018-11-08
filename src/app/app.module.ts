import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CustomMaterialModule} from './custom-material/custom-material.module';

import 'hammerjs';

import {JackService} from './Services/jack.service';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {MainComponent} from './components/main/main.component';
import { HeroComponent } from './components/hero/hero.component';

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'hero', component: HeroComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        MainComponent,
        HeroComponent,
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false}
        ),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        CustomMaterialModule
    ],
    providers: [JackService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
