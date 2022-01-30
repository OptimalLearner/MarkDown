import React from 'react';
import { InfoSection } from '../../components';
import { ProductObjOne, ProductObjTwo } from './Data';

function Products() {
    return (
        <div>
        <InfoSection {...ProductObjOne} />
        <InfoSection {...ProductObjTwo} />
        </div>
    );
}

export default Products;