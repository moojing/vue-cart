import ajax from '@/utils/ajax'
const customPath = process.env.VUE_APP_API_CUSTOMPATH

export const ajaxGetProducts = (page = 1) => {
  return ajax({
    url: `/api/${customPath}/products?page=${page}`,
    method: 'get'
  })
}
export const ajaxGetProduct = (id) => {
  return ajax({
    url: `/api/${customPath}/product/${id}`,
    method: 'get'
  })
}
export const ajaxUpdateProduct = (method, url, data) => {
  return ajax({
    url,
    method,
    data
  })
}

export const ajaxDeleteProduct = (id) => {
  return ajax({
    url: `/api/${customPath}/admin/product/${id}`,
    method:'delete'
  })
}

