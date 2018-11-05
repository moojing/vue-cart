import ajax from '@/utils/ajax'
const customPath = process.env.VUE_APP_API_CUSTOMPATH

export const ajaxGetProducts = () => {
  return ajax({
    url: `/api/${customPath}/products`,
    method: 'get'
  })
}
export const ajaxPostProducts = data => {
  return ajax({
    url: `/api/${customPath}/admin/product`,
    method: 'post',
    data
  })
}
