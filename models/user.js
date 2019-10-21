import http from "./http";

let http_ = new http()

class User {
    async test(id) {
        const res = await http_.test(`/user?${id}`)
        return res
    }

    async getArticles(city='Beijing', start=0, count=15) {
        // const res = await http_.get({url: `/v1/article/?city=${city}&start=${start}&count=${count}`, responseType: 'text'})
        const res = wx.request({
            url: 'http://nature-trail.finelyteam.com/v1/article/',
            success: (res) => {console.log(res, 'this is response')}
        })
        return res
    }
}

export default new User
