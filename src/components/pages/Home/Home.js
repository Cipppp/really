import React from 'react';
import {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
} from './Data';
import { ReallySection } from '../../../components';

function Home() {
    return (
        <div>
            <ReallySection {...firstSection} />
            <ReallySection {...secondSection} />
            <ReallySection {...thirdSection} />
            <ReallySection {...fourthSection} />
            <ReallySection {...fifthSection} />
        </div>
    );
}

export default Home;
