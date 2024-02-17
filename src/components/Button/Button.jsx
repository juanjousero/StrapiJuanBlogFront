import './Button.css';

export const Button = ({ children, onClick, type = 'primary' }) => (
    <button className={`Button Button-${type}`} onClick={onClick}>
        {children}
    </button>
);
