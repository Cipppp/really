import React from 'react';
import {
    sectionOneHome,
    sectionTwoHome,
    sectionThreeHome,
    sectionFourHome,
    sectionFiveHome,
    sectionSixHome,
    sectionSevenHome,
} from '../Data';
import { ReallySection } from '../../../components';

function Home() {
    return (
        <div>
            <ReallySection {...sectionOneHome} />
            <ReallySection {...sectionTwoHome} />
            <ReallySection {...sectionThreeHome} />
            <ReallySection {...sectionFourHome} />
            <ReallySection {...sectionFiveHome} />
            <ReallySection {...sectionSixHome} />
            <ReallySection {...sectionSevenHome} />
        </div>
    );
}

export default Home;
