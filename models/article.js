import http from "./http"

let http_ = new http()

class Article {
    async test(id) {
        const res = await http_.test(`/Article?${id}`)
        return res
    }

    /**
     * 
     * @param {string} city 
     * @param {number} start 
     * @param {number} count 
     */
    async getArticles(city = 'Beijing', start = 0, count = 15) {
        const res = await http_.get({
            url: `/v1/article/?city=${city}&start=${start}&count=${count}`,
            responseType: 'text',
            success: (res) => {
                // TODO: return to wrapped func
                console.log(res, 'this is response')
            }
        })
        return res
    }

    /**
     * 
     * @param {string} q 
     * @param {string} city 
     * @param {number} start 
     * @param {number} count 
     */
    async search(q, city='Beijing', start=0, count=15) {
        // TODO
    }

    /**
     * 
     * @param {object} data 
     */
    async publish(data) {
        // TODO
    }

    /**
     * 
     * @param {number} aid 
     */
    async remove(aid) {
        // TODO
    }

    /**
     * 
     * @param {number} aid 
     */
    async like(aid) {
        // TODO
    }

    /**
     * 
     * @param {number} aid 
     */
    async unlike(aid) {
        // TODO
    }

    /**
     * 
     * @param {number} aid 
     */
    async show(aid) {
        // TODO
    }

    /**
     * 
     * @param {number} aid 
     */
    async hide(aid) {
        // TODO
    }

    /**
     * 
     * @param {number} aid 
     */
    async getDetail(aid) {
        // TODO
    }

    /**
     * 
     * @param {number} uid 
     * @param {string} page 
     * @param {string} count 
     */
    async getUserArticle(uid, page=0, count=15) {
        // TODO
    }
}

export default new Article
