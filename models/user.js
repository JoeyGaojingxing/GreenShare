import http from "./http"

let http_ = new http()

class User {
    async test(id) {
        const res = await http_.test(`/user?${id}`)
        return res
    }

    async wechatLogin(data){}

    async getDetail() {}

    /**
     *
     * @param {*} data
     */
    async updateDetail(data) {}

    async follow() {}

    async unfollow() {}

    async getFollowers() {}

    async getFollowed() {}
}

export default new User
