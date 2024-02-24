import { useEffect, useState } from 'react';
import { getPostEndpointById, getPostsEndpoint } from '../api/posts';

export const useObtainPostById = id => {
    const [post, setPost] = useState();

    const storagePost = data => {
        return {
            id: data.ID,
            author: data.author,
            postDate: data.date,
            title: data.title,
            image: data.post_thumbnail,
            tags: data.tags,
            categories: data.categories,
            content: data.content,
        };
    };

    useEffect(() => {
        fetch(getPostEndpointById(id))
            .then(response => response.json())
            .then(data => {
                console.log({ data });
                setPost(storagePost(data));
            });
    }, []);

    return { post };
};
