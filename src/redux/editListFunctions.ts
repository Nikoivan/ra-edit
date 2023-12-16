import { ActionTypes } from './actions';
import {
  ActionAllTypes,
  ActionFilterChange,
  PriceItemProps,
} from './types/editListReducer-Types';

export type FormChangePayload = {
  name: string;
  value: string | number;
};

export type ReadableItemPayload = { id: string };

export type ActionBaseType = {
  type: ActionTypes;
};

export type ChangeFormAction = ActionBaseType & { payload: FormChangePayload };
export type ReadableItemAction = ActionBaseType & {
  payload: ReadableItemPayload;
};

export const changeForm =
  (dispatch: (action: ChangeFormAction) => void) =>
  (name: string, value: string) => {
    const action = {
      type: ActionTypes.CHANGE_FORM,
      payload: { name, value },
    };
    dispatch(action);
  };

export const createPriceItem =
  (dispatch: (action: ActionBaseType) => void) => () => {
    const action = {
      type: ActionTypes.CREATE_SERVICE_ITEM,
    };
    return dispatch(action);
  };

export const clearForm = (dispatch: (action: ActionBaseType) => void) => () => {
  const action = {
    type: ActionTypes.CLEAR_FORM,
  };
  return dispatch(action);
};

export const openEditItem =
  (
    dispatch: (action: { type: ActionTypes; payload: PriceItemProps }) => void
  ) =>
  (item: PriceItemProps) => {
    const action = {
      type: ActionTypes.OPEN_TO_UPDATE_SERVICE_ITEM,
      payload: item,
    };
    return dispatch(action);
  };

export const deleteItem =
  (
    dispatch: (action: { type: ActionTypes; payload: { id: string } }) => void
  ) =>
  (id: string) => {
    const action = {
      type: ActionTypes.DELETE_SERVICE_ITEM,
      payload: { id },
    };
    dispatch(action);
  };

export const changeFilter =
  (
    dispatch: (action: {
      type: ActionTypes;
      payload: { search: string };
    }) => void
  ) =>
  (value: string) => {
    const action = {
      type: ActionTypes.FILTER_CHANGE,
      payload: { search: value },
    };
    dispatch(action);
  };
