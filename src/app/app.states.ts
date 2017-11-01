// Criando a interface do estado da aplicação
// Nesse exemplo só tenho uma variavel - o contador que aparece napagina Home
export interface State {
	counter: number;
}

// Definindo o estado inicial
export const initialState = (): State => {
	return { counter: 0 }
};

// As constantes que representam o estado
export const INCREMENT_COUNTER: string = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER: string = 'DECREMENT_COUNTER';
export const RESET_COUNTER: string = 'RESET_COUNTER';
