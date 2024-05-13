import React from 'react';

interface PropsCard {
    title: string;
    list: string[];
}

const Card: React.FC<PropsCard> = ({ title, list }) => {
    const lis = list.map((item, index) => <p key={index} className='text-white text-[14px] lg:text-[18px] lg:leading-9 leading-6 mr-2'>{item}</p>);
    return (
        <div className='mt-6'>
            <p className='text-white lg:text-[18px] font-bold mr-2'>{title}</p>
            {lis}
        </div>
    );
}

export default Card;
