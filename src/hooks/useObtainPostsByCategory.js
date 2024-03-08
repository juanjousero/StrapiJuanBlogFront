import { useEffect, useState } from 'react';
import { getPostsByCategoryEndpoint, getPostsEndpoint } from '../api/posts';

export const useObtainPostsByCategory = ({ category }) => {
    const [posts, setPosts] = useState();

    const storagePosts = ({ posts }) => {
        return posts?.map(post => ({
            id: post.ID,
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
        category
            ? fetch(getPostsByCategoryEndpoint(category))
                  .then(response => response.json())
                  .then(data => setPosts(storagePosts(data)))
            : fetch(getPostsEndpoint)
                  .then(response => response.json())
                  .then(data => setPosts(storagePosts(data)));
    }, []);

    return { posts };
};
