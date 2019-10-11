import * as React from 'react'
import { act } from 'react-dom/test-utils'
import Router from 'next/router'
import wait from 'waait'
import Articles from '../../../../components/article/list/Articles'
import ArticlesFilter from '../../../../components/article/list/ArticlesFilter'
import { 
    ARTICLES_FEED_QUERY_MOCK, 
    ARTICLES_FEED_QUERY_MOCK_ERROR, 
    ARTICLES_FEED_QUERY_MOCK_NODATA,
} from '../../../../queries/__mocks__/ARTICLES_FEED_QUERY_MOCKS'
import {
    setInputValue,
    setCheckboxValue,
    setSelectValue,
    submitForm,
    mountAndWaitForComponent,
    sharedMocks,
} from '../../../utils'

jest.mock('next/router', ()=> ({push: jest.fn()}))

let wrapper

const localMount = async params => mountAndWaitForComponent({
    ...params,
    children: <Articles { ...params.query } />
})

const queryDefault = { skip: 0, first: 8, orderBy: 'createdAt_DESC' }
const queryBase = { page: 1 }
const queryBasePage2 = { page: 2 }

const mockBase = ARTICLES_FEED_QUERY_MOCK({ ...queryDefault, ...queryBase })
const mockBasePage2 = ARTICLES_FEED_QUERY_MOCK({ ...queryDefault, ...queryBasePage2, skip: 8 })

const querySearch = { ...queryBase, search: 'js' }
const mockSearch = ARTICLES_FEED_QUERY_MOCK({ ...queryDefault, ...querySearch })

const queryTags = { ...queryBase, tags: 'js' }
const mockTags = ARTICLES_FEED_QUERY_MOCK({ ...queryDefault, ...queryTags })

const queryCategories = { ...queryBase, categories: 'js' }
const mockCategories = ARTICLES_FEED_QUERY_MOCK({ ...queryDefault, ...queryCategories })
const mockError = ARTICLES_FEED_QUERY_MOCK_ERROR({ ...queryDefault, ...queryBase })

describe('Articles', () => {
    it('should render without throwing an error', async () => {
        await localMount({ mocks: [mockBase, ...sharedMocks], query: queryBase })
        await localMount({ mocks: [mockSearch, ...sharedMocks], query: querySearch })
        await localMount({ mocks: [mockTags, ...sharedMocks], query: queryTags })
        await localMount({ mocks: [mockCategories, ...sharedMocks], query: queryCategories })
    })

    it('should display a message on error', async () => {
        await localMount({ mocks: [mockError, ...sharedMocks], query: queryBase })
    })

    it("should invoke router when clicking on 'next' page", async () => {
        wrapper = await localMount({ mocks: [mockBase, ...sharedMocks], query: queryBase })
        wrapper.find('.pager.next').simulate('click')
        expect(Router.push).toHaveBeenCalledWith({"pathname": "/articles/[page]", "query": {}}, "/articles/2")
        wrapper.unmount()
    })

    it("should invoke router when clicking on 'prev' page", async () => {
        wrapper = await localMount({ mocks: [mockBasePage2, ...sharedMocks], query: queryBasePage2 })
        wrapper.find('.pager.prev').simulate('click')
        expect(Router.push).toHaveBeenCalledWith({ pathname: '/articles/[page]', query: {} }, '/articles/1')
        wrapper.unmount()
    })

    it("should invoke router when searching", async () => {
        const search = 'toto'
        wrapper = await localMount({ mocks: [mockBase, ...sharedMocks], query: queryBase })
        setInputValue(wrapper, '.articles-filter-form input[name="search"]', search)
        submitForm(wrapper, 'form.articles-filter-form')
        // expect(Router.push).toHaveBeenCalledWith({"pathname": "/articles/[page]", "query": { "search": search }}, "/articles/1?search=" + search)
        expect(Router.push).toHaveBeenCalledWith({ pathname: '/articles/[page]', query: { search }}, `/articles/1?search=${search}`)
        wrapper.unmount()
    })

    // it("should invoke router when filtering on tags", async () => {
    //     const tags = 'JavaScript'

    //     wrapper = await localMount({ mocks: [mockBase, ...sharedMocks], query: queryBase })
    //     await wait(4000)
    //     // console.log(wrapper.find('form.articles-filter-form').html())
    //     const form = wrapper.find('form.articles-filter-form').hostNodes()
    //     // const form = wrapper.find('TagSelect')
    //     console.log('form name', form.name())
    //     console.log('form html', form.html())
    //     const tags2 = form.find('.tags').hostNodes()
    //     console.log('tags name', tags2.name())
    //     console.log('tags html', tags2.html())
    //     // console.log('tags children', tags2.children().length)
    //     // console.log('tags children', tags2.children().name())
    //     const select = form.find('.select-tags')
    //     console.log('select name', select.name())
    //     console.log('select html', select.html())
    //     // console.log('select', select.at(0).name(), select.at(0).html())
    //     // console.log('select', select.at(1).name(), select.at(1).html())
    //     // console.log('tags', wrapper.find('form.articles-filter-form .tags').at(0).html())
    //     // console.log('tags', wrapper.find('form.articles-filter-form .tags').at(0).find('.select-tags').html())
    //     // // console.log('tags', wrapper.find('form.articles-filter-form .tags .select').html())
    //     // setSelectValue(wrapper.find('form.articles-filter-form .tags').at(0), '.select-tags', tags)
    //     // expect(Router.push).toHaveBeenCalledWith({"pathname": "/articles/[page]", "query": { tags }}, "/articles/1?tags=" + tags)
    //     // wrapper.unmount()
    // })

    // it("router is called when filtering on tags", async () => {
    //     const tags = 'JavaScript'
    //     wrapper = await localMount({ mocks: [mockBase], query: queryBase })
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