import * as React from 'react';
import Loading from '../loading';
import Pagination from '../pagination';
import Empty from '../empty';

const List = ({
    items,
    loading,
    renderItem,
    style,
    height,
    width,
    onPageChange,
    totalCount,
    defaultCurrent,
    className
}) => {

    return (
        <div style={{ minHeight: '100%', ...style }} className={`uk-flex uk-flex-column uk-flex-middle ${className}`}>
            <div style={{ height, width }} className="uk-flex uk-flex-wrap uk-flex-1 uk-flex-center uk-flex-wrap-around" style={{ gap: '12px' }} data-uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 50; repeat: false">
                {loading ? <Loading color={'#555555'} /> : items.length>0 ? (
                    items.map((item, index) => renderItem(item, index))
                ) : <Empty />}
            </div>
            
            {totalCount > 0 ? (<Pagination onPageChange={onPageChange} defaultCurrent={defaultCurrent} totalCount={totalCount} />) : ''}
        </div>

    )
}
export default List;