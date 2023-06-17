import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import ForumView from '../views/ForumView'
import ProblemListView from '../views/ProblemListView'
import StudyView from '../views/StudyView'
import ContestView from '../views/ContestView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contest',
    name: 'contest',
    component: ContestView,
  },
  {
    path: '/forum',
    name: 'forum',
    component: ForumView,
  },
  {
    path: '/problemlist',
    name: 'problemlist',
    component: ProblemListView,
  },
  {
    path: '/study',
    name: 'study',
    component: StudyView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router