import { Tags } from '../Tags/Tags';
import './Post.css';

export const Post = ({ detail }) => {
    const { image, title, content: description, tags } = detail;

    console.log({ detail });

    return (
        <article className="Post">
            {image && (
                <div className="Post-image">
                    <img src={image?.URL} />
                    <Tags tags={tags} />
                </div>
            )}
            <div className="Post-container">
                <h3>{title}</h3>
                <p className="Post-container__note">{description}</p>
                {/* {description} */}
            </div>
        </article>
    );
};
