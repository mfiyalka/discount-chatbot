import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from "./layouts/index"
import SignIn from "./views/auth/SignIn";
import Dashboard from "./views/dashboard/Dashboard";
import Customers from "./views/customers/Customers";
import RatingsReviews from "./views/ratings-reviews/RatingsReviews";
import Telegram from "./views/newsletters/Telegram";
import Viber from "./views/newsletters/Viber";
import ContactCentre from "./views/contact-centre/ContactCentre";
import Users from "./views/users/Users";
import TextComponent from "./views/text/TextComponent";
import Manual from "./views/manual/Manual";

Vue.use(VueRouter);

const routes = [
    {
        path: '/sing-in',
        name: 'SignIn',
        component: SignIn,
        meta: { title: 'Sign in' }
    },
    {
        path: '/',
        name: 'home',
        redirect: '/dashboard',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'Dashboard',
                meta: { title: 'Dashboard' }
            }
        ]
    },
    {
        path: '/customers',
        component: Layout,
        children: [
            {
                path: '/',
                component: Customers,
                name: 'Customers',
                meta: { title: 'Customers' }
            }
        ]
    },
    {
        path: '/ratings-reviews',
        component: Layout,
        children: [
            {
                path: '/',
                component: RatingsReviews,
                name: 'RatingsReviews',
                meta: { title: 'Ratings & Reviews' }
            }
        ]
    },
    {
        path: '/newsletters',
        component: Layout,
        children: [
            {
                path: '/telegram',
                component: Telegram,
                name: 'Telegram',
                meta: { title: 'Telegram' }
            },
            {
                path: '/viber',
                component: Viber,
                name: 'Viber',
                meta: { title: 'Viber' }
            }
        ]
    },
    {
        path: '/contact-centre',
        component: Layout,
        children: [
            {
                path: '/',
                component: ContactCentre,
                name: 'ContactCentre',
                meta: { title: 'Contact centre' }
            }
        ]
    },
    {
        path: '/users',
        component: Layout,
        children: [
            {
                path: '/',
                component: Users,
                name: 'Users',
                meta: { title: 'Users' }
            }
        ]
    },
    {
        path: '/text',
        component: Layout,
        children: [
            {
                path: '/',
                component: TextComponent,
                name: 'Text',
                meta: { title: 'Text' }
            }
        ]
    },
    {
        path: '/manual',
        component: Layout,
        children: [
            {
                path: '/',
                component: Manual,
                name: 'Manual',
                meta: { title: 'Manual' }
            }
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    /* It will change the title when the router is change*/
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;
