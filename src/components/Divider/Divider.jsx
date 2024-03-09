import './Divider.css';

export function Divider({ space, width = '100%' }) {
    return <hr style={{ margin: `${space}px 0px`, width }} className="Divider" />;
}
