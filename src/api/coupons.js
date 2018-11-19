import ajax from "@/utils/ajax";
const customPath = process.env.VUE_APP_API_CUSTOMPATH;

export const ajaxGetCoupon = page => {
  return ajax({
    url: `/api/${customPath}/admin/coupons?page=${page}`,
    method: "get"
  });
};

export const ajaxDeleteCoupon = id => {
  return ajax({
    url: `/api/${customPath}/admin/coupon/${id}`,
    method: "delete",
    id
  });
};

export const ajaxUpdateCoupon = (method, url, data) => {
  return ajax({
    url,
    method,
    data
  });
};
