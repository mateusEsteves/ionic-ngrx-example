import { RESET_COUNTER } from './../../app/app.states';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {INCREMENT_COUNTER, State, DECREMENT_COUNTER} from "../../app/app.states";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	changeDetection: ChangeDetectionStrategy.OnPush
	// A estratégia de detecção de mudanças 'OnPush' garante que os filhos
	// desse componente só serão verificados e modificados caso os objetos
	// passados à eles tenham mudado neste componente, evitando assim
	// que o angular atualize todos os componentes filhos somente para
	// verificar se houve alguma mudança nos parametros dos objetis passados
	// os componentes filhos. Fonte:
	// https://angular-2-training-book.rangle.io/handout/change-detection/
})
export class HomePage {
	public counter: Observable<number>;

	constructor(
		public navCtrl: NavController,
		private store: Store<State>
	) {
		this.counter = this.store.select('counter');
	}

	// Despachando ações

	increment(){
		this.store.dispatch({type: INCREMENT_COUNTER});
	}

	decrement(){
		this.store.dispatch({type: DECREMENT_COUNTER});
	}

	reset() {
		this.store.dispatch({ type: RESET_COUNTER });
	}
}
