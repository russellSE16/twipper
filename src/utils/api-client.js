import axios from 'axios';
import { queryClient } from '../AppProviders';

const client = axios.create();

export async function authenticate() {
    return await client.get("/auth/login")
    .then(res => res.data.user);
}

export async function login(payload) {
    await client.post('/auth/login', payload);
    window.location.pathname = '/'; //Refreshes page after making the post request for login
}

export async function signup(payload) {
    await client.post('/auth/signup', payload);
    window.location.assign('/settings/profile?redirected=true'); 
}

export async function logout() {
    await client.get('/auth/logout');
    window.location.pathname = '/'; //Refreshes page after logout
}

export async function getNotifications() {}

export function readNotification() {}

export async function getPost() {}

export async function getReplies(postId) {
    return await client.get(`/api/post/${postId}/replies`)
    .then(res => res.data.posts);
}

export async function getUserTimeline() {}

export async function getPosts({ pageParam = 1}) {
    return await client.get(`/api/home_timeline?p=${pageParam}`)
    .then(res => res.data.posts);
}

export async function getPostLikes(postId) {
    return await client.get(`/api/post/${postId}/likes`)
    .then(res => res.data.users);
}

export async function followUser(username) {
    await client.get(`/api/follow/${username}`);
    await queryClient.invalidateQueries('Posts');
    await queryClient.invalidateQueries('UserSuggestions');
}

export async function unfollowUser(username) {
    await client.get(`/api/unfollow/${username}`);
    await queryClient.invalidateQueries('Posts');
    await queryClient.invalidateQueries('UserSuggestions');
}

export async function getPostReposts(postId) {
    return await client.get(`/api/post/${postId}/reposts`)
    .then(res => res.data.users);
}

export async function getUserFollowers() {}

export async function getFriends() {}

export async function getUserSuggestions() {
    return await client.get('/api/users')
    .then(res => res.data.users);
}

export async function getTrends() {
    return await client.get('/api/trends')
    .then(res => res.data.trends);
}

export async function getSearchResults(query) {
    return await client.get(`/api/search?q=${encodeURIComponent(query)}`)
    .then(res => res.data);
}

export async function likePost(post) {
    await client.get(`/api/like/${post.id_str}`);
    await queryClient.invalidateQueries('Posts');
    await queryClient.invalidateQueries('PostDetail');

}

export async function unlikePost(post) {
    await client.get(`/api/unlike/${post.id_str}`);
    await queryClient.invalidateQueries('Posts');
    await queryClient.invalidateQueries('PostDetail');
}

export async function unretweetPost(post) {
    await client.post('/api/unrepost', post);
    await queryClient.invalidateQueries('Posts');
    await queryClient.invalidateQueries('PostDetail');
}

export async function retweetPost(post) {
    await client.post('/api/repost', post);
    await queryClient.invalidateQueries('Posts');
    await queryClient.invalidateQueries('PostDetail');
}

export async function updateUserDetails(user) {
    await client.post('/api/updateuser', user);
    await queryClient.invalidateQueries('AuthProvider');//Added to solve issue when updating profile of old data remaining until refresh
}

export async function createPost(post, url = '/api/post') {
    await client.post(url, post);
    await queryClient.invalidateQueries('Posts');
}

export async function getPostById(postId) {
    return await client.get(`/api/post/${postId}`)
    .then(res => res.data.post);
}
