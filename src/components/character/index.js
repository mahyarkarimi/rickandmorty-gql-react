import { useQuery } from '@apollo/client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { queries } from '../../utils';
import { LoadingPage } from '../loading';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../card';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/virtual';


const Character = ({
    name,
    gender,
    status,
    species,
    type,
    origin,
    image,
    episode,
}) => {

    return (
        <article className="uk-article">
            <div className='uk-container'>
                <h1 className="uk-article-title">{name}</h1>
                <div className="uk-panel">
                    <div className="uk-align-left uk-margin-remove-adjacent uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img src={image} width="225" height="150" alt="" />
                        <div data-uk-lightbox >
                            <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                <a className="uk-h4 uk-margin-remove uk-button" href={image}>
                                    Preview
                                </a>    
                            </div>

                        </div>

                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="uk-padding uk-grid-small uk-child-width-auto" data-uk-grid>
                {origin && origin.name && <div>
                    <a data-uk-scroll class="uk-button uk-button-text" href="#originallity">Read Originallity Info</a>
                </div>}
                {episode && episode.length > 0 && <div>
                    <a data-uk-scroll class="uk-button uk-button-text" href="#episodes">Show Aired Episodes</a>
                </div>}
            </div>

            <p className="uk-article-meta uk-margin-left">Date Accessed in {new Date().toLocaleString({ date: 'full' })}</p>

            <div class="uk-section uk-section-primary">
                <div className='uk-container'>
                    <p className="uk-text-lead">Character Information</p>
                    <table class="uk-table">
                        <caption>{name} Information</caption>
                        <tbody>
                            {[
                                { key: 'Status', value: status },
                                { key: 'Gender', value: gender },
                                { key: 'Species', value: species },
                                { key: 'Type', value: type },
                            ].filter(i => i.value != null && i.value || '').map(i => (
                                <tr>
                                    <td>{i.key}</td>
                                    <td>{i.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="uk-section uk-section-secondary">
                <div className='uk-container'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
            </div>

            {origin && origin.name && (
                <div id="originallity" className='uk-section uk-section-muted'>
                    <div className='uk-container'>
                        <div>
                            <p className="uk-text-lead">Read Originallity Info</p>
                        </div>
                        <table class="uk-table">
                            <caption>{name} Originallity Info</caption>
                            <tbody>
                                {[
                                    { key: 'name', value: origin.name },
                                    { key: 'Dimension', value: origin.dimension },
                                    { key: 'Date', value: origin.created },
                                    { key: 'Type', value: origin.type },
                                ].filter(i => i.value != null && i.value || '').map(i => (
                                    <tr>
                                        <td>{i.key}</td>
                                        <td>{i.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            )}

            {episode && episode.length > 0 && (
                <div id="episodes" className='uk-section'>
                    <div className='uk-container'>
                        <div>
                            <p className="uk-text-lead">List of Aired Episodes</p>
                        </div>
                        <Swiper
                            spaceBetween={24}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                // when window width is >= 480px
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                // when window width is >= 640px
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                },
                                960: {
                                    slidesPerView: 4,
                                    spaceBetween: 40
                                },
                                1280: {
                                    slidesPerView: 5,
                                    spaceBetween: 40
                                },
                            }}
                            slidesPerView={3}
                            modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
                            navigation={{}}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {episode.map((i, index) => (
                                <SwiperSlide key={i} virtualIndex={index} style={{height:'auto'}}>
                                    <Card style={{marginTop: '16px', marginBottom:'16px'}} width='220px' height='300px' header={i.name} content={<div><small><i>Air Date:</i> {i.air_date}</small><br /><small><i>Created:</i> {new Date(i.created).toLocaleString()}</small></div>} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            )}


        </article>
    )
}

const CharacterContainer = (props) => {

    const params = useParams();
    const { loading, data, error } = useQuery(queries.character, { variables: { id: params.id } })
    const [character, setCharacter] = useState({});
    useEffect(() => {
        if (!loading && !error) {
            setCharacter({ ...data.character })
        }
    }, [data]);

    return (
        loading ? <LoadingPage /> : <Character {...character} />
    )
}
export default CharacterContainer;