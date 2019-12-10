// 解析cookie並取出
export const getUserFromCookie = (cookie, name) => {
  if (!cookie) {
    return;
  }
  return decodeURI(
    cookie.split(";").find(c => c.trim().startsWith(`${name}=`)) || ""
  ).split("=")[1];
};
