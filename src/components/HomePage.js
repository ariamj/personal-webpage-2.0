import './HomePage.css'
import { Typography, Image, Flex, Tag, ConfigProvider } from 'antd';
// import useScrollSnap from "./useScrollSnap";
import pic from "../assets/img/bubbles_static.png"
import gif from "../assets/img/bubbles_animated.GIF"
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import * as motion from "motion/react-client";
// import { Typography } from '@mui/material';

const { Title, Paragraph, Text } = Typography

function HomeIntro() {
    const scrollRef = useRef(null);
    // useScrollSnap({ref: scrollRef, duration: 50, delay: 20 });

    const box = {
        width: 100,
        height: 100,
        backgroundColor: "#9911ff",
        borderRadius: 5,
    }

    return (
        // <ConfigProvider
        //     theme={{
        //         token: {
        //             // fontSize: 20,
        //             fontSizeHeading1: 100,
        //             // fontSizeHeading2: 24,
        //             // fontSizeHeading3: 20,
        //             // fontSizeHeading4: 16,
        //             // fontSizeHeading5: 14,
        //         },
        //         components: {
        //             Typography: {
        //                 // lineHeightHeading1: 1.2,
        //                 // lineHeightHeading2: 1.2,
        //                 // lineHeightHeading3: 1.2,
        //                 // lineHeightHeading4: 1.2,
        //                 // lineHeightHeading5: 1.2,
        //             },
        //             Select: {
        //                 controlHeight: 40,
        //                 controlHeightLG: 42,
        //                 borderRadius: 16,
        //                 lineWidth: 0,
        //             },
        //         },
        //     }}
        // >
        <div className="homePage">
            <Flex className='section intro-section' justify='space-evenly' align='center'>
                <Flex className='section-inner intro' vertical align='flex-start' justify='center' ref={scrollRef}>
                    <Title className="name">Arianna</Title>
                    <Title level={3} className="sub-info" italic>4th year, UBC Computer Science Major</Title>
                    <Paragraph className="intro-description">
                        Hello, welcome to my page! I am a fast learner who enjoys challenging myself to 
                        create unique products that have meaning and are valuable for practical use. With a 
                        background in arts, it is particularly statisfiable and appreciative to be able to bring a vision 
                        to life. Whether that be in the form of an application, or simply, a nicely done UI.
                    </Paragraph>
                </Flex>
                {/* <Flex className='intro-img' vertical justify='center' align='center'>
                    <Image width={300} src={gif} preview={true} className='intro-img-img'/>
                </Flex> */}
                {/* <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    style={box}
                /> */}
            </Flex>
            <Flex className='section exp-section' justify='space-evenly' align='center'>
                <Flex className='section-inner experience glass' align='center' justify='space-evenly' ref={scrollRef}>
                    <Title level={2} className='exp-title'>Internships</Title>
                    {/* <Paragraph className='exp-description'>
                        Did 8 months of internship each at SAP and PayByPhone...
                    </Paragraph> */}
                    <Flex className='exp-infos' vertical>
                        <Title level={3} className='exp-pos'>Software Test Developer</Title>
                        <Title level={4} className='exp-company' italic>PayByPhone</Title>
                        <Paragraph className='exp-description'>
                            During my 8 months at PayByPhone, I contributed to maintaining and increasing the coverage 
                            of the Android team's automation test scripts using frameworks such as Espresso, UiAutomator, 
                            and JetPack Compose to ensure the appearances of the UI and the various functionalities 
                            within the app continues to work as expected. Additionally, I also helped maintain and update 
                            utility Android applications using Kotlin that helps support the team.
                        </Paragraph>
                        <Title level={3} className='exp-pos'>Agile Developer</Title>
                        <Title level={4} className='exp-company' italic>SAP</Title>
                        <Paragraph className='exp-description'>
                            Throughout the 8 months I spent at SAP, I had the opportunity to lead the quality assurance 
                            step implementing a new feature. Ensuring the feature was ready for release; including creating, 
                            writing up, and executing test plans. I also supported team with various testing for both 
                            regression and new features to ensure quality performance in terms of functionality and performance 
                            through examining API calls in the network. Furthermore, I contributed to debugging and fixing 
                            outstanding bugs to help improve the overall performance of our team owned features while increasing 
                            the overall coverage of codes owned by the team via writing unit tests with both JavaScript and TypeScript.
                        </Paragraph>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className='section skills-section' justify='space-evenly' align='center'>
                <Flex className='section-inner skills glass' justify='space-evenly' align='center' ref={scrollRef}>
                    <Title level={2} className='skills-title'>Skills</Title>
                    <Flex className='skills-info' vertical>
                        <Title level={4} className='skills-group-title'>Programming Languages</Title>
                        <Flex gap='8px 0' wrap>
                            <Tag className='skill-tag glass'>Java</Tag>
                            <Tag className='skill-tag glass'>Python</Tag>
                            <Tag className='skill-tag glass'>JavaScript</Tag>
                            <Tag className='skill-tag glass'>TypeScript</Tag>
                            <Tag className='skill-tag glass'>C++</Tag>
                            <Tag className='skill-tag glass'>C</Tag>
                            <Tag className='skill-tag glass'>SQL</Tag>
                            <Tag className='skill-tag glass'>Kotlin</Tag>
                            <Tag className='skill-tag glass'>PHP</Tag>
                            <Tag className='skill-tag glass'>Assembly</Tag>
                            <Tag className='skill-tag glass'>DrRacket</Tag>
                        </Flex>
                        <Title level={4} className='skills-group-title'>Web</Title>
                        <Flex gap='8px 0' wrap>
                            <Tag className='skill-tag glass'>HTML</Tag>
                            <Tag className='skill-tag glass'>CSS</Tag>
                            <Tag className='skill-tag glass'>React</Tag>
                        </Flex>
                        <Title level={4} className='skills-group-title'>Frameworks/Libraries</Title>
                        <Flex gap='8px 0' wrap>
                            <Tag className='skill-tag glass'>Node</Tag>
                            <Tag className='skill-tag glass'>OpenGL</Tag>
                            <Tag className='skill-tag glass'>Scikit-Learn</Tag>
                            <Tag className='skill-tag glass'>Espresso</Tag>
                            <Tag className='skill-tag glass'>UiAutomator</Tag>
                            <Tag className='skill-tag glass'>Jetpack Compose</Tag>
                            <Tag className='skill-tag glass'>JUnit</Tag>
                            <Tag className='skill-tag glass'>Mocha</Tag>
                            <Tag className='skill-tag glass'>Swing</Tag>
                            <Tag className='skill-tag glass'>Jasmine</Tag>
                            <Tag className='skill-tag glass'>Jest</Tag>
                        </Flex>
                        <Title level={4} className='skills-group-title'>Tools/Environments</Title>
                        <Flex gap='8px 0' wrap>
                            <Tag className='skill-tag glass'>Git</Tag>
                            <Tag className='skill-tag glass'>GitHub</Tag>
                            <Tag className='skill-tag glass'>Visual Studio Code</Tag>
                            <Tag className='skill-tag glass'>Android Studio</Tag>
                            <Tag className='skill-tag glass'>IntelliJ</Tag>
                            <Tag className='skill-tag glass'>Jira</Tag>
                            <Tag className='skill-tag glass'>Figma</Tag>
                            <Tag className='skill-tag glass'>Jupyter</Tag>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </div>
        // </ConfigProvider>
    );
}

export default HomeIntro;