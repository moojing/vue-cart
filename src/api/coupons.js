import ajax from '@/utils/ajax'
const customPath = process.env.VUE_APP_API_CUSTOMPATH

export const ajaxGetCoupon = page => {
  return ajax({
    url: `/api/${customPath}/admin/coupons?page=${page}`,
    method: 'get'
  })
}

export const ajaxPostCoupon = data => {
  return ajax({
    url: `/api/${customPath}/coupon`,
    method: 'post',
    data
  })
}

export const ajaxUpdateProduct = (method, url, data) => {
  return ajax({
    url,
    method,
    data
  })
}
