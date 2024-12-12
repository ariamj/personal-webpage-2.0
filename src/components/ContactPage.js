import './ContactPage.css'
import { useState } from 'react';
import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import { Button, Typography, Space } from 'antd';

const { Title, Paragraph, Text } = Typography

function ContactPage() {
    const [size, setSize] = useState('large');

    return (
        <div className='contact-page'>
            <div className='contact-page-inner'>
                <Title className='contact-title' italic>Contact Me!</Title>
                <Space>
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
                        target='_blank' 
                        icon={<MailFilled/>}
                    >
                        Email
                    </Button>
                </Space>
            </div>
        </div>
    );
}

export default ContactPage;