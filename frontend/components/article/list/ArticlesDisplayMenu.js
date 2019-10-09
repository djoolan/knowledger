import React, { Component, Fragment } from 'react'

function ArticlesDisplayMenu() {
    function handleChange(e) {
        // console.log('handleChange', e)
        // console.log(e.target.value);
    }

    return (
        <Fragment>
            <div onChange={handleChange}>
                <input type="radio" id="list" name="display" value="list" defaultChecked />
                <input type="radio" id="grid" name="display" value="grid" />
            </div>
        </Fragment>
    )
}

export default ArticlesDisplayMenu