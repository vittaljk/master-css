import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { YoutubeLayoutComponent } from "./youtube-layout/youtube-layout.component";
import { MediumLayoutComponent } from "./medium-layout/medium-layout.component";
import { PageLayoutComponent } from "./page-layout/page-layout.component";
import { GridTemplateAreaComponent } from "./grid-template-area/grid-template-area.component";
import { AutoFitComponent } from './auto-fit/auto-fit.component';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'youtube-layout', component: YoutubeLayoutComponent },
    { path: 'medium-layout', component: MediumLayoutComponent },
    { path: 'page-layout', component: PageLayoutComponent },
    { path: 'template-area', component: GridTemplateAreaComponent },
    { path: 'auto-fit', component: AutoFitComponent },
    { path: 'image-grid', component: ImagesGridComponent },
    { path: 'calculator', component: CalculatorComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        YoutubeLayoutComponent,
        MediumLayoutComponent,
        PageLayoutComponent,
        GridTemplateAreaComponent,
        AutoFitComponent,
        ImagesGridComponent,
        CalculatorComponent
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
