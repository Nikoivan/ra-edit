import { ActionTypes } from './actions';
import { nanoid } from 'nanoid';

export type FormStateProps = {
  price: number;
  title: string;
};

export type PriceItemProps = FormStateProps & {
  id: string;
};

export type InitialStateProps = {
  formState: FormStateProps;
  priceList: PriceItemProps[];
};

const initialFormState = {
  price: 0,
  title: '',
};

const initialState: {
  formState: FormStateProps;
  priceList: PriceItemProps[];
  currentId: number | null;
} = {
  formState: initialFormState,
  priceList: [],
  currentId: null,
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

type ActionAllTypes =
  | ActionChangeForm
  | ActionWithoutPaylaod
  | ActionOpenEdit
  | ActionDeleteItem;

export default function editReducer(
  state = initialState,
  action: ActionAllTypes
) {
  switch (action.type) {
    case ActionTypes.CHANGE_FORM:
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.payload.name]: action.payload.value,
        },
      };

    case ActionTypes.CREATE_SERVICE_ITEM:
      return {
        ...state,
        priceList: [
          ...state.priceList,
          { ...state.formState, id: state.currentId || nanoid(4) },
        ],
        formState: initialFormState,
        currentId: null,
      };

    case ActionTypes.CLEAR_FORM:
      return {
        ...state,
        formState: initialFormState,
      };

    case ActionTypes.OPEN_TO_UPDATE_SERVICE_ITEM:
      return {
        ...state,
        formState: { price: action.payload.price, title: action.payload.title },
        currentId: action.payload.id,
        priceList: state.priceList.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case ActionTypes.DELETE_SERVICE_ITEM:
      return {
        ...state,
        priceList: state.priceList.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}
