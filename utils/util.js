const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const getRadom = n => {
  return Math.floor(Math.random() * n + 1)

}

const setList = dataItem => {
  var dailyMoneyList = getList() || new Array();
  for (let i in dailyMoneyList) {
    if (dailyMoneyList[i] == dataItem) {  //如果数组中有该城市，flage变为false  
      return false;
    }
  }

  dailyMoneyList.push(dataItem);
  wx.setStorage({
    key: "dailyMoney",
    data: dailyMoneyList,
  })
}

const getList = key => {
  wx.getStorage({
    key: "dailyMoney",
    success: function (res) {
      return res.data || []
    },
  })
}
const getListByTime = time => {
  wx.getStorage({
    key: "dailyMoney",
    success: function (res) {
      var dailyMoneyList = res.data
      if (dailyMoneyList != []) {
        for (let i in dailyMoneyList) {
          if (dailyMoneyList[i].time == time) {  //如果数组中有该城市，flage变为false  
            return dailyMoneyList[i];
          }
        }
      }
      return {
        time: "",
        dailyMoney: "0",
        readySave: false,
      }
    },
  })
}

module.exports = {
  formatTime: formatTime,
  getRadom: getRadom,
  getList: getList,
  setList: setList,
  getListByTime: getListByTime,
}