import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { MockedProvider } from '@apollo/react-testing'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from '../../../components/styles/Theme'
import wait from 'waait'
import waitForExpect from 'wait-for-expect'
import Router, { withRouter } from 'next/router'
import { ArticleComponent, articleComponentFactory } from '../../../components/article/Article'
import { TAGS_QUERY_MOCK } from '../../../queries/__mocks__/TAGS_QUERY_MOCKS'
import { CATEGORIES_QUERY_MOCK } from '../../../queries/__mocks__/CATEGORIES_QUERY_MOCKS'
import { READSTATUS_QUERY_MOCK } from '../../../queries/__mocks__/READSTATUS_QUERY_MOCKS'
import { 
    ARTICLE_QUERY_MOCK, 
    ARTICLE_QUERY_MOCK_ERROR, 
    ARTICLE_QUERY_MOCK_NODATA,
} from '../../../queries/__mocks__/ARTICLE_QUERY_MOCKS'
import { 
    articleInput,
    articleOutput,
    ARTICLE_UPDATE_MUTATION_MOCK, 
    ARTICLE_UPDATE_MUTATION_MOCK_ERROR, 
    ARTICLE_UPDATE_MUTATION_MOCK_NODATA,
} from '../../../queries/__mocks__/ARTICLE_UPDATE_MUTATION_MOCKS'

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

const sharedMocks = [
    TAGS_QUERY_MOCK, 
    CATEGORIES_QUERY_MOCK, 
    READSTATUS_QUERY_MOCK
]

jest.mock('next/router', ()=> ({
    push: jest.fn(),
    withRouter: arg => { 
        // arg.router = { push: jest.fn() }
        return arg
    }
}))

// console.log(ARTICLE_UPDATE_MUTATION_MOCK({ id: 1, title: 'Updated title' }))
describe('Article', () => {

    it('should render without throwing an error', async () => {
    })

    it('should render without throwing an error', async () => {
        await mountAndWaitForComponent({ mocks: [ARTICLE_QUERY_MOCK(), ...sharedMocks], query: { id: 'create' } })
        wrapper = await mountAndWaitForComponent({ mocks: [ARTICLE_QUERY_MOCK({ id: 1 }), ...sharedMocks], query: { id: 1 } })
        // console.log(wrapper.html())
    })

    it('should render a message if an error occurred', async () => {
        wrapper = await mountAndWaitForComponent({ mocks: [ARTICLE_QUERY_MOCK_ERROR(), ...sharedMocks], query: { id: 'create' } })
        // console.log('wrapper for error', wrapper.html())
        wrapper = await mountAndWaitForComponent({ mocks: [ARTICLE_QUERY_MOCK_ERROR({ id: 1 }), ...sharedMocks], query: { id: 1 } })
    })

    // console.log(ARTICLE_QUERY_MOCK({}))
    // console.log(ARTICLE_UPDATE_MUTATION_MOCK({}))
    // it('should invoke router when submitting the form', async () => {
    //     const updatedProps = { id: 1, title: 'Title' }
    //     wrapper = await mountAndWaitForComponent({ 
    //         mocks: [
    //             ARTICLE_QUERY_MOCK({ id: 1 }), 
    //             ARTICLE_UPDATE_MUTATION_MOCK(updatedProps),
    //             ...sharedMocks,
    //         ], 
    //         query: { id: 1 },
    //     })
    //     await wait(1000)
    //     const deleteForm = wrapper.find('form.article-delete-form').hostNodes()
    //     const createForm = wrapper.find('form.article-create-form').hostNodes()
    //     const updateForm = wrapper.find('form.article-update-form').hostNodes()
    //     // wrapper.find('TagSelect').invoke('handleChange')(['JavaScript'])
    //     // wrapper.find('CategorySelect').invoke('handleChange')(['Programming'])

    //     await act(async () => {
    //         const titleInput = updateForm.find('input[name="title"]').hostNodes()
    //         titleInput.instance().value = updatedProps.title
    //         titleInput.simulate('change')
    //         updateForm.simulate('submit', { preventDefault () {} })
    //         await wait(0)
    //     })
    //     // expect(Router.push).toHaveBeenCalled()
    // })

})