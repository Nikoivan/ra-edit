import { combineReducers, legacy_createStore } from 'redux';
import editListReducer from './editListReducer';

export default function configureStore() {
  return legacy_createStore(
    combineReducers({
      editListState: editListReducer,
    })
  );
}
