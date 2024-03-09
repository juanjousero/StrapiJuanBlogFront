import { toDate } from '../../utils/transforms';
import { Avatar } from '../Avatar/Avatar';
import { Divider } from '../Divider/Divider';

import './Author.css';

export const Author = ({ author, date }) => {
    const { avatar_URL: avatarImage, first_name: firstName, last_name: lastName } = author;
    const transformedDate = toDate(date);
    const firstNameLength = firstName.split(' ').length;
    const lastNameModified = lastName.split(' ')[0];

    const userName = firstNameLength > 1 ? firstName : `${firstName} ${lastNameModified}`;

    return (
        <div className="Author">
            <div className="AvatarName">
                <Avatar author={firstName} url={avatarImage} />
                <h5>{userName}</h5>
            </div>
            <Divider space={0} width="48px" />
            <p className="Note-text">{transformedDate}</p>
        </div>
    );
};
