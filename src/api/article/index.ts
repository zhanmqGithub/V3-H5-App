import { getRequest } from '@/utils/http-utils'
/**
 * Api接口
 */
enum Api {
  menuArticlelist = '/eoa/cms/eoaCmsArticle/menuArticlelist',
}

/**
 * 文章列表参数
 */
export interface ArticleParams extends PageParams {
  type: string
}

/**
 * 文章对象
 */
export interface Article {
  author: string
  bpmStatus: string
  columnId: string
  columnId_dictText: string
  content: string
  createBy: string
  createTime: string
  fileUrl: string
  files: string
  id: string
  imageHref: string
  isPublish: string
  isPublish_dictText: string
  izApproval: string
  keywords: string
  linkUrl: string
  newsType: string
  publishDate: string
  publishDateEnd: string
  publishDateStart: string
  readTimes: number
  serialNumber: number
  source: string
  subTitle: string
  summary: string
  sysOrgCode: string
  title: string
  type: string
  updateBy: string
  updateTime: string
}

/**
 * 文章列表
 * @param articleParams
 * @returns
 */
export const menuArticlelist = (articleParams: ArticleParams) => {
  return getRequest<PageResult<Article>>(Api.menuArticlelist, articleParams)
}
