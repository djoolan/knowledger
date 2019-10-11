import * as React from 'react'
import { act } from 'react-dom/test-utils'
import Router from 'next/router'
import wait from 'waait'
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
    children: <ArticlesFilter { ...params.query } />
})

const queryBase = { handleChange: jest.fn() }
const querySearch = { ...queryBase, search: 'test' }
const queryTags = { ...queryBase, tags: 'JavaScript' }
const queryCategories = { ...queryBase, categories: 'Programming' }

describe('ArticlesFilter', () => {
    it('should render without throwing an error', async () => {
        await localMount({ mocks: [...sharedMocks], query: queryBase })
        await localMount({ mocks: [...sharedMocks], query: querySearch })
        await localMount({ mocks: [...sharedMocks], query: queryTags })
        await localMount({ mocks: [...sharedMocks], query: queryCategories })
    })

    it("should submit form for a search with no query parameters yet", async () => {
        const search = 'test'
        wrapper = await localMount({ mocks: [...sharedMocks], query: queryBase })
        setInputValue(wrapper, '.articles-filter-form input[name="search"]', search)
        submitForm(wrapper, 'form.articles-filter-form')
        wrapper.unmount()
    })

    it("should submit form for a search with full query already existing", async () => {
        const search = 'test'
        const tags = 'JavaScript'
        const categories = 'Programming'
        wrapper = await localMount({ mocks: [...sharedMocks], query: { ...querySearch, ...queryTags, ...queryCategories } })
        // wrapper = await localMount({ mocks: [...sharedMocks], query: queryBase })
        await wait(0)
        wrapper.find('TagSelect').invoke('handleChange')(tags)
        wrapper.find('CategorySelect').invoke('handleChange')(categories)
        submitForm(wrapper, 'form.articles-filter-form')
        wrapper.unmount()
    })
})