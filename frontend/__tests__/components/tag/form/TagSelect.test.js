import * as React from 'react'
import { act } from 'react-test-renderer'
import TestRenderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import wait from 'waait'
import TagSelect from '../../../../components/tag/form/TagSelect'
import { 
    TAGS_QUERY_MOCK, 
    TAGS_QUERY_MOCK_ERROR, 
    TAGS_QUERY_MOCK_NODATA,
} from '../../../../queries/__mocks__/TAGS_QUERY_MOCKS'

const handleChange = () => {
    return 'toto'
}

const createComponent = ({ mocks, value, isMulti, creatable }) => {
    return TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <TagSelect 
                name="tags" 
                handleChange={handleChange}
                value={value}
                creatable={!!creatable}
                isMulti={!!isMulti}
            />
        </MockedProvider>
    )
}

let component

describe('TagSelect', () => {
    it('should render without throwing an error', function () {
        createComponent({ mocks: [TAGS_QUERY_MOCK], value: ['test'] })
        createComponent({ mocks: [TAGS_QUERY_MOCK], value: 'test' })
        createComponent({ mocks: [TAGS_QUERY_MOCK], value: null })
        createComponent({ mocks: [TAGS_QUERY_MOCK], isMulti: true })
        createComponent({ mocks: [TAGS_QUERY_MOCK], creatable: true })
        // createComponent({ mocks, isMulti: true, creatable: true })
    })

    it('should render loading state initially', () => {
        component = createComponent({ mocks: [TAGS_QUERY_MOCK] })
        const tree = component.toJSON();
        expect(tree.children).toContain('Loading');
    })

    it('should render select', async () => {
        await act( async () => {
            component = createComponent({ mocks: [TAGS_QUERY_MOCK] })
            await wait(200)
            const tree = component.toJSON();
            expect(tree.props.className).toContain('select');
        })
    })

    it('should render message on error', async () => {
        await act( async () => {
            component = createComponent({ mocks: [TAGS_QUERY_MOCK_ERROR] })
            await wait(100)
            const tree = component.toJSON();
            // console.log('tree', tree)
        })
    })

    it('should render error when no data', async () => {
        await act( async () => {
            component = createComponent({ mocks: [TAGS_QUERY_MOCK_NODATA] })
            await wait(100)
            const tree = component.toJSON();
            // console.log('tree', tree)
        })
    })
})