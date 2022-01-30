import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function SignUp() {
    return (
        <div>
        <InfoSection {...homeObjOne} />
        </div>
    );
}

export default SignUp;