import './Button.css';

export const Button = ({ children, onClick }) => (
  <button className="Button" onClick={onClick}>
    {children}
  </button>
);
