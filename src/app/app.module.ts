import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {StoreModule, INITIAL_STATE} from '@ngrx/store';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {counterReducer} from "./app.reducer";
import {initialState} from "./app.states";

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
	IonicModule.forRoot(MyApp),
	//O Objeto 'reducers' deve conter um reducer para cada parametro definido no estado
	StoreModule.forRoot({
		counter: counterReducer
	})
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
	{ provide: ErrorHandler, useClass: IonicErrorHandler },
	// O intialState deve ser uma função que retorna um objeto tipo 'State',
	// inicializado com os valores defaults
        {provide: INITIAL_STATE, useFactory: initialState}
    ]
})
export class AppModule {
}
