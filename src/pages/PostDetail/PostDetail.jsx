import { useState, useEffect } from 'react';
import { useObtainPostById } from '../../hooks/useObtainPostById';
import { Hero } from '../../components/Hero/Hero';

import './PostDetail.css';

export const PostDetail = () => {
    const [post, setPost] = useState();
    const postId = window.location.href.split('/').at(-1);

    const { post: wordpressPost } = useObtainPostById(postId);

    useEffect(() => {
        if (wordpressPost) setPost(wordpressPost);
    }, [wordpressPost]);

    console.log({ postId, wordpressPost });

    return (
        <div className="PostDetail">
            <section className="PostDetail-Hero">
                <Hero
                    backgroundImage={post.image.URL}
                    title={post.title}
                    backgroundType="dark"
                    textPlacement="leftDown"
                />
            </section>
        </div>
    );
};
