import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, openEditItem } from '../../redux/editListFunctions';
import { PriceItemProps, InitialStateProps } from '../../redux/editListReducer';
import './ListItem.css';

const ListItem = ({ price, title, id }: PriceItemProps) => {
  const dispatch = useDispatch();
  const { priceList } = useSelector(
    (state: { editListState: InitialStateProps }) => state.editListState
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
