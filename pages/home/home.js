//获取应用实例
var money = "0"
const util = require('../../utils/util.js')
const conf = {
  data: {
    money: money
  },
  // 初始化数据
  onLoad(options) {

  },
  getRadom: function (e) {
    if (money == "0") {
      money = util.getRadom(365)
      this.setData({
        money: money
      })
    }
  }
};



Page(conf);