import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import ArticleAuthorField from '../../../../../components/article/form/fields/ArticleAuthorField'

describe('ArticleAuthorField', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <ArticleAuthorField
                value=''
            />
        )
    })
})