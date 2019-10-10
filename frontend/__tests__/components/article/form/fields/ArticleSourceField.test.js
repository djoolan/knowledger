import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import ArticleSourceField from '../../../../../components/article/form/fields/ArticleSourceField'

describe('ArticleSourceField', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <ArticleSourceField
                value=''
            />
        )
    })
})