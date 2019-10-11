import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import { MockedProvider } from '@apollo/react-testing'
import waitForExpect from 'wait-for-expect'
import theme from '../components/styles/Theme'
import { TAGS_QUERY_MOCK } from '../queries/__mocks__/TAGS_QUERY_MOCKS'
import { CATEGORIES_QUERY_MOCK } from '../queries/__mocks__/CATEGORIES_QUERY_MOCKS'
import { READSTATUS_QUERY_MOCK } from '../queries/__mocks__/READSTATUS_QUERY_MOCKS'

export const getComponent = ({ mocks, children }) => (
    <ThemeProvider theme={theme}>
        <MockedProvider mocks={mocks} addTypename={false}>
            { children }
        </MockedProvider>
    </ThemeProvider>
)

export const mountComponent = params => {
    return mount(getComponent(params))
}

export const mountAndWaitForComponent = async params => {
    let wrapper
    await act(async () => {
        wrapper = mountComponent(params)
        await waitForExpect(() => {
            wrapper.update()
        })
    })
    return wrapper
}

export const sharedMocks = [
    TAGS_QUERY_MOCK, 
    CATEGORIES_QUERY_MOCK, 
    READSTATUS_QUERY_MOCK
]

export const getWrapperNodes = (wrapper, selector) => {
    const element = wrapper.find(selector).first()
    // if (selector.indexOf('-form') !== -1) console.log('element : ', element.name(), element.html())
    if (element) {
        const instance = element.instance()
        if (instance) {
            return { element, instance }
        }
    }
}

export const setInputValue = (wrapper, selector, value, simulateChange = true) => {
    const nodes = getWrapperNodes(wrapper, selector)
    if (nodes) {
        const { element, instance } = nodes
        instance.value = value
        if (simulateChange) {
            element.simulate('change', { preventDefault () {} })
        }
    }
}

export const setCheckboxValue = (wrapper, selector, value) => {
    const nodes = getWrapperNodes(wrapper, selector)
    if (nodes) {
        const { element, instance } = nodes
        if (instance.checked !== value) {
            // instance.value = 
            instance.checked = !instance.checked
            element.simulate('change');
        }
    }
}

export const setSelectValue = (wrapper, selector, value) => {
    const nodes = getWrapperNodes(wrapper, selector)
    // console.log(nodes)
    if (nodes) {
        const { element, instance } = nodes
        // console.log('element', element.html())
        // console.log('instance', instance.select.select.setValue)
        // console.log('instance.setValue', instance.setValue)
        // console.log('instance.select.select', instance.select.select)
        try {
            instance.select.select.setValue(value.split(',').map((value, index) => ({ id: (index + 1), label: value })))
        } catch(e) {
            // console.log(selector, e)
            // console.log('element.text()', element.text())
            // console.log('element.html()', element.html())
            // console.log('element.name()', element.name())
            // console.log('instance.setValue', instance.setValue)
            // console.log('instance', instance)
            throw e
        }
    }
}

export const submitForm = (wrapper, selector) => {
    const nodes = getWrapperNodes(wrapper, selector)
    if (nodes) {
        const { element, instance } = nodes
        element.hostNodes().simulate('submit', { preventDefault () {} });
    }
}