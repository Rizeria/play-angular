import { Action, createReducer, on } from "@ngrx/store";
import { addPerson } from "./person.actions";


export const initialPerson: any = {};

const _personReducser = createReducer(
    initialPerson,
    // on(addPerson, state => ({...state, name: state.name, age: state.age }))
    // on(addPerson, (state, Person) => ({ ...state, Person }))
    // on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
    on(addPerson, (state, { person }) => ({ ...state, person }))
);

export function personReducser(state: any | undefined, action: Action) {
    return _personReducser(state, action);
}