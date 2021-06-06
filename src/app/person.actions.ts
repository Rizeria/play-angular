import { createAction, props } from "@ngrx/store";
import { Person } from "./person.model";

export const addPerson = createAction('[add person] with oject', props<{ person: Person }>());