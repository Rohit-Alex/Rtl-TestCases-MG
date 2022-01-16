/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HorizontalCards from './HorizontalCards'
import RuleTriggered from './RulesTriggered'

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

    describe('Rule triggered test', () => {
        const data = {
            ruleList: [{
                transactionNumber: '1234',
                logLevel: 'warn',
                message: 'Warning',
                isRuleIgnored: true,
                transactionTypeName: 'Commission',
                transactionTypeMode: 'CREDIT',
                condition:
                    '{"ruleset":{"operator":"and","rules":[{"key":"$/profile/geography","operator":"==","value":{"singleValue":"National"},"valueType":"String","specificType":"String","attributeType":"SYSTEM"},{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","operator":"<","value":{"singleValue":"20000"},"valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}',
                formula:
                    '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
            }],
            boardered: true,
            size: "24px", title:"Description title", 
            options: [{ label: 'condition', value: 'columnValue' }]
        }
        it('Should render completely', () => {
            const { container } = render(<RuleTriggered data={data}/>)
            expect(screen.getByTestId('RuleTriggered-test-id')).toBeInTheDocument()
            expect(screen.getAllByTestId('viewmodal-test-id').length).toBe(2)
            expect(screen.getAllByRole('button', {name: 'View'}).length).toBe(2)

        })
    })