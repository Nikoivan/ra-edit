import { ActionTypes } from '../actions';

export type FormStateProps = {
  price: number;
  title: string;
};

export type PriceItemProps = FormStateProps & {
  id: string;
};

export type GlobalStateProps = {
  formState: FormStateProps;
  priceList: PriceItemProps[];
  currentId: number | null;
  search: string;
  searchList: PriceItemProps[];
};

type ActionChangeForm = {
  type: ActionTypes.CHANGE_FORM;
  payload: { name: string; value: string | number };
};
type ActionWithoutPaylaod = {
  type: ActionTypes.CLEAR_FORM | ActionTypes.CREATE_SERVICE_ITEM;
};
type ActionOpenEdit = {
  type: ActionTypes.OPEN_TO_UPDATE_SERVICE_ITEM;
  payload: PriceItemProps;
};
type ActionDeleteItem = {
  type: ActionTypes.DELETE_SERVICE_ITEM;
  payload: { id: string };
};
export type ActionFilterChange = {
  type: ActionTypes.FILTER_CHANGE;
  payload: { search: string };
};

export type ActionAllTypes =
  | ActionChangeForm
  | ActionWithoutPaylaod
  | ActionOpenEdit
  | ActionDeleteItem
  | ActionFilterChange;
