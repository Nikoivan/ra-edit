import { ActionTypes } from './actions';
import { nanoid } from 'nanoid';
import {
  ActionAllTypes,
  GlobalStateProps,
} from './types/editListReducer-Types';

const initialFormState = {
  price: 0,
  title: '',
};

const initialState: GlobalStateProps = {
  formState: initialFormState,
  priceList: [],
  currentId: null,
  search: '',
  searchList: [],
};

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
        priceList: state.currentId
          ? [
              ...state.priceList,
              {
                title: state.formState.title,
                price: state.formState.price,
                id: state.currentId,
              },
            ]
          : state.priceList,
        formState: initialFormState,
        currentId: null,
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

    case ActionTypes.FILTER_CHANGE:
      return {
        ...state,
        search: action.payload.search,
        searchList: state.priceList.filter((item) =>
          item.title.includes(action.payload.search)
        ),
      };

    default:
      return state;
  }
}
