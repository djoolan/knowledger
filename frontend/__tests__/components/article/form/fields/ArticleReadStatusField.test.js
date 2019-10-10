import * as React from 'react'
import { act } from 'react-test-renderer'
import TestRenderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import wait from 'waait'
import ArticleReadStatusField from '../../../../../components/article/form/fields/ArticleReadStatusField'
import { 
    READSTATUS_QUERY_MOCK, 
    // READSTATUS_QUERY_MOCK_ERROR, 
    // READSTATUS_QUERY_MOCK_NODATA,
} from '../../../../../queries/__mocks__/READSTATUS_QUERY_MOCKS'

const handleChange = () => {
    return 'toto'
}

const createComponent = ({ mocks, value, creatable }) => {
    return TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <ArticleReadStatusField 
                name="readStatus" 
                handleChange={handleChange}
                value={value}
                creatable={creatable}
            />
        </MockedProvider>
    )
}

let component

describe('ArticleReadStatusField', () => {
    it('should render without throwing an error', async () => {
        await act(async () => {
            createComponent({ mocks: [READSTATUS_QUERY_MOCK], value: ['test'] })
            createComponent({ mocks: [READSTATUS_QUERY_MOCK], value: 'test' })
            createComponent({ mocks: [READSTATUS_QUERY_MOCK], value: null })
            createComponent({ mocks: [READSTATUS_QUERY_MOCK], creatable: true })
            createComponent({ mocks: [READSTATUS_QUERY_MOCK], creatable: false })
            await wait(300)
        })
    })

    it('should render loading state initially', () => {
        component = createComponent({ mocks: [READSTATUS_QUERY_MOCK] })
        const tree = component.toJSON();
        expect(tree.children[1].children).toContain('Loading');
    })

    it('should render select', async () => {
        await act( async () => {
            component = createComponent({ mocks: [READSTATUS_QUERY_MOCK] })
            await wait(200)
            const tree = component.toJSON();
            expect(tree.children[1].props.className).toContain('select');
        })
    })

    // it('should render message on error', async () => {
    //     await act( async () => {
    //         component = createComponent({ mocks: [READSTATUS_QUERY_MOCK_ERROR] })
    //         await wait(100)
    //         const tree = component.toJSON();
    //     })
    // })

    // it('should render error when no data', async () => {
    //     await act( async () => {
    //         component = createComponent({ mocks: [READSTATUS_QUERY_MOCK_NODATA] })
    //         await wait(100)
    //         const tree = component.toJSON();
    //     })
    // })
})