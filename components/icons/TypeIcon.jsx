import React from 'react';
import Image from 'next/image';

// create a component that will display the type icon svg from the props passed to it
const TypeIcon = ({ type }) => {
    const icon = `/type-icons/${type}.png`;
    return <Image src={icon} alt={type} width={25} height={25} />;
}

export default TypeIcon;