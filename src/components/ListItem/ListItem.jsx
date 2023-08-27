import PropTypes from 'prop-types';
import {
  ListItem,
  DeleteContactItem,
  ContactItem,
  DeleteButton,
} from './ListItem.styled';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem key={id}>
      <ContactItem>
        {name}: {number}
      </ContactItem>

      <DeleteContactItem onClick={() => onDelete(id)}>
        <DeleteButton>Delete</DeleteButton>
      </DeleteContactItem>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
