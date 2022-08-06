import render from './utils/renderDOM';
import index from './pages/index/index';
import Chat from './pages/chat/chat';
import Profile from './pages/profile/profile';
import Login from './pages/login/login';
import Registration from './pages/registration/registration';
import Error404 from './pages/Error404/Error404';
import Error500 from './pages/Error500/Error500';
import 'normalize.css';
import './main.scss';

const main = new index({});
render('#root', main);

window.renderPage = function (page: string) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  document.querySelector('#root').innerHTML = '';

  switch (page) {
    case 'chat': {
      render('#root', new Chat({}));
      break;
    }

    case 'profile': {
      render('#root', new Profile({}));
      break;
    }

    case 'login': {
      render('#root', new Login({}));
      break;
    }

    case 'registration': {
      render('#root', new Registration({}));
      break;
    }

    case '404': {
      render('#root', new Error404({}));
      break;
    }

    case '500': {
      render('#root', new Error500({}));
      break;
    }

    default:
      render('#root', new index({}));
  }
};
