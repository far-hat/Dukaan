const { auth } = require('express-openid-connect');
require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'secret',
  baseURL: 'http://localhost:3000',
  clientID: 'H5zgjbZCUrTqlNFOGst0nSPcJUTyWoJZ',
  issuerBaseURL: 'https://dev-3264npklqm44nw7t.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
