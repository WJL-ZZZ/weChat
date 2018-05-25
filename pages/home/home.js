//获取应用实例ß
const util = require('../../utils/util.js')

var homeMoney = "0"
var time ="0"
var dailyMoney = {
  time: "",
  dailyMoney: "0",
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
    var mDailyMoney = util.getListByTime(time) || {};
    if (mDailyMoney != {}) {
      dailyMoney = mDailyMoney
    }
    homeMoney = dailyMoney.money || "0"
    this.setData({
      money: homeMoney
    })
  },

  getRadom: function (e) {
    if (homeMoney == "0") {
      homeMoney = util.getRadom(365)
      this.setData({
        money: homeMoney
      })
      dailyMoney.time = time
      dailyMoney.money = homeMoney
      util.setList(dailyMoney)
    }
  }
};



Page(conf);