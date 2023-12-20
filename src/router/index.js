import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
import Welcome from '../views/Welcome.vue';
import ChatRoom from '../views/ChatRoom.vue';
import { projectAuth } from '@/firebase/config';

// auth guard

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log(`current user in Auth Guard`, user);

  if (user) {
    next(); // allow to enter route
  } else {
    next('/'); // go to '/login';
  }
};

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log(`don't show login page to logged in members :`, user);

  if (user) {
    next('/chatroom');
  } else {
    console.log(` next();`);
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: ChatRoom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
