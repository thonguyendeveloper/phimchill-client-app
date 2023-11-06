import config from '../config'
import Login from "../pages/auth/login";

const publicRoutes = [
    { path: config.routes.login, component: Login, layout: null},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }