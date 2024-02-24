import { Tags } from '../Tags/Tags';
import parse from 'html-react-parser';
import './Post.css';

export const Post = ({ detail }) => {
    const { image, title, content: description, tags } = detail;

    const descriptionCleaned = console.log({ detail });

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
                <div className="Post-container__note">{parse(description)}</div>
            </div>
        </article>
    );
};
