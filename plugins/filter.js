import Vue from "vue";

// 千分位補逗點
Vue.filter("commaFormat", val => {
  let info = "0";
  val &&
    (info = val
      .toString()
      .replace(
        /^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,
        (all, pre, groupOf3Digital) => {
          return pre + groupOf3Digital.replace(/\d{3}/g, ",$&");
        }
      ));
  return info;
});

Vue.filter("dollarSign", val => {
  return `$ ${val}`;
});

// 空物件取直
Vue.filter("emptyObj", (val, name) => {
  return (val || {})[name] || "-";
});
