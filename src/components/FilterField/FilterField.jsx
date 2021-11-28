import s from './FilterField.module.css';
import PropTypes from 'prop-types';
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import contactsActions  from '../../redux/contacts/contacts-actions'; 
import { getFilter } from '../../redux/contacts/contacts-selectors';


const FilterField = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();


  return (
    <div className={s.filterWrapper}>
    <TextField id="outlined-basic" label="Find contacts by name" variant="outlined" className={s.filterInput} type="text" value={filter} onChange={({target}) => dispatch(contactsActions.changeFilter(target.value))}/>
    </div>
  )
}

FilterField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default FilterField;