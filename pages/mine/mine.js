//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    area: ['苏州市区', '吴江', '太仓', '常熟'],
    areaIndex: 0
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  //选择区域
  onAreaChange: function (e) {
    this.setData({
      areaIndex: e.detail.value
    });
  },
  tapName: function (event) {
    console.log(event)
  }
})
