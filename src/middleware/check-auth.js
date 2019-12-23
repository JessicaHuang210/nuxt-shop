export default function({ store, redirect }) {
  const userLoggedIn = store.getters["auth/loginStatus"];
  userLoggedIn || redirect("/auth");
}
