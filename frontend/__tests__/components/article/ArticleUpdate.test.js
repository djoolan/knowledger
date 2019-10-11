import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { MockedProvider } from '@apollo/react-testing'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from '../../../components/styles/Theme'
import wait from 'waait'
import waitForExpect from 'wait-for-expect'
import Router, { withRouter } from 'next/router'
import ArticleUpdate from '../../../components/article/ArticleUpdate'
import { TAGS_QUERY_MOCK } from '../../../queries/__mocks__/TAGS_QUERY_MOCKS'
import { CATEGORIES_QUERY_MOCK } from '../../../queries/__mocks__/CATEGORIES_QUERY_MOCKS'
import { READSTATUS_QUERY_MOCK } from '../../../queries/__mocks__/READSTATUS_QUERY_MOCKS'
import { 
    ARTICLE,
    ARTICLE_BLANK,
    ARTICLE_INPUT, 
    ARTICLE_OUTPUT, 
} from '../../../queries/__mocks__/ARTICLE_MOCKS'
import {
    ARTICLE_UPDATE_MUTATION_MOCK
} from '../../../queries/__mocks__/ARTICLE_UPDATE_MUTATION_MOCKS'

let wrapper

const getComponent = ({ mocks, article, update }) => (
    <ThemeProvider theme={theme}>
        <MockedProvider mocks={mocks} addTypename={false}>
            <ArticleUpdate article={article} update={update} />
        </MockedProvider>
    </ThemeProvider>
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

const update = jest.fn()

describe('ArticleUpdate', () => {

    it('should render without throwing an error', async () => {
        wrapper = await mountAndWaitForComponent({ mocks: [...sharedMocks], article: ARTICLE, update })
        await mountAndWaitForComponent({ mocks: [...sharedMocks], article: ARTICLE_BLANK(), update })
    })

    it('should call change handlers without error', async () => {
        const componentInstance = wrapper.find(ArticleUpdate).instance()
        componentInstance._handleChangeReadStatus('toto', 'actionMeta')
        componentInstance._handleChangeTags([{ label: 'toto', value: 'toto' }], 'actionMeta')
        componentInstance._handleChangeTags(null, 'actionMeta')
        componentInstance._handleChangeCategories([{ label: 'toto', value: 'toto' }], 'actionMeta')
        componentInstance._handleChangeCategories(null, 'actionMeta')
        componentInstance._handleChange({ target: { name: 'toto', type: 'checkbox', value: 1, checked: true }})
        componentInstance._handleChange({ target: { name: 'toto', type: 'number', value: 1, checked: true }})
    })

    it('should submit the form without error', async () => {
        wrapper = await mountAndWaitForComponent({ mocks: [ARTICLE_UPDATE_MUTATION_MOCK(), ...sharedMocks], article: ARTICLE, update })
        await wait(1000)
        const form = wrapper.find('form.article-update-form').hostNodes()
        await act(async () => {
            form.simulate('submit', { preventDefault () {} })
            await wait(0)
        })
        // expect(Router.push).toHaveBeenCalled()
    })


})