// @flow
import React, { Suspense } from 'react';
// actions
import { Content, Header } from 'antd/lib/layout/layout';
import HeaderContent from './header-content/HeaderContent';
import { Layout } from 'antd';
import useMenu from '../hooks/useMenu';
import Lottie from 'react-lottie';
import loadingJson from '../assets/animation/loading.json';
import LeftSidebar from './LeftSidebar';

type VerticalLayoutProps = {
    children?: any,
};

type VerticalLayoutState = {
    isMenuOpened?: boolean,
};

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const DetachedLayout = ({ children }: VerticalLayoutProps, state: VerticalLayoutState): React$Element<any> => {
    const loading = () => (
        <div
            style={{
                display: 'flex',
                width: '100%',
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            className="text-center">
            <Lottie height={200} width={200} options={defaultOptions} />
        </div>
    );
    const menuCustom = useMenu();
    return (
        <>
            <div style={{ display: 'flex' }}>
                <LeftSidebar />
                <div style={{ width: '100%' }}>
                    {/* <Header style={{ position: 'fixed', width: '100%' }}> */}
                    <HeaderContent
                    //  menu={menuCustom}
                    />
                    {/* </Header> */}
                    <Content style={{ margin: '24px 16px 0', marginTop: 64 }}>
                        <Suspense fallback={loading()}>{children}</Suspense>
                    </Content>
                </div>
            </div>
        </>
    );
};

export default DetachedLayout;
