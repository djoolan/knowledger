import * as React from 'react'
// import TestRenderer, { act } from 'react-test-renderer'
// import { act as act2 } from 'react-dom/test-utils'
import { act } from 'react-dom/test-utils'
import { render, unmountComponentAtNode } from 'react-dom'
import { mount } from 'enzyme'
import sinon from 'sinon'
import Router from 'next/router'
import { MockedProvider } from '@apollo/react-testing'
import { ThemeProvider } from 'styled-components'
import theme from '../../../../components/styles/Theme'
import wait from 'waait'
import waitForExpect from 'wait-for-expect'
import Articles from '../../../../components/article/list/Articles'
import ArticlesFilter from '../../../../components/article/list/ArticlesFilter'
import { TAGS_QUERY_MOCK } from '../../../../queries/__mocks__/TAGS_QUERY_MOCKS'
import { CATEGORIES_QUERY_MOCK } from '../../../../queries/__mocks__/CATEGORIES_QUERY_MOCKS'
import { 
    ARTICLES_FEED_QUERY_MOCK, 
    ARTICLES_FEED_QUERY_MOCK_ERROR, 
    ARTICLES_FEED_QUERY_MOCK_NODATA,
} from '../../../../queries/__mocks__/ARTICLES_FEED_QUERY_MOCKS'

jest.mock('next/router', ()=> ({push: jest.fn()}))

let wrapper

const getComponent = ({ mocks, query }) => (
    <ThemeProvider theme={theme}>
        <MockedProvider mocks={mocks} addTypename={false}>
            <Articles { ...query } />
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

const queryDefault = {
    skip: 0,
    first: 8,
    orderBy: 'createdAt_DESC',
}
const queryBase = {
    page: 1,
}
const queryBasePage2 = {
    page: 2,
}
const mockBase = ARTICLES_FEED_QUERY_MOCK({ 
    ...queryDefault,
    ...queryBase,
})

const mockBasePage2 = ARTICLES_FEED_QUERY_MOCK({ 
    ...queryDefault,
    skip: 8,
    ...queryBasePage2,
})

const querySearch = {
    ...queryBase,
    search: 'js'
}
const mockSearch = ARTICLES_FEED_QUERY_MOCK({ 
    ...queryDefault,
    ...querySearch,
})

const queryTags = {
    ...queryBase,
    tags: 'js'
}
const mockTags = ARTICLES_FEED_QUERY_MOCK({ 
    ...queryDefault,
    ...queryTags,
})

const queryCategories = {
    ...queryBase,
    categories: 'js'
}
const mockCategories = ARTICLES_FEED_QUERY_MOCK({ 
    ...queryDefault,
    ...queryCategories,
})
const mockError = ARTICLES_FEED_QUERY_MOCK_ERROR({ 
    ...queryDefault,
    ...queryBase,
})

describe('Articles', () => {
    it('should render without throwing an error', async () => {
        await mountAndWaitForComponent({ mocks: [mockBase], query: queryBase })
        await mountAndWaitForComponent({ mocks: [mockSearch], query: querySearch })
        await mountAndWaitForComponent({ mocks: [mockTags], query: queryTags })
        await mountAndWaitForComponent({ mocks: [mockCategories], query: queryCategories })
    })

    it('should display a message on error', async () => {
        await mountAndWaitForComponent({ mocks: [mockError], query: queryBase })
    })

    it("should invoke router when clicking on 'next' page", async () => {
        wrapper = await mountAndWaitForComponent({ mocks: [mockBase], query: queryBase })
        wrapper.find('.pager.next').simulate('click')
        expect(Router.push).toHaveBeenCalledWith({"pathname": "/articles/[page]", "query": {}}, "/articles/2")
        wrapper.unmount()
    })

    it("should invoke router when clicking on 'prev' page", async () => {
        wrapper = await mountAndWaitForComponent({ mocks: [mockBasePage2], query: queryBasePage2 })
        wrapper.find('.pager.prev').simulate('click')
        expect(Router.push).toHaveBeenCalledWith({"pathname": "/articles/[page]", "query": {}}, "/articles/1")
        wrapper.unmount()
    })

    it("should invoke router when searching", async () => {
        const search = 'toto'
        wrapper = await mountAndWaitForComponent({ mocks: [mockBase, TAGS_QUERY_MOCK, CATEGORIES_QUERY_MOCK], query: queryBase })
        const searchInput = wrapper.find('.articles-filter-form input[name="search"]')
        const submitBtn = wrapper.find('.articles-filter-form button[type="submit"]')
        searchInput.instance().value = search
        searchInput.simulate('change')
        // submitBtn.get(0).click();
        // component.find('form')
        // console.log('0', wrapper.find('.articles-filter-form').first())
        // console.log('1', wrapper.find('.articles-filter-form').at(1).html())
        // console.log('2', wrapper.find('.articles-filter-form').at(2).html())
        
        wrapper.find('.articles-filter-form').first().simulate('submit', { preventDefault () {} });
        // wrapper.find(ArticlesFilter).instance()._handleChange()
        expect(Router.push).toHaveBeenCalledWith({"pathname": "/articles/[page]", "query": { "search": search }}, "/articles/1?search=" + search)
        wrapper.unmount()
    })

    // it("router is called when filtering on tags", async () => {
    //     const tags = 'JavaScript'
    //     wrapper = await mountAndWaitForComponent({ mocks: [mockBase], query: queryBase })
    //     wrapper.find('.pager.next').simulate('click')
    //     expect(Router.push).toHaveBeenCalledWith({"pathname": "/articles/[page]", "query": {}}, "/articles/2")
    //     const tagSelect = wrapper.find('.articles-filter-form .tags')
    //     const submitBtn = wrapper.find('.articles-filter-form button[type="submit"]')
    //     searchInput.instance().value = search
    //     searchInput.simulate('change')
    //     wrapper.find(ArticlesFilter).instance()._handleChange()
    //     expect(Router.push).toHaveBeenCalledWith({"pathname": "/articles/[page]", "query": { "search": search }}, "/articles/1?search=" + search)
    // })
})