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
    if (dailyMoneyList[i] == dataItem) {
      return false;
    }
  }

  dailyMoneyList.push(dataItem);
  wx.setStorageSync("dailyMoney", dailyMoneyList)
}

const getList = key => {
  return wx.getStorageSync("dailyMoney")
}

const getListByTime = time => {
  var dailyMoneyList = getList()
  if (dailyMoneyList != []) {
    for (let i in dailyMoneyList) {
      if (dailyMoneyList[i].time == time) {
        //如果数组中有该城市，flage变为false  
        return dailyMoneyList[i];
      }
    }
  }
  return {
    time: "",
    money: "0",
    readySave: false,
  }
}

module.exports = {
  formatTime: formatTime,
  getRadom: getRadom,
  getList: getList,
  setList: setList,
  getListByTime: getListByTime,
}