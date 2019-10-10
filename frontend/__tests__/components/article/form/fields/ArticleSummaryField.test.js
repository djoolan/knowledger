import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import ArticleSummaryField from '../../../../../components/article/form/fields/ArticleSummaryField'

describe('ArticleSummaryField', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <ArticleSummaryField
                value=''
            />
        )
    })
})