/**
 * Created by Bell on 16/6/16.
 */

const Router = require('koa-router');

import * as home from '../controllers/home';
import * as user from '../controllers/user';
import * as auth from '../utils/auth';

let base_url = '/';
let router = new Router({ prefix: base_url });

router
    .get('/', auth.ensureUser, home.index)
    .post('/register', user.register)
    .post('/login', user.login)
    .post('/logout', auth.ensureUser, user.logout)
    .post('/modify-my-password', auth.ensureUser, user.modifyMyPassword)
    .post('/reset-password', user.resetPassword)
    .post('/set-my-password', auth.ensureUser, auth.ensureSetPasswordToken, user.setMyPassword);

export default {
    baseUrl: base_url,
    router: router
};
