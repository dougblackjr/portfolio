import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/project/:projectId',
      name: 'Project',
      component: Project
    }
  ]
})
