import ajax from '@/utils/ajax'

export const ajaxAdminSignin = data => {
  return ajax({
    url: '/admin/signin',
    method: 'post',
    data
  })
}

export const ajaxAdminLogout = () => {
  return ajax({
    url: '/logout',
    method: 'post'
  })
}
