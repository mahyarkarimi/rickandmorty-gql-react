import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { queries } from '../../utils';
import _ from 'lodash';

import List from './list';
import Card from '../card';
import Error from '../error';

const Home = (props) => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [searchName, setSearchName] = useState('');
    const { loading, error, data } = useQuery(queries.characters, { variables: { page, ...searchName !== '' ? { filter: { name: searchName } } : {} } });
    const [characters, setCharacters] = useState({ results: [], total: 0, error: false });
    useEffect(() => {
        if (error){
            setCharacters({
                results: [],
                total: 0,
                error: true,
            });
        } else if (!loading && !error) {
            setCharacters({
                results: data.characters.results,
                total: data.characters.info.count
            })
        }
    }, [data]);

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div class="uk-margin uk-align-right">
                <form class="uk-search uk-search-default">
                    <i href="" data-uk-search-icon></i>
                    <input class="uk-search-input" type="search" onChange={_.debounce((e)=>setSearchName(e.target.value), 500)} placeholder="Search name of character" />
                </form>
                {searchName !== '' ? <small className='uk-margin-left'>showing result for name '<i>{searchName}</i>' ({characters.total} entries found)</small> : ''}
            </div>


            {characters.error ? (<Error />) :(
                <List style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }} height="100%" loading={loading} renderItem={(item, index) => <Card hoverable header={item.name} onClick={() => navigate('/' + item.id)} content={item.status} imageSrc={item.image} key={index}>{item}</Card>} items={characters.results} onPageChange={setPage} current={page} totalCount={characters.total} />
            )}
            <a data-uk-totop style={{ position: 'fixed', bottom: 0, right: 0, margin: '16px' }}></a>
        </div>
    )
}

export default Home;