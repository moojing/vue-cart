import ajax from "@/utils/ajax";
const customPath = process.env.VUE_APP_API_CUSTOMPATH;

export const ajaxPostOrder = data => {
  return ajax({
    url: `/api/${customPath}/order`,
    method: "post",
    data
  });
};
