import axios from "axios";
// axios.defaults.baseURL = "http://localhost:1811";
axios.defaults.baseURL = "http://39.97.229.46:1811";

// 拦截器  
var crypto = require("crypto"); // node 模块 

// 加密函数
export function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

// 解密 
export function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// daydayup   daydayup+wuhan1807
// exports.aesEncrypt = aesEncrypt;   // 加密
// exports.aesDecrypt = aesDecrypt;   // 解密
// exports.keys = "wh1811";        // 密钥 

// export default axios;
export const http = axios;