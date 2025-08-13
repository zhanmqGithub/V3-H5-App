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
