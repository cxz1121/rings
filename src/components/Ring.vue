<template>
  <div id="main">
    <canvas id="can" width="300" height="300" />
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    var canvasDom = document.getElementById('can')
    this.drawMain(canvasDom, 50, 2, '#435377')
  },
  methods: {
    drawMain (canvas, percent, colornums, bgcolor) {
      var context = canvas.getContext('2d')
      var center_x = canvas.width / 2
      var center_y = canvas.height / 2
      var rad = (Math.PI * 2) / 100
      var speed = 0

      // 绘制背景圆圈
      // function backgroundCircle () {
      //   context.save()
      //   context.beginPath()
      //   context.lineWidth = 8 // 设置线宽
      //   var radius = center_x - context.lineWidth
      //   context.lineCap = 'round'
      //   context.strokeStyle = bgcolor
      //   context.arc(center_x, center_y, radius - 14, 0, Math.PI * 2, false)
      //   context.stroke()
      //   context.closePath()
      //   context.restore()
      // }

      // 绘制运动圆环
      function foregroundCircle (n) {
        context.save()
        // context.strokeStyle = forecolor //决定圆环颜色
        context.lineWidth = 10
        context.lineCap = 'round'
        var radius = center_x - context.lineWidth
        context.beginPath()
        // if (colornums == 1) {
        //     var g = context.createLinearGradient(0, 0, 180, 0) // 创建渐变对象  渐变开始点和渐变结束点
        //     g.addColorStop(0, '#64C58F') // 添加颜色点
        //     g.addColorStop(1, '#0084FF') // 添加颜色点
        //     context.strokeStyle = g // 使用渐变对象作为圆环的颜色
        // }
        // if (colornums == 2) {
          // var g = context.createLinearGradient(0, 0, 180, 0)
          // g.addColorStop(0, '#E7954C')
          // g.addColorStop(1, '#D36638')
          context.strokeStyle = '#D36638'
        // }
        // if (colornums == 3) {
        //     var g = context.createLinearGradient(0, 0, 180, 0)
        //     g.addColorStop(0, '#FF7C78') //
        //     g.addColorStop(1, '#FD413E')
        //     context.strokeStyle = g
        // }

        context.arc(
          center_x,
          center_y,
          radius,
          Math.PI / 2,
          Math.PI / 2 + n * rad,
          false
        ) // 用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        context.stroke()
        context.closePath()
        context.restore()
      }

      // 绘制文字
      function text (n) {
        // context.save() // save和restore可以保证样式属性只运用于该段canvas元素
        // context.fillStyle = forecolor
        // var font_size = 40
        // context.font = font_size + 'px Helvetica'
        // var text_width = context.measureText(n.toFixed(0) + '%').width
        // context.fillText(n.toFixed(0) + '%', center_x - text_width / 2, center_y + font_size / 2)
        // context.restore()
      }

      // 执行动画
      (function drawFrame () {
        if (speed <= percent) {
          window.requestAnimationFrame(drawFrame)
        } else {
          return false
        }
        context.clearRect(0, 0, canvas.width, canvas.height)
        // backgroundCircle()
        // text(speed)
        foregroundCircle(speed)
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