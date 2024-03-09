import { Tags } from '../Tags/Tags';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import './Post.css';
import { Author } from '../Author/Author';

export const Post = ({ detail }) => {
    const { id, image, title, content: description, tags, author, postDate } = detail;

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
                <Author author={author} date={postDate} />
                <div className="Post-container__note">{parse(description)}</div>
            </div>
            <Link to={`/${id}`}>Ver post</Link>
        </article>
    );
};
