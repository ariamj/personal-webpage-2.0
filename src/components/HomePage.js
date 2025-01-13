import './HomePage.css'
import { Typography, Image, Flex } from 'antd';
import pic from "../assets/img/bubbles_static.png"
import gif from "../assets/img/bubbles_animated.GIF"

const { Title, Paragraph, Text } = Typography

function HomeIntro() {

    return (
        <div className="homePage">
            <Flex className='intro-section' justify='space-evenly' align='center'>
                <Flex className='intro glass' vertical align='flex-start' justify='center'>
                    <Title classname="name">Arianna</Title>
                    <Title level={3} classname="sub-info" italic>4th year, UBC Computer Science Major</Title>
                    <Paragraph className="intro-description">
                        Hello, welcome to my page! I am a fast learner who enjoys challenging myself to 
                        create unique products that have meaning and are valuable for practical use. With a 
                        background in arts, it is particularly statisfiable and appreciative to be able to bring a vision 
                        to life. Whether that be in the form of an application, or simply, a nicely done UI.
                    </Paragraph>
                </Flex>
                {/* <Flex className='intro-img' vertical justify='center' align='center'>
                    <Image width={300} src={gif} preview={false} className='intro-img-img'/>
                </Flex> */}
            </Flex>
            <Flex className='exp-section' justify='space-evenly' align='center'>
                <Flex className='experience glass' align='center' justify='space-evenly'>
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
        </div>
    );
}

export default HomeIntro;