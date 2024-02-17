import './SearchBar.css';

export const SearchBar = ({ onSubmit }) => (
    <form className="SearchBar" onChange={onSubmit}>
        <input maxLength={50} />
    </form>
);
