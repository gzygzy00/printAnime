let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `/* 你好hello，
 * 这里是一个测试demo，
 * 下面来实现CSS
 * ......
 */
 #TaiJi {
    height: 200px;
    width: 200px;
 }
 /* 将其变圆，添加背景颜色 */
 #TaiJi {
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
 }
 /* 继续...... */
 #TaiJi::before {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
 }

 #TaiJi::after {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 100%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
 }
`

let finString = ''

let wordCount = -1

let step = () => {

  setTimeout(() => {
    if (wordCount < string.length - 1) {
      wordCount += 1
      if (string[wordCount] === '\n') {
        finString += '<br>'
      } else if (string[wordCount] === ' ') {
        finString += '&nbsp;'
      } else {
        finString += string[wordCount]
      }
      html.innerHTML = finString  //写入HTML
      style.innerHTML = string.substring(0, wordCount)  //写入CSS
      // console.log(string[wordCount])
      window.scrollTo(0, 99999)
      html.scrollTo(0,99999)
      step()
    }
  }, 20)

}

step()