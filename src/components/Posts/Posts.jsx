import { useState, useEffect } from 'react';
import { Post } from '../Post/Post';
import mockedData from '../../mocks/posts.json';

import './Posts.css';

export const Posts = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        setPosts(mockedData.posts);
    }, []);

    return (
        <section className="Posts screen__wrapper">
            {posts?.map(post => (
                <Post detail={post} key={post.id} />
            ))}
        </section>
    );
};
