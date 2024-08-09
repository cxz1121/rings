<template>
  <div id="main">
    <canvas id="can" width="300" height="200" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        data: [
          {
            percent: 70,
            color: 'blue',
            text: '111',
            radius: 55,
            lineWidth: 6
          },
          {
            percent: 50,
            color: 'green',
            text: '222',
            radius: 75,
            lineWidth: 6
          },
          {
            percent: 90,
            color: 'red',
            text: '333',
            radius: 93,
            lineWidth: 6
          }
        ]
      }
    }
  },
  mounted () {
    let canvasDom = document.getElementById('can')
    this.drawMain(canvasDom, this.options)
  },
  methods: {
    drawMain (canvas, options) {
      const context = canvas.getContext('2d')
      const center_x = canvas.width / 2
      const center_y = canvas.height / 2
      const rad = (Math.PI * 2) / 100


      // 绘制背景圆圈
      function backgroundCircle (item) {
        context.save()
        context.beginPath()
        context.lineWidth = item.lineWidth // 设置线宽
        var radius = item.radius
        context.lineCap = 'round'
        context.strokeStyle = '#f5f5f5'
        context.arc(center_x, center_y, radius, 0, Math.PI * 2, false)
        context.stroke()
        context.closePath()
        context.restore()
      }

      // 绘制运动圆环
      function foregroundCircle (n, data) {
        for (let i = 0; i < data.length; i++) {
          const item = data[i]
          backgroundCircle(item)
          context.save()
          context.strokeStyle = item.color
          context.lineWidth = item.lineWidth
          context.lineCap = 'round'
          const radius = item.radius
          context.beginPath()

          const t = n >= item.percent ? item.percent : n
          context.arc(
            center_x,
            center_y,
            radius,
            Math.PI / 2,
            Math.PI / 2 + t * rad,
            false
          ) // 用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
          context.stroke()
          context.closePath()
          context.restore()
        }
      }
      let speed = 0
      // 执行动画
      const percent = options.data.sort((a, b) => b.percent - a.percent)[0].percent;
      (function drawFrame () {
        if (speed <= percent) {
          window.requestAnimationFrame(drawFrame)
          context.clearRect(0, 0, canvas.width, canvas.height)
        } else {
          return false
        }
        foregroundCircle(speed, options.data)
        if (speed >= percent) {
          speed++
        } else {
          speed += 1
        }
      })()
    }
  }
}
</script>

<style>
#main {
  width: 100vw;
  height: 100vh;
}
</style>