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
import { ElevatorComponent } from './elevator/elevator.component';
import { StackOverflowComponent } from './stack-overflow/stack-overflow.component';
import { MusicAppComponent } from './music-app/music-app.component';
import { MasterGridComponent } from './master-grid/master-grid.component';
import { AlbumLayoutsComponent } from './album-layouts/album-layouts.component';
import { CardioComponent } from './cardio/cardio.component';
import { FlexFundamentalsComponent } from './flex-fundamentals/flex-fundamentals.component';
import { FlexNavbarComponent } from './flex-navbar/flex-navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlexMobileLayoutComponent } from './flex-mobile-layout/flex-mobile-layout.component';
import { CodepenComponent } from './codepen/codepen.component';
import { ResponsiveWebsiteComponent } from './responsive-website/responsive-website.component';
import { FullyBleedBlogLayoutComponent } from './fully-bleed-blog-layout/fully-bleed-blog-layout.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'youtube-layout', component: YoutubeLayoutComponent },
    { path: 'medium-layout', component: MediumLayoutComponent },
    { path: 'page-layout', component: PageLayoutComponent },
    { path: 'template-area', component: GridTemplateAreaComponent },
    { path: 'auto-fit', component: AutoFitComponent },
    { path: 'image-grid', component: ImagesGridComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'elevator', component: ElevatorComponent },
    { path: 'stackoverflow', component: StackOverflowComponent },
    { path: 'music-app', component: MusicAppComponent },
    { path: 'master-grid', component: MasterGridComponent},
    { path: 'albumn-layout', component: AlbumLayoutsComponent },
    { path: 'cardio', component: CardioComponent },
    { path: 'flex-fundamentals', component: FlexFundamentalsComponent },
    { path: 'flex-navbar', component: FlexNavbarComponent },
    { path: 'flex-mobile-layout', component: FlexMobileLayoutComponent },
    { path: 'codepen', component: CodepenComponent },
    { path: 'responsive', component: ResponsiveWebsiteComponent },
    { path: 'blog', component: FullyBleedBlogLayoutComponent }
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
        CalculatorComponent,
        ElevatorComponent,
        StackOverflowComponent,
        MusicAppComponent,
        MasterGridComponent,
        AlbumLayoutsComponent,
        CardioComponent,
        FlexFundamentalsComponent,
        FlexNavbarComponent,
        FlexMobileLayoutComponent,
        CodepenComponent,
        ResponsiveWebsiteComponent,
        FullyBleedBlogLayoutComponent
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes), AngularFontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
