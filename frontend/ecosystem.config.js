const dotenv = require('dotenv');

dotenv.config({ path: './.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_REPO,
  DEPLOY_PATH,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: 'origin/main',
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'pre-deploy-local': '',
      'pre-deploy': '',
      'post-deploy': 'cd frontend && pwd && npm ci && npm run build',
      'post-deploy-local': '',
    },
  },
};
