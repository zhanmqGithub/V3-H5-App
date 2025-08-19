/**
 * 接口响应
 */
interface Result<T = unknown> {
  /**
   * 响应编码
   */
  code: number
  /**
   * 是否成功
   */
  success: boolean
  /**
   * 消息
   */
  message: string
  /**
   * 响应值
   */
  result: T
  /**
   * 时间戳
   */
  timestamp: number
}

/**
 * 分页
 */
interface PageParams {
  pageNo: number
  pageSize: number
}

/**
 * 分页返回值
 */
interface PageResult<T> {
  current: number
  pages: number
  records: Array<T>
  size: number
  total: number
}
