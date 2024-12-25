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
                <Flex className='intro-img' vertical justify='center' align='center'>
                    <Image width={300} src={gif} preview={false} className='intro-img-img'/>
                </Flex>
            </Flex>
            {/* <div className='skill-section'></div> */}
        </div>
    );
}

export default HomeIntro;