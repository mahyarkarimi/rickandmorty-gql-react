import React from 'react';
import RcPagination from 'rc-pagination';

import './style.scss';

const PaginationItem = ({ page, type, Element }) => {
    const paginationClass = {
        page: 'uk-active',
        prev: '',
        next: '',
        "jump-prev": '',
        "jump-next": '',
    }

    const getPage = (page, type) => {
        switch (type) {
            case 'prev':
                return '<';
            case 'next':
                return '>';
            case 'page':
                return page;
            case 'jump-prev':
            case 'jump-next':
                return '...';
            default:
                return '';
        }
    }
    return (
        <span className={`${paginationClass[type]} pagination-item`}>{getPage(page, type)}</span>
    )
}

const Pagination = ({
    onPageChange,
    current,
    totalCount,
    className,
    style
}) => (
    <RcPagination className={`uk-pagination ${className}`} style={style} itemRender={(page, type, El) => (<PaginationItem page={page} type={type} Element={El}/>)} onChange={onPageChange} defaultCurrent={current} pageSize={10} total={totalCount} />
)

export default Pagination;