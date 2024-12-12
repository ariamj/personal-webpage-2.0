import './NavTabs.css'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import HomeIntro from './HomePage';
import ProjectsPage from './ProjectsPage';

import { Tabs, theme, Button, Flex } from "antd"
import StickyBox from 'react-sticky-box';
import { render } from '@testing-library/react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import ContactPage from './ContactPage';

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
            label: 'Home',
            key: 'home',
            children: <HomeIntro></HomeIntro>
        },
        {
            label: 'Projects',
            key: 'projects',
            children: <ProjectsPage></ProjectsPage>
        },
        {
            label: 'Contact',
            key: 'contact',
            children: <ContactPage></ContactPage>
        },
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
            <Button className='github-contact' href='https://github.com/ariamj' target='_blank' icon={<GithubOutlined />}/>
            <Button className='linked-contact' href='https://www.linkedin.com/in/arianna-joe' target='_blank' icon={<LinkedinOutlined />}/>
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