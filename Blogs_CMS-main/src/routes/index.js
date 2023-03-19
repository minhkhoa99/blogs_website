import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import { ROLES } from '../constants/me';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/account/log-in/Login'));
const Logout = React.lazy(() => import('../pages/account/Logout'));
const ForgetPassword = React.lazy(() => import('../pages/account/fotgot-password/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/account/confirm/Confirm'));
const ChangePass = React.lazy(() => import('../pages/account/change-password/ChangePass'));
const Information = React.lazy(() => import('../pages/account/information/Information'));

// leftsidebar
const Liststudents = React.lazy(() => import('../pages/liststudents/Liststudents'));
const ListClass = React.lazy(() => import('../pages/listclass/ListClass'));
const Exammanagement = React.lazy(() => import('../pages/exammanagement/Exammanagement'));
const Assignmentmanagement = React.lazy(() => import('../pages/assignmentmanagement/Assignmentmanagement'));
const QAmanagement = React.lazy(() => import('../pages/QAmanagement/QAmanagement'));
const Usermanagement = React.lazy(() => import('../pages/usermanagement/Usermanagement'));
const Lesson = React.lazy(() => import('../pages/lesson/Lesson'));
const Reportmanagement = React.lazy(() => import('../pages/reportmanagement/Reportmanagement'));
const Facilitymanagement = React.lazy(() => import('../pages/facilitymanagement/Facilitymanagement'));
const Eventmanagement = React.lazy(() => import('../pages/eventmanagement/Eventmanagement'));
const Room = React.lazy(() => import('../pages/room/Room'));
const Schedule = React.lazy(() => import('../pages/schedule/Schedule'));
const Postmanagement = React.lazy(() => import('../pages/postmanagement/Postmanagement'));
const Settingsmanagement = React.lazy(() => import('../pages/settingsmanagement/Settingsmanagement'));
const File = React.lazy(() => import('../pages/file/File'));
const Schedulemanagement = React.lazy(() => import('../pages/schedulemanagement/Schedulemanagement'));
const Modulemanagement = React.lazy(() => import('../pages/modulemanagement/Modulemanagement'));
const Coursemanagement = React.lazy(() => import('../pages/coursemanagement/Coursemanagement'));
const Lessonmanagement = React.lazy(() => import('../pages/lessonmanagement/Lessonmanagement'));
const Timemanagement = React.lazy(() => import('../pages/timemanagement/Timemanagement'));
const Filemanagement = React.lazy(() => import('../pages/filemanagement/Filemanagement'));

//Dashboard
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    route: PrivateRoute,
};

// dashboards
const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        // route: PrivateRoute,
        route: Route,
        roles: [ROLES.DLEAD],
    },
    {
        path: '/account',
        name: 'Acount',
        component: Information,
        route: PrivateRoute,
        roles: [ROLES.MEMBER, ROLES.DLEAD],
    },
];

