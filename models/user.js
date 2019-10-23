// TODO: 代码审阅
import http from "./http"

let http_ = new http()

class User {

    async wechatLogin({
        code,
        data,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.post({
            url: `/v1/user/login`,
            header: { 'code': code },
            data,
            success,
            fail,
            complete
        })
        return true
    }

    async getDetail({
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.get({
            url: `/v1/user/`,
            success,
            fail,
            complete
        })
        return true
    }

    /**
     *
     * @param {*} data
     */
    async updateDetail({
        data,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.put({
            url: `/v1/user/`,
            data,
            success,
            fail,
            complete
        })
        return true
    }

    async follow({
        uid,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.put({
            url: `/v1/user/follow`,
            header: { 'user_id': uid },
            success,
            fail,
            complete
        })
        return true
    }

    async unfollow({
        uid,
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.put({
            url: `/v1/user/unfollow`,
            header: { 'user_id': uid },
            success,
            fail,
            complete
        })
        return true
    }

    async getFollowers({
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.get({
            url: `/v1/user/login`,
            success,
            fail,
            complete
        })
        return true
    }

    async getFollowed({
        success = null,
        fail = null,
        complete = null
    }) {
        const res = await http_.get({
            url: `/v1/user/login`,
            success,
            fail,
            complete
        })
        return true
    }
}

export default new User