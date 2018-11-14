import ajax from "@/utils/ajax";
const customPath = process.env.VUE_APP_API_CUSTOMPATH;

export const ajaxPostCart = data => {
  return ajax({
    url: `/api/${customPath}/cart`,
    method: "post",
    data
  });
};
