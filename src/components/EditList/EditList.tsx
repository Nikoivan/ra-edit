import { useDispatch, useSelector } from 'react-redux';

import ListItem from '../ListItem/ListItem';
import { ChangeEvent, FormEvent } from 'react';
import {
  changeForm,
  clearForm,
  createPriceItem,
} from '../../redux/editListFunctions';
import './EditList.css';
import EditListSearch from './Search/EditList-Search';
import { GlobalStateProps } from '../../redux/types/editListReducer-Types';

export default function EditList() {
  const dispatch = useDispatch();
  const { formState, priceList, search, searchList } = useSelector(
    (state: { editListState: GlobalStateProps }) => state.editListState
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    changeForm(dispatch)(e.target.name, e.target.value);
  };

  const onSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    createPriceItem(dispatch)();
  };

  const onCancel = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    clearForm(dispatch)();
  };

  const { price, title } = formState;
  const servicesList = search !== '' ? searchList : priceList;

  return (
    <div className='EditList'>
      <header className='EditList-Header'>
        <EditListSearch />
        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
          }}
          className='Header-Form'
        >
          <input
            value={title}
            className='Form-Input'
            name='title'
            type='text'
            onChange={onChange}
          />
          <input
            value={price}
            type='number'
            name='price'
            className='Form-Input'
            onChange={onChange}
          />
          <button onClick={onSave} className='Form-Button'>
            Save
          </button>
          <button onClick={onCancel} className='Form-Button'>
            Cancel
          </button>
        </form>
      </header>
      <main className='EditList-Main'>
        <ul className='Main-List'>
          {servicesList.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </ul>
      </main>
    </div>
  );
}
