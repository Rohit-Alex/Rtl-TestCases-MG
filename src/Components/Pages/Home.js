// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { Tabs } from 'antd'
// import { HOMEPAGETABS } from '../../utils/constants'
// import { navigateToUrlWithParams } from '../../utils/router'
// import EventList from '../EventList'
// import qs from 'query-string'

// const { TabPane } = Tabs

// const Home = () => {
//     const TABS = {
//         FIRST_TAB: 'events',
//         SECOND_TAB: 'transactions',
//     }

//     const constants = {
//         ROOT: '/',
//         MODULE_ROOT: '/events',
//         DEFAULT_PATH: '/events',
//         DEFAULT_TAB: TABS.FIRST_TAB,
//     }

//     const navigateToUrlWithParams = (navigate, history, url, params) => {
//         const existingParams = getParams(history)
//         const search = `?${qs.stringify({ ...existingParams, ...params })}`
//         navigate({
//             pathname: url,
//             search,
//         })
//         sendCommand(commandTypes.PUSH_NAVIGATION_HISTORY, {
//             pathname: url,
//             search,
//         })
//     }

//     function getParams(history) {
//         return {
//             ...qs.parse(history.search),
//             locale: store.get(STOREKEYS.LOCALE),
//         }
//     }

//     const location = useLocation()

//     const navigate = useNavigate()

//     const onTabChange = (activeKey) => {
//         const newTab = HOMEPAGETABS.find((h) => h.mainTab === activeKey)

//         navigateToUrlWithParams(navigate, location, location.pathname, {
//             tab: newTab.mainTab,
//         })
//     }

//     return (
//         <Tabs defaultActiveKey="1" onChange={onTabChange} activeKey={selectedTab.mainTab}>
//             <TabPane tab="Tab 1" key="1">
//                 <div data-testid='tab1'>
//                     Tab 1
//                 </div>
//             </TabPane>
//             <TabPane tab="Tab 2" disabled key="2">
//                 <div data-testid='tab2'>
//                     Tab 2
//                 </div>
//             </TabPane>
//             <TabPane tab="Tab 3" key="3">
//                 <div data-testid='tab3'>
//                     Tab 3
//                 </div>
//             </TabPane>
//         </Tabs>
//     )
// }

// export default Home