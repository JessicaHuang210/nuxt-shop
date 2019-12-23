import Vue from "vue";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
// Add a rule.
extend("email", { ...email, message: "email" });
extend("required", {
  ...required,
  message: "必填！"
});
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
