const MHome = () => import('@/views/MHome.vue');
const MAbout = () => import('@/views/MAbout.vue');

const routes = [
    { path: '/', component: MHome },
    { path: '/about', component: MAbout },
];

export default routes;
