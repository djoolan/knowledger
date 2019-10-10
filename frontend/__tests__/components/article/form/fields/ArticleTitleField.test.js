import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import ArticleTitleField from '../../../../../components/article/form/fields/ArticleTitleField'

describe('ArticleTitleField', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <ArticleTitleField
                value=''
            />
        )
    })
})