import './ContactPage.css'
import { useState } from 'react';
import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import { Button, Typography, Space, Modal, Image } from 'antd';
import demo from '../assets/img/Big2_Demo.mp4'
import pic from '../assets/img/bubbles_static.png'

const { Title, Paragraph, Text } = Typography

function ContactPage() {
    const [size, setSize] = useState('large');
    const [videoFile, setVideoFile] = useState(demo);

    return (
        <div className='contact-page'>
            <div className='contact-page-inner'>
                <Title className='contact-title' italic>Contact Me!</Title>
                <Space wrap align='center'>
                    <Button 
                        type='default' 
                        shape='round' 
                        size={size} 
                        href='https://github.com/ariamj' 
                        target='_blank' 
                        icon={<GithubFilled/>}
                    >
                        GitHub
                    </Button>
                    <Button 
                        type='default' 
                        shape='round' 
                        size={size} 
                        href='https://www.linkedin.com/in/arianna-joe' 
                        target='_blank' 
                        icon={<LinkedinFilled/>}
                    >
                        LinkedIn
                    </Button>
                    <Button 
                        type='default' 
                        shape='round' 
                        size={size} 
                        onClick={(e) => {
                            window.location.href = "mailto:joearianna828@gmail.com";
                            e.preventDefault();
                        }}
                        target='_blank' 
                        icon={<MailFilled/>}
                    >
                        Email: joearianna828@gmail.com
                    </Button>
                </Space>
            </div>
        </div>
    );
}

export default ContactPage;