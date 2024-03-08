import { useState, useEffect } from 'react';
import { Post } from '../Post/Post';

import { useObtainPostsByCategory } from '../../hooks/useObtainPostsByCategory';
import './Posts.css';

export const Posts = ({ category }) => {
    const [posts, setPosts] = useState();
    const { posts: wordpressPosts } = useObtainPostsByCategory({ category });

    console.log({ wordpressPosts });

    useEffect(() => {
        if (wordpressPosts && wordpressPosts.length > 0) {
            setPosts(wordpressPosts.slice(0, 10));
        }
    }, [wordpressPosts]);

    return (
        <section className="Posts screen__wrapper">
            {posts?.map(post => (
                <Post detail={post} key={post.id} />
            ))}
        </section>
    );
};
