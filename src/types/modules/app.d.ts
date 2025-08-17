/**
 * query 参数对象
 */
type QueryObject = { [key: string]: string | number }
/**
 * 菜单
 */
interface Menu {
  title: string
  name: string
  icon: string
  enabled: false
  query: QueryObject
}
/**
 * TabBar
 */
interface TabBarItem {
  label: string
  name: string
  icon: string
}
/**
 * 字典
 */
interface Dict {
  color: string
  jsonObject: JSON
  label: string
  text: string
  title: string
  value: string
}
/**
 * 全部字典
 */
type SysAllDictItem = Record<string, Dict[]>

interface Depart {
  address: string
  createBy: string
  createTime: string
  delFlag: string
  departName: string
  departNameAbbr: string
  departNameEn: string
  departOrder: number
  description: string
  dingIdentifier: string
  directorUserIds: string
  fax: string
  id: string
  izLeaf: number
  memo: string
  mobile: string
  oldDirectorUserIds: nullstring
  orgCategory: string
  orgCode: string
  orgType: string
  parentId: string
  qywxIdentifier: string
  status: string
  tenantId: number
  updateBy: string
  updateTime: string
}

interface Tenant {
  applyStatus: string
  beginDate: string
  companyAddress: string
  companyLogo: string
  companySize: string
  createBy: string
  createTime: string
  delFlag: string
  department: string
  endDate: string
  houseNumber: string
  id: number
  loginBkgdImg: string
  name: string
  position: string
  secondaryDomain: string
  status: string
  trade: string
  updateBy: string
  updateTime: string
  workPlace: string
}
