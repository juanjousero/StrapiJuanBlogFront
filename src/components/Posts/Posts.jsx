import { useState, useEffect } from 'react';
import { Post } from '../Post/Post';
import mockedData from '../../mocks/posts.json';

import './Posts.css';
import { useObtainPosts } from '../../hooks/useObtainPosts';

export const Posts = () => {
    const [posts, setPosts] = useState();
    const { posts: wordpressPosts } = useObtainPosts();

    console.log({ wordpressPosts });

    useEffect(() => {
        if (wordpressPosts && wordpressPosts.length > 0) {
            setPosts(wordpressPosts.slice(0, 10));
        }
    }, [wordpressPosts]);

    // useEffect(() => {
    //     setPosts(mockedData.posts);
    // }, []);

    return (
        <section className="Posts screen__wrapper">
            {posts?.map(post => (
                <Post detail={post} key={post.id} />
            ))}
        </section>
    );
};
