// TODO: 代码审阅
import http from "./http"

let http_ = new http()

class Article {

    async getArticles({
        city = 'Beijing',
        start = 0,
        count = 15,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.get({
            url: `/v1/article/?city=${city}&start=${start}&count=${count}`,
            success,
            fail,
            complete
        })
        return true
    }

    async search({
        q,
        city = 'Beijing',
        start = 0,
        count = 15,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.get({
            url: `/v1/article/search?q=${q}&city=${city}&start=${start}&count=${count}`,
            success,
            fail,
            complete
        })
        return true
    }

    async publish({
        data,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.post({
            url: `/v1/article/`,
            data,
            success,
            fail,
            complete
        })
        return true
    }

    async remove({
        aid,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.delete_({
            url: `/v1/article/${aid}`,
            success,
            fail,
            complete
        })
        return true
    }

    async like({
        aid,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.put({
            url: `/v1/article/${aid}/like`,
            success,
            fail,
            complete
        })
        return true
    }

    async unlike({
        aid,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.put({
            url: `/v1/article/${aid}/unlike`,
            success,
            fail,
            complete
        })
        return true
    }

    async show({
        aid,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.put({
            url: `/v1/article/${aid}/show`,
            success,
            fail,
            complete
        })
        return true
    }

    async hide({
        aid,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.put({
            url: `/v1/article/${aid}/hide`,
            success,
            fail,
            complete
        })
        return true
    }

    async getDetail({
        aid,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.get({
            url: `/v1/article/detail/${aid}`,
            success,
            fail,
            complete
        })
        return true
    }

    async getUserArticle({
        nickname,
        page = 0,
        count = 15,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.get({
            url: `/v1/article/${nickname}&page=${page}&count=${count}`,
            success,
            fail,
            complete
        })
        return true
    }
}

export default new Article