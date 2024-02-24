import { Tag } from '../Tag/Tag';

import './Tags.css';

export const Tags = ({ tags }) => {
    const tagsKeys = Object.keys(tags);

    return (
        <div className="Tags">
            {tagsKeys?.map(tag => (
                <Tag key={tag} type={tag} />
            ))}
        </div>
    );
};
