import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import ArticlesJsonField from '../../../../../components/article/form/fields/ArticlesJsonField'

describe('ArticlesJsonField', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <ArticlesJsonField
                value=''
            />
        )
    })
})