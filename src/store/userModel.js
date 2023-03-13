import { action, persist } from "easy-peasy";

export const userModel = persist({
  user: {
    name: "",
    email: "",
    token: "",
    isAuthenticate: true,
  },
  login: action((state, payload) => {
    state.user = payload.user;
  }),
});
