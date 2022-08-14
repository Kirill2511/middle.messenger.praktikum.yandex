import renderDOM from './utils/renderDOM';
import { Login } from './pages/login';

document.addEventListener('DOMContentLoaded', () => {
  const page = new Login();
  renderDOM('#root', page);
});
