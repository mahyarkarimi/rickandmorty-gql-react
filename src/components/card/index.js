import * as React from 'react';

const Card = ({
    header,
    content,
    onClick,
    height,
    width,
    imageSrc,
    style,
    className,
    hoverable
}) => {

    const mainStyle = {
        ...style,
        height: height || 'auto',
        width: width || '300px',
        cursor: onClick ? 'pointer' : 'default'
    }
    let classes = [
        'uk-card',
        'uk-card-default',
    ]
    if (hoverable) {
        classes.push('uk-card-hover')
    }
    if (className) {
        classes.push(className)
    }
    return (
        <div className={classes.join(' ')} onClick={onClick} style={mainStyle} >
            {imageSrc && <div className="uk-card-media-top">
                <img src={imageSrc} style={{ objectFit: 'fill', height: '50%', width: '100%' }} alt="" />
            </div>}
            <div className="uk-card-body">
                <h3 className="uk-card-title">{header}</h3>
                {content}
            </div>
        </div>
    )
}

export default Card;