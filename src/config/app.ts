/**
 * 请求header
 * @description:  contentTyp
 */
export enum HttpConfigEnum {
  // TOKEN
  TOKEN = 'X-Access-Token',
  // TIMESTAMP
  TIMESTAMP = 'X-TIMESTAMP',
  // Sign
  Sign = 'X-Sign',
  // 租户id
  TENANT_ID = 'X-Tenant-Id',
  // 版本
  VERSION = 'X-Version',
  // 低代码应用ID
  X_LOW_APP_ID = 'X-Low-App-ID',
}
