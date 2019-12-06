/*
* ajax请求函数模块
* 返回值是promise对象
* */

import axios from 'axios'
export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) { // 接收函数的函数是高阶函数
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    })
      .catch(function (error) {
        // 失败了调用reject()
        reject(error)
      })
  })
}

/*
* const response = await ajax()
* const result = response.data
* const result = await ajax
* */
