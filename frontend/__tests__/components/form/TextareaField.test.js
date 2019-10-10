import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import TextareaField from '../../../components/form/TextareaField'

describe('TextareaField', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <TextareaField
                name=''
                label=''
            />
        )
        TestRenderer.create(
            <TextareaField
                name=''
                required={true}
            />
        )
    })
})