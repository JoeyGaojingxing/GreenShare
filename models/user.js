import http from "./http";

let http_ = new http()

class User {
    async test() {
        const res = await http_.test()
        return res
    }
}

export default new User
