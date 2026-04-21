import './NavTabs.css'
import HomeIntro from './HomePage';

import { Tabs, theme, Button, Flex } from "antd"
import StickyBox from 'react-sticky-box';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import ContactPage from './ContactPage';
// import TestPage from './TestPage';
import ProjectsPage from './ProjectsPage';
import { Tooltip } from '@mui/material';
import ArtPage from './ArtPage';

function NavTabs() {

    const tab_items = [
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
    ]

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
    );
}

export default NavTabs;