import axios from 'axios';

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

export async function getReplies() {}

export async function getUserTimeline() {}

export function getPosts() {}

export async function getPostLikes() {}

export async function followUser() {}

export async function unfollowUser() {}

export async function getPostReposts() {}

export async function getUserFollowers() {}

export async function getFriends() {}

export async function getUserSuggestions() {}

export async function getTrends() {}

export async function getSearchResults() {}

export async function likePost() {}

export async function unlikePost() {}

export async function unrepostPost() {}

export async function repostPost() {}

export async function updateUserDetails(user) {
    await client.post('/api/updateuser', user);
}

export async function createPost() {}

export async function getPostById() {}
