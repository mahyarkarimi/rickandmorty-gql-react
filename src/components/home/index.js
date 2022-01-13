import * as React from 'react';
import { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { queries } from '../../utils';

import List from './list';
import Card from '../card';

const Home = (props) => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const { loading, error, data } = useQuery(queries.characters, { variables: { page } });
    const [characters, setCharacters] = useState({ results: [], total: 0 });
    useEffect(() => {
        if (!loading && !error) {
            setCharacters({
                results: data.characters.results,
                total: data.characters.info.count
            })
        }
    }, [data]);
    // return (
    //     <List style={{ flex: 1, display: 'flex', lexDirection: 'column', height: '100%' }} height="100%" loading={loading} renderItem={(item, index) => <Card hoverable header={item.name} onClick={() => navigate('/' + item.id)} content={item.status} imageSrc={item.image} key={index}>{item}</Card>} items={characters.results} onPageChange={setPage} current={page} totalCount={characters.total} />
    // )
    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <List style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }} height="100%" loading={loading} renderItem={(item, index) => <Card hoverable header={item.name} onClick={() => navigate('/' + item.id)} content={item.status} imageSrc={item.image} key={index}>{item}</Card>} items={characters.results} onPageChange={setPage} current={page} totalCount={characters.total} />
            <a data-uk-totop style={{ position: 'fixed', bottom: 0, right: 0, margin: '16px' }}></a>
        </div>
    )
}

export default Home;