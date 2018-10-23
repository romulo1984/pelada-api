'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.resource('user', 'UserController')
}).prefix('api/')

Route.group(() => {
  Route.resource('pelada', 'PeladaController')
}).prefix('api/')

Route.group(() => {
  Route.resource('confirmation', 'ConfirmationController')
}).prefix('api/')

Route.group(() => {
  Route.resource('player', 'PlayerController')
}).prefix('api/')

Route.group(() => {
  Route.resource('period', 'PeriodController')
}).prefix('api/')

Route.group(() => {
  Route.resource('order', 'OrderController')
}).prefix('api/')
