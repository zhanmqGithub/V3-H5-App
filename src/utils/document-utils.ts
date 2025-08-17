/**
 * 阻止缩放
 */
export const preventZoom = () => {
  // 阻止触摸设备上的双指缩放
  document.addEventListener(
    'touchstart',
    function (e) {
      // 检测是否有两个触摸点（双指操作）
      if (e.touches.length > 1) {
        e.preventDefault()
        console.log('双指缩放已被禁用')
      }
    },
    { passive: false },
  )
  // 阻止Ctrl+滚轮缩放
  document.addEventListener(
    'wheel',
    function (e) {
      // 当按下Ctrl键并滚动滚轮时（通常用于缩放）
      if (e.ctrlKey) {
        e.preventDefault() // 阻止默认缩放行为
        // 可选：添加提示信息
        console.log('缩放已被禁用')
      }
    },
    { passive: false },
  ) // 必须设置passive: false才能调用preventDefault()

  // 阻止键盘缩放快捷键 (Ctrl+/-, Ctrl+0)
  document.addEventListener(
    'keydown',
    function (e) {
      // 阻止 Ctrl++、Ctrl+-、Ctrl+0 组合键
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === '+' || e.key === '-' || e.key === '0' || e.key === '=') // 部分键盘上+和=是同一个键
      ) {
        e.preventDefault()
        console.log('键盘缩放已被禁用')
      }
    },
    { passive: false },
  )
  // 阻止触摸缩放的后续事件
  document.addEventListener(
    'touchmove',
    function (e) {
      // 防止双指移动时的缩放
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    },
    { passive: false },
  )
}

/**
 * plus对象准备就绪
 * @param callback
 */
export const onPlusready = (callback: () => void) => {
  document.addEventListener('plusready', callback)
}
