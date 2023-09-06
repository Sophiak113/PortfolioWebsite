import React from 'react';
import CardLinksIcons from './CardLinksIcons';

const LinkList = (props) => {
    const renderIconLinks = props.links.map((icon) => {
        return (
            <CardLinksIcons links={icon} />
        );
    });
return <div>
    {renderIconLinks}
</div>
};

export default LinkList;

// id: '1',
//     alt:'Github',
//     src: 'https://cdn.pixabay.com/photo/2023/05/02/21/08/river-7966163_1280.png',
//     link: 'https://github.com/Sophiak113'