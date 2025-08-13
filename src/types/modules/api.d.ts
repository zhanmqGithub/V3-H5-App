/**
 * 接口响应
 */
interface Result<T> {
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

interface Experiment<T> {
  /**
   * 标准
   */
  norm: string
  /**
   * 形式
   */
  form: string
  /**
   * 车型
   */
  vehicleModel: string
  /**
   * 排程时间
   */
  scheduleDate: string
  /**
   * 负责人
   */
  personInCharge: string
  /**
   * 试验号
   */
  serialNumber: string
  /**
   * 厂家
   */
  manufacturers: string
  /**
   * 色彩
   */
  color: T
}
