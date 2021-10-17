const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getRefreshingUser = state => state.auth.refreshingUser;
const getAuthError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getRefreshingUser,
  getAuthError,
};
export default authSelectors;
