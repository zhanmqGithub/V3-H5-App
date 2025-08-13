/**
 * 完整的PlusKey类型定义，不含any类型
 */
declare global {
  /**
   * Webview窗口对象接口
   */
  interface PlusWebview {
    /**
     * 获取当前Webview窗口
     */
    currentWebview(): PlusWebviewObject

    /**
     * 关闭Webview窗口
     */
    close(): void

    /**
     * 显示Webview窗口
     */
    show(animation?: string, duration?: number): void

    /**
     * 隐藏Webview窗口
     */
    hide(animation?: string, duration?: number): void
  }

  /**
   * Webview窗口实例接口
   */
  interface PlusWebviewObject {
    /**
     * 关闭当前Webview窗口
     */
    close(animation?: string, duration?: number): void

    /**
     * 加载指定URL
     */
    loadURL(url: string): void

    /**
     * 执行JS代码
     */
    evalJS(js: string): void
  }

  /**
   * 运行时接口
   */
  interface PlusRuntime {
    /**
     * 应用的APPID
     */
    appid: string

    /**
     * 应用版本名称
     */
    version: string

    /**
     * 应用版本号
     */
    versionCode: number

    /**
     * 退出应用
     */
    quit(): void

    /**
     * 重启应用
     */
    restart(): void
  }

  /**
   * 按键事件管理接口
   */
  interface PlusKey {
    /**
     * 监听按键事件
     * @param event 按键事件类型
     * @param listener 事件监听器
     * @param capture 是否捕获事件
     */
    addEventListener(
      event:
        | 'backbutton'
        | 'menubutton'
        | 'searchbutton'
        | 'volumeupbutton'
        | 'volumedownbutton'
        | 'keydown'
        | 'keyup',
      listener: (e: PlusKeyEvent) => void,
      capture?: boolean,
    ): void

    /**
     * 移除按键事件监听
     * @param event 按键事件类型
     * @param listener 事件监听器
     * @param capture 是否捕获事件
     */
    removeEventListener(
      event:
        | 'backbutton'
        | 'menubutton'
        | 'searchbutton'
        | 'volumeupbutton'
        | 'volumedownbutton'
        | 'keydown'
        | 'keyup',
      listener: (e: PlusKeyEvent) => void,
      capture?: boolean,
    ): void

    /**
     * 锁定系统按键
     * @param keys 要锁定的按键列表
     */
    lock(keys: ('back' | 'menu' | 'search' | 'volumeup' | 'volumedown')[]): void

    /**
     * 解锁系统按键
     * @param keys 要解锁的按键列表
     */
    unlock(keys: ('back' | 'menu' | 'search' | 'volumeup' | 'volumedown')[]): void
  }

  /**
   * 按键事件对象接口
   */
  interface PlusKeyEvent {
    /**
     * 按键代码
     */
    keyCode: number

    /**
     * 按键名称
     */
    key: string

    /**
     * 阻止事件的默认行为
     */
    preventDefault(): void

    /**
     * 指示是否已调用preventDefault()方法
     */
    defaultPrevented: boolean
  }

  /**
   * 扩展Window接口，包含完整的plus对象定义
   */
  interface Window {
    plus: {
      key: PlusKey
      webview: PlusWebview
      runtime: PlusRuntime
    }
  }
}

// 确保此文件被视为模块
export {}
