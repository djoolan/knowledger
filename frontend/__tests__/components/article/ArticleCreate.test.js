import * as React from 'react'
import { act } from 'react-dom/test-utils'
import wait from 'waait'
import Router, { withRouter } from 'next/router'
import ArticleCreate from '../../../components/article/ArticleCreate'
import { 
    ARTICLE,
    ARTICLE_BLANK,
    ARTICLE_INPUT, 
    ARTICLE_OUTPUT, 
    ARTICLE_CREATE_INPUT,
} from '../../../queries/__mocks__/ARTICLE_MOCKS'
import {
    ARTICLE_CREATE_MUTATION_MOCK
} from '../../../queries/__mocks__/ARTICLE_CREATE_MUTATION_MOCKS'
import {
    setInputValue,
    setCheckboxValue,
    setSelectValue,
    submitForm,
    mountAndWaitForComponent,
    sharedMocks,
} from '../../utils'

let wrapper

const localMount = async params => mountAndWaitForComponent({
    ...params,
    children: <ArticleCreate article={params.article} update={params.update} />
})

jest.mock('next/router', ()=> ({
    push: jest.fn(),
    withRouter: arg => { 
        return arg
    }
}))

const update = jest.fn()

// console.log(ARTICLE_CREATE_MUTATION_MOCK(ARTICLE_CREATE_INPUT()))
describe('ArticleCreate', () => {

    it('should render without throwing an error', async () => {
        wrapper = await localMount({ mocks: [...sharedMocks], article: ARTICLE, update })
        await localMount({ mocks: [...sharedMocks], article: ARTICLE_BLANK(), update })
    })

    it('should call change handlers without error', async () => {
        const componentInstance = wrapper.find(ArticleCreate).instance()
        componentInstance._handleChangeReadStatus('toto', 'actionMeta')
        componentInstance._handleChangeTags([{ label: 'toto', value: 'toto' }], 'actionMeta')
        componentInstance._handleChangeTags(null, 'actionMeta')
        componentInstance._handleChangeCategories([{ label: 'toto', value: 'toto' }], 'actionMeta')
        componentInstance._handleChangeCategories(null, 'actionMeta')
        componentInstance._handleChange({ target: { name: 'toto', type: 'checkbox', value: 1, checked: true }})
        componentInstance._handleChange({ target: { name: 'toto', type: 'number', value: 1, checked: true }})
    })

    it('should submit the form without error', async () => {
        wrapper = await localMount({ 
            mocks: [ARTICLE_CREATE_MUTATION_MOCK(ARTICLE_CREATE_INPUT()), ...sharedMocks], 
            article: ARTICLE,
            update
         })
        await wait(1000)
        const form = wrapper.find('form.article-create-form').hostNodes()
        const { id, ...articleProps } = ARTICLE_INPUT()
        const { title, uri, author, source, summary, tags, categories, isRead } = articleProps
        const inputProps = { title, uri, author, source }
        const textareaProps = { summary }
        const checkboxProps = { isRead }
        const selectProps = { tags, categories }
        Object.keys(inputProps).forEach(k => { setInputValue(form, `input[name="${k}"]`, inputProps[k], true) })
        Object.keys(textareaProps).forEach(k => { setInputValue(form, `textarea[name="${k}"]`, textareaProps[k], true) })
        Object.keys(checkboxProps).forEach(k => { setCheckboxValue(form, `input[name="${k}"]`, checkboxProps[k], true) })
        // Object.keys(selectProps).forEach(k => { setSelectValue(form, `label.${k} .select-`, s±electProps[k], true) })
        Object.keys(selectProps).forEach(k => { setSelectValue(form, `label.${k} .select-${k}`, selectProps[k], true) })
        await act(async () => {
            form.simulate('submit', { preventDefault () {} })
            await wait(0)
        })
        // expect(Router.push).toHaveBeenCalled()
    })


})