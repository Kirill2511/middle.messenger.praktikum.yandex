import { Auth } from './pages/auth';
import { Router } from './utils/router/Router';
import { Singup } from './pages/singup';
import { Error } from './pages/error';
import Profile from './pages/profile';
import Chat from './pages/chat';
import ChangeSettings from './pages/profile/change-settings';
import { ChangePassword } from './pages/profile/change-password';
import { ChangeAvatar } from './pages/profile/change-avatar';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router('#app');

  router
    .use('/', Auth)
    .use('/sign-up', Singup)
    .use('/messenger', Chat)
    .use('/settings', Profile)
    .use('/error', Error)
    .use('/settings/change-settings', ChangeSettings)
    .use('/settings/change-password', ChangePassword)
    .use('/settings/change-avatar', ChangeAvatar)
    .use('*', Error)
    .start();
});
