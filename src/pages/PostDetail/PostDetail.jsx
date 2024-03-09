import { useState, useEffect } from 'react';
import { useObtainPostById } from '../../hooks/useObtainPostById';
import parse from 'html-react-parser';
import { Hero } from '../../components/Hero/Hero';

import './PostDetail.css';
import { defaultHeroBackground } from '../../utils/constants';

export const PostDetail = () => {
    const [post, setPost] = useState();
    const postId = window.location.href.split('/').at(-1);

    const { post: wordpressPost } = useObtainPostById(postId);

    useEffect(() => {
        if (wordpressPost) setPost(wordpressPost);
    }, [wordpressPost]);

    console.log({ postId, wordpressPost });

    if (post) {
        return (
            <div className="PostDetail">
                <section className="PostDetail-Hero">
                    <Hero
                        backgroundImage={post?.image?.URL ? post.image.URL : defaultHeroBackground}
                        title={post.title}
                        backgroundType="dark"
                        textPlacement="leftDown"
                    />

                    <div className="PostDetail-Description screen__wrapper">{parse(post.content)}</div>
                </section>
            </div>
        );
    }
};
