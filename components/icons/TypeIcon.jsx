import React from 'react';
import Image from 'next/image';
// create a component that will display the type icon svg from the props passed to it

const TypeIcon = ({ type }) => {
    // create a variable that will hold the path to the svg file
    const icon = `../../public/icons/${type}.svg`;
    // return the svg image
    return <Image src={icon} alt={type} width={10} height={10} />
}

export default TypeIcon;