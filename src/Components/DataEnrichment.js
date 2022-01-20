import React from 'react'
import { Card, Descriptions } from 'antd'


const DataEnrichment = ({ data }) => {
    return (
        <Card bordered={false}>
            {Object.keys(data).map((option, i) => {
                const value = data[option]

                const columnLength = (value && value.length) || 1
                return (
                    <fieldset
                        className="audit-groupbox-border"
                        data-testid="audit-groupbox-border"
                        key={`${option}_${i}`}
                    >
                        <legend
                            className="audit-groupbox-border-title"
                            data-testid="audit-groupbox-border-title"
                        >
                            {(option)}
                        </legend>

                        <Descriptions bordered layout="vertical" column={columnLength}>
                            {value &&
                                value.map((attribute, j) => (
                                    <Descriptions.Item
                                        key={`${option}attribute${j}`}
                                        label={attribute.attributeName}
                                    >
                                        {attribute.attributeValue}
                                    </Descriptions.Item>
                                ))}
                        </Descriptions>
                    </fieldset>
                )
            })}
        </Card>
    )
}



export default DataEnrichment