// leftsidebar
const leftsidebarRoutes = [
    {
        icon: `card-outline`,
        name: 'Quản lí học sinh',
        path: '/liststudents',
        name: 'liststudents',
        component: Liststudents,
        route: Route,
    },
    {
        icon: 'list-circle-outline',
        path: '/listclass',
        name: 'Quản lí lớp',
        component: ListClass,
        route: Route,
    },
    {
        icon: 'extension-puzzle-outline',
        path: '/exammanagement',
        name: 'Quản lí bài thi',
        component: Exammanagement,
        route: Route,
    },
    {
        icon: 'laptop-outline',
        path: '/assignmentmanagement',
        name: 'Quản lí bài tập',
        component: Assignmentmanagement,
        route: Route,
    },
    {
        icon: 'tv-outline',
        path: '/QAmanagement',
        name: 'Quản lí Q/A',
        component: QAmanagement,
        route: Route,
    },
    {
        icon: 'newspaper-outline',
        path: '/usermanagement',
        name: 'Quản lí người dùng',
        component: Usermanagement,
        route: Route,
    },
    {
        icon: 'tv-outline',
        path: '/lesson',
        name: 'Báo cáo bài học',
        component: Lesson,
        route: Route,
    },
    {
        icon: 'newspaper-outline',
        path: '/reportmanagement',
        name: 'Quản lí báo cáo',
        component: Reportmanagement,
        route: Route,
    },
    {
        icon: 'tv-outline',
        path: '/facilitymanagement',
        name: 'Quản lí cơ sở',
        component: Facilitymanagement,
        route: Route,
    },
    {
        icon: 'list-outline',
        path: '/eventmanagement',
        name: 'Quản lí sự kiện',
        component: Eventmanagement,
        route: Route,
    },
    {
        icon: 'home-outline',
        path: '/room',
        name: 'Quản lí phòng',
        component: Room,
        route: Route,
    },
    {
        icon: 'gift-outline',
        path: '/schedule',
        name: 'Quản lí lịch trình',
        component: Schedule,
        route: Route,
    },
    {
        icon: 'tv-outline',
        path: '/postmanagement',
        name: 'Quản lí bài viết',
        component: Postmanagement,
        route: Route,
    },
    {
        icon: 'book-outline',
        path: '/settingsmanagement',
        name: 'Quản lí cài đặt',
        component: Settingsmanagement,
        route: Route,
    },
    // {
    //     path: '/file',
    //     name: 'file',
    //     component: File,
    //     route: Route,
    // },
    // {
    //     path: '/schedulemanagement',
    //     name: 'schedulemanagement',
    //     component: Schedulemanagement,
    //     route: Route,
    // },
    // {
    //     path: '/modulemanagement',
    //     name: 'modulemanagement',
    //     component: Modulemanagement,
    //     route: Route,
    // },
    // {
    //     path: '/coursemanagement',
    //     name: 'coursemanagement',
    //     component: Coursemanagement,
    //     route: Route,
    // },
    // {
    //     path: '/lessonmanagement',
    //     name: 'lessonmanagement',
    //     component: Lessonmanagement,
    //     route: Route,
    // },
    // {
    //     path: '/timemanagement',
    //     name: 'timemanagement',
    //     component: Timemanagement,
    //     route: Route,
    // },
    // {
    //     path: '/filemanagement',
    //     name: 'filemanagement',
    //     component: Filemanagement,
    //     route: Route,
    // },
];

const otherPublicRoutes = [
    // {
    //     path: '/error-404',
    //     name: 'Error - 404',
    //     component: ErrorPageNotFound,
    //     route: Route,
    // },
    // {
    //     path: '/error-500',
    //     name: 'Error - 500',
    //     component: ServerError,
    //     route: Route,
    // },
    // {
    //     path: '/account/confirm',
    //     name: 'Confirm',
    //     component: Confirm,
    //     route: Route,
    // },
];

// flatten the list of all nested routes
const flattenRoutes = (routes) => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach((item) => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};
// auth
const authRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        route: Route,
    },
    {
        path: '/account/logout',
        name: 'Logout',
        component: Logout,
        route: Route,
    },
    {
        path: '/account/forget-password',
        name: 'Forget Password',
        component: ForgetPassword,
        route: Route,
    },
    {
        path: '/account/confirm',
        name: 'confirm',
        component: Confirm,
        route: Route,
    },
    {
        path: '/account/changepass',
        name: 'changepass',
        component: ChangePass,
        route: Route,
    },
    {
        path: '/account/information',
        name: 'information',
        component: Information,
        route: Route,
    },
];

// All routes
const authProtectedRoutes = [rootRoute, ...dashboardRoutes, ...leftsidebarRoutes];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);

export { publicRoutes, authProtectedRoutes, authProtectedFlattenRoutes, publicProtectedFlattenRoutes };

export default leftsidebarRoutes;
