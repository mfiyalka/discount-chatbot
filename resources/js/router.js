import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from "./layouts/index"
import SignIn from "./views/auth/SignIn";
import SingOut from "./views/auth/SingOut";
import Dashboard from "./views/dashboard/Dashboard";
import Customers from "./views/customers/Customers";
import RatingsReviews from "./views/ratings-reviews/RatingsReviews";
import Telegram from "./views/newsletters/Telegram";
import Viber from "./views/newsletters/Viber";
import ContactCentre from "./views/contact-centre/ContactCentre";
import Users from "./views/users/UsersList";
import TextComponent from "./views/text/TextComponent";
import Manual from "./views/manual/Manual";

import store from './store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/sing-in',
        name: 'SignIn',
        component: SignIn,
        meta: { title: 'Sign in', requiresVisitor: true }
    },
    {
        path: '/sing-out',
        name: 'SignOut',
        component: SingOut,
        meta: { title: 'Sign out' }
    },
    {
        path: '/',
        name: 'home',
        redirect: '/dashboard',
        component: Layout,
        meta: { requiresAuth: true },
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
        meta: { requiresAuth: true },
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
        meta: { requiresAuth: true },
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
        meta: { requiresAuth: true },
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
        meta: { requiresAuth: true },
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
        meta: { requiresAuth: true },
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
        meta: { requiresAuth: true },
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
        meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'SignIn'
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({
                name: 'Dashboard'
            })
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router;
