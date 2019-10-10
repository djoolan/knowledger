import * as React from 'react'
import TestRenderer, { act } from 'react-test-renderer'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import wait from 'waait'
import ArticleCategoriesField from '../../../../../components/article/form/fields/ArticleCategoriesField'
import { 
    CATEGORIES_QUERY_MOCK, 
    CATEGORIES_QUERY_MOCK_ERROR, 
    CATEGORIES_QUERY_MOCK_NODATA,
} from '../../../../../queries/__mocks__/CATEGORIES_QUERY_MOCKS'

const handleChange = () => {
    return 'toto'
}

const createComponent = ({ mocks, value, isMulti, creatable }) => {
    return TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <ArticleCategoriesField 
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

describe('ArticleCategoriesField', () => {
    it('should render without throwing an error', function () {
        createComponent({ mocks: [CATEGORIES_QUERY_MOCK], value: ['test'] })
        createComponent({ mocks: [CATEGORIES_QUERY_MOCK], value: 'test' })
        createComponent({ mocks: [CATEGORIES_QUERY_MOCK], value: null })
        createComponent({ mocks: [CATEGORIES_QUERY_MOCK], isMulti: true })
        createComponent({ mocks: [CATEGORIES_QUERY_MOCK], creatable: true })
        // createComponent({ mocks, isMulti: true, creatable: true })
    })

    it('should render loading state initially', () => {
        component = createComponent({ mocks: [CATEGORIES_QUERY_MOCK] })
        const tree = component.toJSON();
        expect(tree.children[1].children).toContain('Loading');
    })

    it('should render select', async () => {
        await act( async () => {
            component = createComponent({ mocks: [CATEGORIES_QUERY_MOCK] })
            await wait(200)
            const tree = component.toJSON();
            expect(tree.children[1].props.className).toContain('select');
        })
    })

    it('should render message on error', async () => {
        await act( async () => {
            component = createComponent({ mocks: [CATEGORIES_QUERY_MOCK_ERROR] })
            await wait(100)
            const tree = component.toJSON();
        })
    })

    it('should render error when no data', async () => {
        await act( async () => {
            component = createComponent({ mocks: [CATEGORIES_QUERY_MOCK_NODATA] })
            await wait(100)
            const tree = component.toJSON();
        })
    })
})