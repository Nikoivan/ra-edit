import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, openEditItem } from '../../redux/editListFunctions';

import './ListItem.css';
import {
  GlobalStateProps,
  PriceItemProps,
} from '../../redux/types/editListReducer-Types';

const ListItem = ({ price, title, id }: PriceItemProps) => {
  const dispatch = useDispatch();
  const { priceList } = useSelector(
    (state: { editListState: GlobalStateProps }) => state.editListState
  );

  const onEditClick = () => {
    const priceItemProps = priceList.find((item) => item.id === id);

    if (priceItemProps) {
      openEditItem(dispatch)(priceItemProps);
    }
  };

  const onDeleteClick = () => {
    deleteItem(dispatch)(id);
  };

  return (
    <div className='List-Item'>
      <span className='Item-Title'>{title}</span>
      <span className='Item-Price'>{price}</span>
      <span onClick={onEditClick} className='Item-Button'>
        &#9998;
      </span>
      <span onClick={onDeleteClick} className='Item-Button'>
        &#10006;
      </span>
    </div>
  );
};

export default ListItem;
