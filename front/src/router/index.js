import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const routerHistory = createWebHashHistory();
const router = createRouter({
    history: routerHistory,
    routes: routes,
});

export default router;
