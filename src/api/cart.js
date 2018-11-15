import ajax from '@/utils/ajax'
const customPath = process.env.VUE_APP_API_CUSTOMPATH

export const ajaxGetCart = () => {
  return ajax({
    url: `/api/${customPath}/cart`,
    method: 'get'
  })
}

export const ajaxPostCart = data => {
  return ajax({
    url: `/api/${customPath}/cart`,
    method: 'post',
    data
  })
}

export const ajaxDeleteCart = id => {
  return ajax({
    url: `/api/${customPath}/cart/${id}`,
    method: 'delete'
  })
}
