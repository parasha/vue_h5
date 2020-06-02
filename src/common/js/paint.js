/**
 * 使用方法参考 src/pages/product/oneRMB/components/post/index.vue
 */
class Paint {

  constructor($canvas) {
    this.canvas = $canvas;
    this.context = this.canvas.getContext('2d');
  }
  // 绘制图片
  drawImage(imgUrl, x, y, size_x, size_y) {
    if (!imgUrl) {
      return Promise.resolve();
    }
    const image = new Image();
    // 处理 cdn 图片跨域
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = imgUrl;
    return new Promise(resolve => {
      image.onload = () => {
        this.context.drawImage(image, x, y, size_x, size_y);
        return resolve();
      }
    })
  }
  // 设置文字格式（目前只支持：颜色、粗细、字体大小）
  setTextConfig({ fontSize, color, fontWeight }) {
    this.context.font = (fontWeight || 'normal') + ' ' + (fontSize || '16px') + ' sans-serif';
    this.context.fillStyle = color || '#333333';
  }
  // 绘制文字, 超出最大长度自动截取
  drawText(text, x, y, maxWidth) {
    if(maxWidth && this.calculateTextWidth(text) > maxWidth){
      this.context.fillText(this.textSplit(text, maxWidth) + '...', x, y);
    }else{
      this.context.fillText(text, x, y);
    }
  }
  // 计算文字长度
  calculateTextWidth(text){
    return this.context.measureText(text).width
  }
  // 文字截取
  textSplit(text, maxWidth){
    if(this.calculateTextWidth(text.slice(0,text.length-1) + '...') > maxWidth){
      return this.textSplit(text.slice(0,text.length-1), maxWidth)
    }
    return text;
  }
  // 转化成 base64 格式的图片输出
  toImage() {
    return this.canvas.toDataURL("image/png");
  }
}

export default Paint;