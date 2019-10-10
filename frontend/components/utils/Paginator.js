import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

class Paginator extends Component {
    _previousPage = () => {
        const currentPage = parseInt(this.props.page, 10)
        if (currentPage > 1) {
            this.props.handleChange({ page: currentPage - 1 })
        }
    }

    _nextPage = () => {
        const currentPage = parseInt(this.props.page, 10)
        if (currentPage <= this.props.count / this.props.pageSize) {
            this.props.handleChange({ page: currentPage + 1 })
        }
    }

    render() {
        const { page, pageSize, count, children, handleChange } = this.props
        const maxPageIndex = Math.ceil(count / pageSize)
        // if (page > maxPageIndex) {
        //     handleChange({ page: maxPageIndex })
        // }
        return (
            <div>
                <div className="nav">
                    <div className="pager prev" onClick={this._previousPage}>
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