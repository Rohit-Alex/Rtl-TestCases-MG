import React from 'react'
import { Descriptions, Empty } from 'antd'
import { isPlainObject, isEmpty, omit } from 'lodash'
import BadgeWrapper from '../BadgeWrapper';
import ViewModalHandler from './ViewModal';

const DESCRIPTION_VIEW_KEYS = [
    'conditions',
    'condition',
    'formula',
    'formulas',
]
const DESCRIPTION_EXCLUDED_KEYS = ['logLevel', 'message']
const DESCRIPTION_BADGE_KEYS = [
    'transactionTypeMode',
    'transactionStatus',
]
const BADGE_SUCCESS_KEYS = [
    'credit',
    'Credit',
    'CREDIT',
    'credits',
    'created',
    'CREATED',
]

const DescriptionWrapper = ({
    bordered,
    size,
    title,
    span,
    options,
    ...rest
}) => {

    /* Check for the options empty.  */
    if (isEmpty(options)) {
        return <Empty description={('NO_DESCRIPTION_OPTIONS')} image="simple" />
    }

    /* Check option is Plain Object or not.*/
    const isObject = isPlainObject(options);

    let modifiedOptions = ''

    if (isObject) {
        modifiedOptions = omit(options, DESCRIPTION_EXCLUDED_KEYS)
    }

    const getBadge = (value) => {
        if (BADGE_SUCCESS_KEYS.includes(value)) {
            return <BadgeWrapper color={'green'} text={String(value)} />
        }
        return <BadgeWrapper color={'error'} text={String(value)} />
    }

    const renderDescriptiveItem = (label, value) => {
        switch (true) {
            case DESCRIPTION_VIEW_KEYS.includes(label):
                return <ViewModalHandler modalLabel={label} modalValue={value} />;
            case DESCRIPTION_BADGE_KEYS.includes(label):
                return getBadge(value)
            default:
                return String(value);
        }
    }

    /* Render Description details for OBJECT Options */
    const getObjectDescriptionItem = (data, spanVal) =>
        Object.keys(data).map((dataKey) => (
            <Descriptions.Item key={dataKey} label={(dataKey)} span={spanVal}>
                {renderDescriptiveItem(dataKey, data[dataKey])}
            </Descriptions.Item>
        ))

    /* Render Description details for ARRAY Options */
    const getArrayDescriptionItem = (data, spanVal) =>
        data
            .filter((option) => omit(option, DESCRIPTION_EXCLUDED_KEYS))
            .map((item) => (
                <Descriptions.Item
                    key={item.label}
                    label={(item.label)}
                    span={spanVal}
                >
                    {renderDescriptiveItem(item.label, item.value)}
                </Descriptions.Item>
            ))

    return (
        <Descriptions className="audit-descriptions-common" data-testid="audit-descriptions-common" {...rest} bordered={bordered} title={title} size={size}>
            {isObject
                ? getObjectDescriptionItem(modifiedOptions, span)
                : getArrayDescriptionItem(options, span)}
        </Descriptions>
    )
}



export default DescriptionWrapper