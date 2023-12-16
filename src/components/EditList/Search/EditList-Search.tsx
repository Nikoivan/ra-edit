import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './EditList-Search.css';
import { GlobalStateProps } from '../../../redux/types/editListReducer-Types';
import { changeFilter } from '../../../redux/editListFunctions';

const EditListSearch = () => {
  const { search } = useSelector(
    (state: { editListState: GlobalStateProps }) => state.editListState
  );
  const dispatch = useDispatch();

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    changeFilter(dispatch)(e.target.value);
  };

  return (
    <div className='EditList-Search'>
      <h3 className='Search-Title'>Filter</h3>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
        }}
        className='Search-Form'
      >
        <input
          onChange={onChangeSearch}
          type='text'
          name='search'
          value={search}
          className='Search-Input'
        />
      </form>
    </div>
  );
};

export default EditListSearch;
