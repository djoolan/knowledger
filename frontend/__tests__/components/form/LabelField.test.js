import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import LabelField from '../../../components/form/LabelField'

describe('LabelField', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <LabelField
                name=''
                label=''
            />
        )
    })
})