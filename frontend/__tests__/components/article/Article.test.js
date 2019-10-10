import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { MockedProvider } from '@apollo/react-testing'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from '../../../components/styles/Theme'
import wait from 'waait'
import waitForExpect from 'wait-for-expect'
import Router from 'next/router'
import { ArticleComponent, articleComponentFactory } from '../../../components/article/Article'
import { TAGS_QUERY_MOCK } from '../../../queries/__mocks__/TAGS_QUERY_MOCKS'
import { CATEGORIES_QUERY_MOCK } from '..//../../queries/__mocks__/CATEGORIES_QUERY_MOCKS'
import { 
    ARTICLE_QUERY_MOCK, 
    ARTICLE_QUERY_MOCK_ERROR, 
    ARTICLE_QUERY_MOCK_NODATA,
} from '../../../queries/__mocks__/ARTICLE_QUERY_MOCKS'

let wrapper

const getComponent = ({ mocks, query }) => (
    <ThemeProvider theme={theme}>
        <MockedProvider mocks={mocks} addTypename={false}>
            <ArticleComponent router={{query}}/>
        </MockedProvider>
    </ThemeProvider>
    // <ThemeProvider theme={theme}>
    //     <MockedProvider mocks={mocks} addTypename={false}>
    //         <Articles { ...query } />
    //     </MockedProvider>
    // </ThemeProvider>
)

const mountComponent = params => {
    return mount(getComponent(params))
}

const mountAndWaitForComponent = async params => {
    let wrapper
    await act(async () => {
        wrapper = mountComponent(params)
        await waitForExpect(() => {
            wrapper.update()
        })
    })
    return wrapper
}

// const createComponent = ({ mocks, query }) => {
//     return TestRenderer.create(
//         <ThemeProvider theme={theme}>
//             <MockedProvider mocks={mocks} addTypename={false}>
//                 <ArticleComponent router={{query}}/>
//             </MockedProvider>
//         </ThemeProvider>
//     )
// }
// jest.mock('next/router', ()=> ({push: jest.fn()}))

describe('Article', () => {

    it('should render without throwing an error', async () => {
        await mountAndWaitForComponent({ mocks: [ARTICLE_QUERY_MOCK(), TAGS_QUERY_MOCK, CATEGORIES_QUERY_MOCK], query: { id: 'create' } })
        await mountAndWaitForComponent({ mocks: [ARTICLE_QUERY_MOCK({ id: 1 }), TAGS_QUERY_MOCK, CATEGORIES_QUERY_MOCK], query: { id: 1 } })
    })

    it('should render a message if an error occurred', async () => {
        await mountAndWaitForComponent({ mocks: [ARTICLE_QUERY_MOCK_ERROR(), TAGS_QUERY_MOCK, CATEGORIES_QUERY_MOCK], query: { id: 'create' } })
        await mountAndWaitForComponent({ mocks: [ARTICLE_QUERY_MOCK_ERROR({ id: 1 }), TAGS_QUERY_MOCK, CATEGORIES_QUERY_MOCK], query: { id: 1 } })
    })

    it('should invoke router when submitting the form', async () => {
        wrapper = await mountAndWaitForComponent({ mocks: [ARTICLE_QUERY_MOCK({ id: 1 }), TAGS_QUERY_MOCK, CATEGORIES_QUERY_MOCK], query: { id: 1 } })
        // wrapper = await mountAndWaitForComponent({ mocks: [mockBase, TAGS_QUERY_MOCK, CATEGORIES_QUERY_MOCK], query: queryBase })
        // const searchInput = wrapper.find('.articles-filter-form input[name="search"]')
        // const submitBtn = wrapper.find('.articles-filter-form button[type="submit"]')
        // searchInput.instance().value = search
        // searchInput.simulate('change')
        // expect(Router.push).toHaveBeenCalled()
        // wrapper.find('form').first().simulate('submit', { preventDefault () {} });
        // expect(Router.push).toHaveBeenCalled()
        // wrapper.unmount()
    })

})