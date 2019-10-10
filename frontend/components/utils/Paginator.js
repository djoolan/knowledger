import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

class Paginator extends Component {
    _prevPage = () => {
        const { page, count, pageSize, handleChange } = this.props
        const currentPage = parseInt(page, 10)
        // console.log('_prevPage', { page, currentPage, count, pageSize, handleChange })
        if (currentPage > 1) {
            handleChange({ page: currentPage - 1 })
        }
    }

    _nextPage = () => {
        const { page, count, pageSize, handleChange } = this.props
        const currentPage = parseInt(page, 10)
        // console.log('_nextPage', { page, currentPage, count, pageSize, handleChange })
        if (currentPage <= count / pageSize) {
            handleChange({ page: currentPage + 1 })
        }
    }

    render() {
        const { page, pageSize, count, children, handleChange } = this.props
        // console.log({ page, pageSize, count, children, handleChange })
        const maxPageIndex = Math.ceil(count / pageSize)
        // if (page > maxPageIndex) {
        //     handleChange({ page: maxPageIndex })
        // }
        return (
            <div>
                <div className="nav">
                    <div className="pager prev" onClick={this._prevPage}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </div>
                    <p className="count">
                        Page {page} / {maxPageIndex} ({ count } articles)
                    </p>
                    <div className="pager next" onClick={this._nextPage}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                </div>
                {children}
            </div>
        )
    }
}

Paginator.propTypes = {
    pageSize: PropTypes.number,
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default Paginator