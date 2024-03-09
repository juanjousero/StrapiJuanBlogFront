import { useEffect, useState } from 'react';
import { getPostsEndpoint } from '../api/posts';

export const useObtainPosts = () => {
    const [posts, setPosts] = useState();

    const storagePosts = ({ posts }) => {
        console.log({ posts });
        return posts?.map(post => ({
            id: post.ID,
            description: post.excerpt,
            author: post.author,
            postDate: post.date,
            title: post.title,
            image: post.post_thumbnail,
            tags: post.tags,
            categories: post.categories,
            content: post.content,
        }));
    };

    useEffect(() => {
        fetch(getPostsEndpoint)
            .then(response => response.json())
            .then(data => setPosts(storagePosts(data)));
    }, []);

    return { posts };
};
