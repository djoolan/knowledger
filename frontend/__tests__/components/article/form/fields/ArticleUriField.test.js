import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import ArticleUriField from '../../../../../components/article/form/fields/ArticleUriField'

describe('ArticleUriField', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <ArticleUriField
                value=''
            />
        )
    })
})