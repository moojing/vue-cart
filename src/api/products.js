import ajax from '@/utils/ajax'
const customPath = process.env.VUE_APP_API_CUSTOMPATH

export const ajaxGetProducts = () => {
  return ajax({
    url: `/api/${customPath}/products`,
    method: 'get'
  })
}
