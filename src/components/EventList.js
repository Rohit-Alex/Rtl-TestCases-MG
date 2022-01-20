import React, { useState, useEffect } from 'react'
import { Space, Table } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'

// import { AUDIT_LIST_SCHEMA, DATA } from '../../utils/constants'
import './eventList.scss'

const EventList = () => {
    const [page, setPage] = useState(1)
    const [data] = useState([])
    const [hasMore, setHasMore] = useState(true)

    /* async function getData() {
      fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=50`)
        .then((response) => response.json())
        .then((ans) => {
          console.log(ans)
          // setPage((prev) => prev + 1)
          setData((prev) => [
            ...prev,
            ...ans.data.map((d) => {
              d.key = d._id
              return d
            }),
          ])
        })
    } */

    useEffect(() => {
        // getData()
    }, [page])

    /* istanbul ignore next */
    const nextData = () => {
        setPage((prev) => prev + 1)

        if (page > 4) setHasMore(false)
    }

    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* <Search />
                <ColumnFilter columnList={[]} /> */}
            </Space>
            <InfiniteScroll
                dataLength={data.length} // This is important field to render the next data
                next={nextData}
                hasMore={hasMore}
                // loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <Table loading={false} columns={[]} data={data} pagination={false} />
            </InfiniteScroll>
        </Space>
    )
}

export default EventList