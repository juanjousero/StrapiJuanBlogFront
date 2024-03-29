const baseURL = 'https://public-api.wordpress.com/rest/v1.1/sites/juanliblog7.wordpress.com/';

export const getPostsEndpoint = baseURL + 'posts/';

export const getPostsByCategoryEndpoint = category => baseURL + `posts/?category=${category}`;

export const getPostEndpointById = id => baseURL + `posts/${id}`;
