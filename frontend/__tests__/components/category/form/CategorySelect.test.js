import * as React from 'react'
import { act } from 'react-test-renderer'
import TestRenderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import wait from 'waait'
import CategorySelect from '../../../../components/category/form/CategorySelect'
import { 
    CATEGORIES_QUERY_MOCK, 
    CATEGORIES_QUERY_MOCK_ERROR, 
    CATEGORIES_QUERY_MOCK_NODATA,
} from '../../../../queries/__mocks__/CATEGORIES_QUERY_MOCKS'

const handleChange = () => {
    return 'toto'
}

const createComponent = ({ mocks, value, isMulti, creatable }) => {
    return TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <CategorySelect 
                name="categories" 
                handleChange={handleChange}
                value={value}
                creatable={!!creatable}
                isMulti={!!isMulti}
            />
        </MockedProvider>
    )
}

let component

describe('CategorySelect', () => {
    it('should render without throwing an error', function () {
        createComponent({ mocks: [CATEGORIES_QUERY_MOCK], value: ['Programming'] })
        createComponent({ mocks: [CATEGORIES_QUERY_MOCK], value: 'Programming' })
        createComponent({ mocks: [CATEGORIES_QUERY_MOCK], value: null })
        createComponent({ mocks: [CATEGORIES_QUERY_MOCK], isMulti: true })
        createComponent({ mocks: [CATEGORIES_QUERY_MOCK], creatable: true })
        // createComponent({ mocks, isMulti: true, creatable: true })
    })

    it('should render loading state initially', () => {
        component = createComponent({ mocks: [CATEGORIES_QUERY_MOCK] })
        const tree = component.toJSON();
        expect(tree.children).toContain('Loading');
    })

    it('should render select', async () => {
        await act( async () => {
            component = createComponent({ mocks: [CATEGORIES_QUERY_MOCK] })
            await wait(100)
            const tree = component.toJSON();
            expect(tree.props.className).toContain('select');
        })
    })

    it('should render message on error', async () => {
        await act( async () => {
            component = createComponent({ mocks: [CATEGORIES_QUERY_MOCK_ERROR] })
            await wait(100)
            const tree = component.toJSON();
            // console.log('tree', tree)
        })
    })

    it('should render error when no data', async () => {
        await act( async () => {
            component = createComponent({ mocks: [CATEGORIES_QUERY_MOCK_NODATA] })
            await wait(100)
            const tree = component.toJSON();
            // console.log('tree', tree)
        })
    })
})