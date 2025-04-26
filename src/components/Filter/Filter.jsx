import PropTypes from "prop-types";
import css from './Filter.module.css';

export const Filter = ({filterHandler}) => {
  return (
    <>
      <label
        htmlFor="filter-input"
        className={css.inputLabel}
      >
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        id="filter-input"
        className={css.input}
        onChange={(e) => {
          e.preventDefault();
          filterHandler(e);
        }}
        pattern="^[a-zA-Zа-яА-Я\s'-]*$"
        title="Search may contain only letters, apostrophe, dash and spaces."
      />
    </>
  );
};

Filter.propTypes = {
    filterHandler: PropTypes.func.isRequired,
}