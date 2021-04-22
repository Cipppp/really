import React from 'react';
import { firstSection, secondSection, thirdSection } from './Data';
import { ReallySection } from '../../../components';

function Home() {
    return (
        <div>
            <ReallySection {...firstSection} />
            <ReallySection {...secondSection} />
            <ReallySection {...thirdSection} />
        </div>
    );
}

export default Home;
