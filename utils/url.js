let basePath = 'https://naturetrail.finelyteam.com';
let article = basePath + '/article/'
let search = basePath + 'search'

let urlList = {
    getArticles: {
        url: article,
        method: 'GET',
        dataType: 'json',
        responseType: 'json'
    },
    searchArticle: {
        url: search,
        method: 'GET',
        dataType: 'json',
        responseType: 'json'
    },
    publish: {
        url: article,
        method: 'POST',
        dataType: 'json',
        responseType: 'json'
    },
    delete:  {
        url: article,
        method: 'DELETE',
        dataType: 'json',
        responseType: 'json'
    },
    like: {
        method: 'PUT',
        dataType: 'json',
        responseType: 'json'
    },
    unlike: {
        method: 'PUT',
        dataType: 'json',
        responseType: 'json'
    },
    show: {
        method: 'PUT',
        dataType: 'json',
        responseType: 'json'
    },
    hide: {
        method: 'PUT',
        dataType: 'json',
        responseType: 'json'
    },
    login: {},
    getUserDetail: {},
    updateUserDetail: {},
    follow: {},
    unfollow: {},
    getFollowers: {},
    getFollowed: {},
}

module.exports = {
  urlList: urlList
}