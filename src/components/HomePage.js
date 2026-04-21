import './HomePage.css'
import { Typography, Flex } from 'antd';
import { useRef } from 'react';
import Experience from './Experience.jsx';
// import Skills from './Skills.jsx';

const { Title, Paragraph } = Typography

function HomeIntro() {
    const scrollRef = useRef(null);

    return (
        <div className="homePage">
            <Flex className='section intro-section' justify='space-evenly' align='center'>
                <Flex className='section-inner intro' vertical align='flex-start' justify='center' ref={scrollRef}>
                    <Title className="name">Arianna</Title>
                    <Title level={3} className="sub-info" italic>New grad UBC Computer Science Major</Title>
                    <Paragraph className="intro-description">
                        Hello, welcome to my page! I am a fast learner who enjoys challenging myself to 
                        create unique products that can make an impact. With a 
                        background in arts, it is particularly statisfiable and appreciative to be able to bring a vision 
                        to life. Whether that be in the form of an application, or simply, a nicely done UI.
                    </Paragraph>
                    <Paragraph>
                        Fun fact: All art used on this site was created by me :)
                    </Paragraph>
                </Flex>
            </Flex>
            <Flex className='section exp-section' justify='space-evenly' align='center'>
                <Experience/>
            </Flex>
            {/* <Flex className='section skills-section' justify='space-evenly' align='center'>
                <Skills/>
            </Flex> */}
        </div>
    );
}

export default HomeIntro;