import './Post.css';

export const Post = ({ detail }) => {
    const { img, title, description } = detail;

    return (
        <article className="Post">
            {img && <img src={img} />}
            <div className="Post-container">
                <h3>{title}</h3>
                <p className="Post-container__note">{description}</p>
            </div>
        </article>
    );
};
