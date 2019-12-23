// 解析cookie並取出
export const getUserFromCookie = (cookie, name) => {
  if (!cookie) {
    return;
  }
  return decodeURI(
    cookie.split(";").find(c => c.trim().startsWith(`${name}=`)) || ""
  ).split("=")[1];
};

//深層複製資料
export const deepCopy = object => {
  let info = "";

  // 如果不是 null、undefined、空字串、數字0就使用 JSON方法過濾, 否則直接返回 info 預設值(空字串)
  if (!!object) info = JSON.parse(JSON.stringify(object));

  return info;
};
