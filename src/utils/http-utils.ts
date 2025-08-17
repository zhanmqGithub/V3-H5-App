import axios, { AxiosError } from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  CreateAxiosDefaults,
} from 'axios'
import { Snackbar, Dialog } from '@varlet/ui'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user' // 假设你有Vuex/Pinia store

// 扩展AxiosResponse类型
type ExtendedAxiosResponse<T = unknown> = AxiosResponse<Result<T>>

// 创建axios实例时指定类型
const axiosConfig: CreateAxiosDefaults<Result> = {
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
}

const service = axios.create(axiosConfig)

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<Result>): InternalAxiosRequestConfig<Result> => {
    const userStore = useUserStore()
    const token = userStore.$state.token as string | null
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError<Result>): Promise<AxiosError<Result>> => {
    console.error('请求错误:', error)
    Snackbar.error('请求发送失败，请稍后重试')
    return Promise.reject(error)
  },
)

// 响应拦截器 - 完全符合类型要求
service.interceptors.response.use(
  (response: ExtendedAxiosResponse): ExtendedAxiosResponse => {
    const { data } = response

    // 只处理成功情况，直接返回响应对象
    if (data.code === 200 || data.code === 0) {
      return response
    }

    // 对于业务错误，先显示错误信息然后拒绝
    Snackbar.error(data.message || '操作失败')
    throw new axios.AxiosError(
      data.message || '操作失败',
      String(data.code),
      response.config,
      response.request,
      response,
    )
  },
  async (error: AxiosError<Result>): Promise<never> => {
    console.error('响应错误:', error)
    const userStore = useUserStore()
    // 处理token过期
    if (error.response?.status === 401) {
      const isLogin = userStore.isLogin as boolean
      if (isLogin) {
        await Dialog({
          title: '退出登录',
          message: '登录状态已过期，请重新登录！',
          cancelButton: false,
          confirmButtonText: '关闭',
          onConfirm: () => {
            const router = useRouter()
            userStore.clearUser()
            router.push({
              path: '/login-view',
            })
          },
        })
      }
      const authError = new axios.AxiosError(
        '登录状态已过期，请重新登录',
        '401',
        error.config,
        error.request,
        error.response,
      )
      throw authError
    } else if (error.message.includes('timeout')) {
      Snackbar.error('服务器连接超时！请检查网络连接')
    } else {
      // 其他错误处理
      const errormessage = error.response?.data?.message || '服务器响应错误'
      Snackbar.error(errormessage)
    }
    throw error
  },
)

/**
 * GET请求
 * @param url 请求地址
 * @param params 请求参数
 * @param config 额外配置
 * @returns Promise
 */
export const getRequest = <ResponseData = unknown, RequestData = unknown>(
  url: string,
  params?: RequestData,
  config?: Omit<AxiosRequestConfig, 'params' | 'method' | 'url'>,
): Promise<ResponseData> => {
  return new Promise<ResponseData>((resolve, reject) => {
    service
      .get<Result<ResponseData>>(url, { params, ...config })
      .then((response) => {
        if (response.data.success) {
          resolve(response.data.result)
        } else {
          reject(response.data.message)
        }
      })
      .catch((error) => {
        // 捕获网络错误或其他异常
        reject(error instanceof Error ? error.message : '请求失败')
      })
  })
}

/**
 * POST请求
 * @param url 请求地址
 * @param data 请求数据
 * @param config 额外配置
 * @returns Promise
 */
export const postRequest = <ResponseData = unknown, RequestData = unknown>(
  url: string,
  data?: RequestData,
  config?: Omit<AxiosRequestConfig, 'data' | 'method' | 'url'>,
): Promise<ResponseData> => {
  return new Promise<ResponseData>((resolve, reject) => {
    service
      .post<Result<ResponseData>>(url, data, config)
      .then((response) => {
        if (response.data.success) {
          resolve(response.data.result)
        } else {
          reject(response.data.message)
        }
      })
      .catch((error) => {
        // 捕获网络错误或其他异常
        reject(error instanceof Error ? error.message : '请求失败')
      })
  })
}

/**
 * PUT请求
 * @param url 请求地址
 * @param data 请求数据
 * @param config 额外配置
 * @returns Promise
 */
export const putRequest = <ResponseData = unknown, RequestData = unknown>(
  url: string,
  data?: RequestData,
  config?: Omit<AxiosRequestConfig, 'data' | 'method' | 'url'>,
): Promise<ResponseData> => {
  return new Promise<ResponseData>((resolve, reject) => {
    service
      .put<Result<ResponseData>>(url, data, config)
      .then((response) => {
        if (response.data.success) {
          resolve(response.data.result)
        } else {
          reject(response.data.message)
        }
      })
      .catch((error) => {
        // 捕获网络错误或其他异常
        reject(error instanceof Error ? error.message : '请求失败')
      })
  })
}

/**
 * DELETE请求
 * @param url 请求地址
 * @param params 请求参数
 * @param config 额外配置
 * @returns Promise
 */
export const deleteRequest = <ResponseData = unknown, RequestData = unknown>(
  url: string,
  params?: RequestData,
  config?: Omit<AxiosRequestConfig, 'params' | 'method' | 'url'>,
): Promise<ResponseData> => {
  return new Promise<ResponseData>((resolve, reject) => {
    service
      .delete(url, { params, ...config })
      .then((response) => {
        if (response.data.success) {
          resolve(response.data.result)
        } else {
          reject(response.data.message)
        }
      })
      .catch((error) => {
        // 捕获网络错误或其他异常
        reject(error instanceof Error ? error.message : '请求失败')
      })
  })
}

export default service
