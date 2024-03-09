import { Image } from '../Image/Image';

import './Avatar.css';

export const Avatar = ({ url, author }) => <Image src={url} altText={`Avatar from ${author}`} className="Avatar" />;
