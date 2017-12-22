var Mock = require('mockjs');
// Usage:
// http://mockjs.com/examples.html

function subRouter(express) {

    /*eslint-disable*/
    var router = express.Router();

    // 下载文件
    router.get('/v1/admin/loanapps', function(req, res) {
        return res.json({
            "code": 20000,
            "message": "OK",
            "data": {
                "page": 1,
                "pageSize": 25,
                "totalCount": 1,
                "data": [
                    {
                        "loanAppId": "9014028411",
                        "loanId": "482415",
                        "realName": "马某某",
                        "appDate": "2017-07-27",
                        "status": "资金募集中"
                    }
                ]
            }
        });
    });
    

    return router;
}

module.exports = {
    root: '/',
    router: subRouter
};
