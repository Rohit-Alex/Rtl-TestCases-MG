import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Tabs } from 'antd'
import { HOMEPAGETABS } from '../../utils/constants'
import { navigateToUrlWithParams } from '../../utils/router'
import EventList from '../../components/EventsList'
import TransactionList from '../../components/TransactionList'

const { TabPane } = Tabs

const Home = () => {
    const location = useLocation()

    const navigate = useNavigate()

    const onTabChange = (activeKey) => {
        const newTab = HOMEPAGETABS.find((h) => h.mainTab === activeKey)

        navigateToUrlWithParams(navigate, location, location.pathname, {
            tab: newTab.mainTab,
        })
    }

    return (
        <Tabs defaultActiveKey="1" size="large" onChange={onTabChange}>
            <TabPane tab="Events" key="events">
                <EventList />
            </TabPane>
            <TabPane tab="Transactions" key="transactions">
                <TransactionList />
            </TabPane>
        </Tabs>
    )
}

export default Home