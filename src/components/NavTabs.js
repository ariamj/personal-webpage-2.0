import './NavTabs.css'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import HomeIntro from './HomePage';
import ProjectsCarousal from './ProjectsCarousal';

import { Tabs, theme, Button, Flex, Image } from "antd"
import StickyBox from 'react-sticky-box';
import { render } from '@testing-library/react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import ContactPage from './ContactPage';
// import TestPage from './TestPage';
import ProjectsPage from './ProjectsPage';
import { Tooltip } from '@mui/material';
import ArtPage from './ArtPage';

function NavTabs() {
    // const [key, setKey] = useState('home');

    // const tab_items = new Array(3).fill(null).map((_, i) => {
    //     const id = String(i + 1);
    //     return {
    //         label: `Tab ${id}`,
    //         key: id,
    //         children: `Content of Tab Pane ${id}`,
    //     };
    // })

    const tab_items = new Array(
        {
            label: 'About Me',
            key: 'home',
            children: <HomeIntro></HomeIntro>
        },
        {
            label: 'Projects',
            key: 'projects',
            children: <ProjectsPage></ProjectsPage>
        },
        {
            label: 'Art',
            key: 'art',
            children: <ArtPage></ArtPage>
        },
        {
            label: 'Contact',
            key: 'contact',
            children: <ContactPage></ContactPage>
        },
        // {
        //     label: 'Test',
        //     key: 'test',
        //     children: <TestPage></TestPage>
        // },
    );

    const { token: { colorBgContainer } } = theme.useToken();

    const renderTabBar = (props, DefaultTabBar) => (
        <StickyBox
            className='tab-bar'
            offsetTop={0}
            offsetBottom={0}
            style={{ zIndex: 99, }}
        >
            <DefaultTabBar
                {...props}
                style={{ background: colorBgContainer, }}
            />
        </StickyBox>
    )

    const contact = (
        <Flex className='contact-btns' gap="small" justify='space-between'>
            <Tooltip title="GitHub">
                <Button className='github-contact' href='https://github.com/ariamj' target='_blank' icon={<GithubOutlined />}/>
            </Tooltip>
            <Tooltip title="LinkedIn">
                <Button className='linked-contact' href='https://www.linkedin.com/in/arianna-joe' target='_blank' icon={<LinkedinOutlined />}/>
            </Tooltip>
        </Flex>
    )

    return (
        <Tabs
            id="main-pages-tabs" 
            className="nav-tabs" 
            defaultActiveKey="home"
            // centered
            renderTabBar={ renderTabBar }
            tabBarExtraContent={ contact }
            items= { tab_items }
        />
        // <Tabs 
        //     id="main-pages-tabs" 
        //     variant="underline" 
        //     activeKey={key} 
        //     onSelect={(k) => setKey(k)} 
        //     className="nav-tabs"
        //     justify
        // >
        //     <Tab eventKey="home" title="Home">
        //         Tabe content for Home
        //         <HomeIntro></HomeIntro>
        //     </Tab>
        //     <Tab eventKey="profile" title="Profile">
        //         Tab content for Profile
        //     </Tab>
        //     <Tab eventKey="project" title="Projects">
        //         Tab content for Projects
        //         <ProjectsPage></ProjectsPage>
        //     </Tab>
        //     <Tab eventKey="contact" title="Contact" disabled>
        //         Tab content for Contact
        //     </Tab>
        // </Tabs>
    );
}

export default NavTabs;