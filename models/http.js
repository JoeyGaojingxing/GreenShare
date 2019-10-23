// TODO: 代码审阅
const baseURL = 'http://nature-trail.finelyteam.com'

export class http {

    constructor() {
        // 设置token
        this.header = {
            'Authorization': null
        }
    }

    get({
        url,
        data = {},
        header = {},
        success = null,
        fail = null,
        complete = null,
        responseType = 'text'
    }) {
        console.log(url, data, responseType)
        return wx.request({
            url: baseURL + url,
            data: data,
            header: {
                ...this.header,
                ...header
            },
            method: "GET",
            dataType: "json",
            responseType,
            success,
            fail,
            complete
        })
    }

    put({
        url,
        data = {},
        header = {},
        success = null,
        fail = null,
        complete = null,
        responseType = 'text'
    }) {
        return wx.request({
            url: baseURL + url,
            data: data,
            header: {
                ...this.header,
                ...header
            },
            method: "PUT",
            dataType: "json",
            responseType,
            success,
            fail,
            complete
        })
    }

    post({
        url,
        data = {},
        header = {},
        success = null,
        fail = null,
        complete = null,
        responseType = 'text'
    }) {
        return wx.request({
            url: baseURL + url,
            data: data,
            header: {
                ...this.header,
                ...header
            },
            method: "POST",
            dataType: "json",
            responseType,
            success,
            fail,
            complete
        })
    }

    delete_({
        url,
        data = {},
        header = {},
        success = null,
        fail = null,
        complete = null,
        responseType = 'text'
    }) {
        return wx.request({
            url: baseURL + url,
            data: data,
            header: {
                ...this.header,
                ...header
            },
            method: "DELETE",
            dataType: "json",
            responseType,
            success,
            fail,
            complete
        })
    }

    download({
        url,
        filePath,
        header = {},
        success = null,
        fail = null,
        complete = null
    }) {
        return wx.downloadFile({
            url: baseURL + url,
            header: {
                ...this.header,
                ...header
            },
            filePath,
            success,
            fail,
            complete
        })
    }

    upload({
        url,
        filePath,
        header = {},
        success = null,
        fail = null,
        complete = null
    }) {
        return wx.uploadFile({
            url: baseURL + url,
            header: {
                ...this.header,
                ...header
            },
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