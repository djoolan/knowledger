import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import ArticleIsReadField from '../../../../../components/article/form/fields/ArticleIsReadField'

describe('ArticleIsReadField', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <ArticleIsReadField
                value={true}
            />
        )
    })
})