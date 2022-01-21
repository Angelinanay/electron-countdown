let value = "19:00:00"

function getTime() {
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const date = new Date().getDate()
  const hours = new Date().getHours()
  const minute = new Date().getMinutes()
  const second = new Date().getSeconds()
  const nowDateStr = new Date(`${year}-${month + 1}-${date} ${hours}:${minute}:${second}`).getTime()
  const endDateStr = new Date(`${year}-${month + 1}-${date} ${value}`).getTime()
  const diff = (endDateStr - nowDateStr) / 1000
  const h = Math.floor(diff / 3600)
  const m = Math.floor((diff - h * 3600) / 60)
  const s = diff - h * 3600 - m * 60
  document.body.innerHTML = `
  <p>工作时长仅剩</p>
  <div>${h}小时${m}分钟${s}秒</div>
  <p>提高工作效率、珍惜工作时间</p>
  `
};

function init() {
  value = document.getElementById('value').value
  getTime()
  window.setInterval(getTime, 1000)
}