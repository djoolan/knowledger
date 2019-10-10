import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import InputField from '../../../components/form/InputField'

describe('InputField', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <InputField
                name=''
            />
        )
        TestRenderer.create(
            <InputField
                name=''
                required={true}
            />
        )
    })
})