

export default new Router({
  routes: [{
      path: '/dashboard',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
