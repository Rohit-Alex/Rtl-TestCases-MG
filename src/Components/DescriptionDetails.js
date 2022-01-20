import React from 'react'
import './horizontalCards.scss'
import { Card, Col, Row, Badge, Space } from 'antd'
import { omit } from "lodash";
import Descriptions from '../Descriptions'
import Exceptions from "../Timeline/exceptions";
import { constructMessage } from '../utils';


const constructColumnDetails = function (option) {

    /* Remove the unused keys from the object */
    const updatedOption = omit(option, ['ruleName', 'isRuleIgnored', 'isBestFit'])

    const descriptionDetails = <Card hoverable title={option.ruleName || option.transactionNumber} bordered={false}>
        <Space direction='vertical' size="middle">
            <Exceptions exceptions={constructMessage(option.logLevel, option.message)} />
            <Descriptions options={updatedOption} span={3} />
        </Space>
    </Card>

    switch (true) {
        case option.isRuleIgnored:
            return <Badge.Ribbon text={('IGNORED')} color={'yellow'}>
                {descriptionDetails}
            </Badge.Ribbon>
        case option.isBestFit:
            return <Badge.Ribbon text={('BESTFIT')} color={'magenta'}>
                {descriptionDetails}
            </Badge.Ribbon>
        default:
            return descriptionDetails;
    }
}

const HorizontalCards = ({ options }) => <div className="site-card-wrapper" data-testid="site-card-wrapper">
    <Row gutter={16}>
        {options && options.map((option, i) => (<Col span={10} key={`${option.ruleName}_${i}`} >
            {constructColumnDetails(option)}
        </Col>)
        )}
    </Row>
</div>


export default HorizontalCards