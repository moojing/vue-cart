import ajax from '@/utils/ajax'
const customPath = process.env.VUE_APP_API_CUSTOMPATH

export const ajaxImageUpload = (data, options) => {
  return ajax({
    url: `/api/${customPath}/admin/upload`,
    method: 'post',
    data,
    options
  })
}
