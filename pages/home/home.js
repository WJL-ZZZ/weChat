//获取应用实例ß
const util = require('../../utils/util.js')

var time = "0"
var dailyMoney = {
  time: "",
  money: "0",
  readySave: false,
}
const conf = {
  data: {
    money: "0"
  },
  // 初始化数据
  onLoad(options) {
    var today = new Date();
    time = util.formatTime(today)
    dailyMoney = util.getListByTime(time)
    this.setData({
      money: dailyMoney.money
    })
  },

  getRadom: function (e) {
    if (dailyMoney.money == "0") {
      dailyMoney.money = util.getRadom(365)
      this.setData({
        money: dailyMoney.money
      })
      dailyMoney.time = time
      dailyMoney.money = dailyMoney.money
      util.setList(dailyMoney)
    }
  }
};



Page(conf);