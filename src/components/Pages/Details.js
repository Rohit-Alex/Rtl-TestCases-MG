import React from 'react'
import { Card, Space } from 'antd'
import Timeline from '../../components/Timeline'
import PageTitle from '../../components/PageTitle'
import GeneralInfo from '../../components/GeneralInfo'
import BackTop from "../../components/BackTop";
import UpCircleTwoTone from '@ant-design/icons/UpCircleTwoTone'
import { ApiProvider } from "../../contexts/apiContext";

const Home = () => {
    return (
        <ApiProvider>
            <Card bordered={false}>
                <Space direction='vertical' size={'large'}>
                    <PageTitle />
                    <GeneralInfo />
                    <Timeline />
                    <BackTop>
                        <UpCircleTwoTone />
                    </BackTop>
                </Space>
            </Card>
        </ApiProvider>
    )
}

export default Home