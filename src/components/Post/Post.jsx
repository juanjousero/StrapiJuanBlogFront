import './Post.css';

export const Post = ({ detail }) => {
    const { image, title, content: description } = detail;

    return (
        <article className="Post">
            {image && <img src={image?.URL} />}
            <div className="Post-container">
                <h3>{title}</h3>
                <p className="Post-container__note">{description}</p>
                {/* {description} */}
            </div>
        </article>
    );
};
