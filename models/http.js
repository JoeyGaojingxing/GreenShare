const baseURL = 'http://nature-trail.finelyteam.com'

export class http {

    constructor() {
        // 设置token
        this.header = {
            'Authorization': null
        }
    }

    async test() {
        const app = await getApp()
        return app.globalData
    }

    get({url, data = {}, success = null, fail = null, complete = null, responseType = 'text'}) {
        console.log(url, data, responseType)
        return wx.request({
            url: baseURL + url,
            data: data,
            header: this.header,
            method: "GET",
            dataType: "json",
            responseType,
            success,
            fail,
            complete
        })
    }
    
    put(url, data = {}, success = null, fail = null, complete = null, responseType = 'text') {
        return wx.request({
            url: baseURL + url,
            data: data,
            header,
            method: "PUT",
            dataType: "json",
            responseType,
            success,
            fail,
            complete
        })
    }
    
    post(url, data = {}, success = null, fail = null, complete = null, responseType = 'text') {
        return wx.request({
            url: baseURL + url,
            data: data,
            header,
            method: "POST",
            dataType: "json",
            responseType,
            success,
            fail,
            complete
        })
    }
    
    delete_(url, data = {}, success = null, fail = null, complete = null, responseType = 'text') {
        return wx.request({
            url: baseURL + url,
            data: data,
            header,
            method: "DELETE",
            dataType: "json",
            responseType,
            success,
            fail,
            complete
        })
    }
    
    download(url, filePath, success = null, fail = null, complete = null) {
        return wx.downloadFile({
            url: baseURL + url,
            header,
            filePath,
            success,
            fail,
            complete
        })
    }
    
    upload(url, filePath, success = null, fail = null, complete = null) {
        return wx.uploadFile({
            url: baseURL + url,
            header,
            filePath,
            name,
            formData,
            success,
            fail,
            complete
        })
    }
}

export default http
