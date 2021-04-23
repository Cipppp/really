import React from 'react';
import {
    sectionFiveEconomy,
    sectionFourCleanEnergy,
    sectionOneCleanEnergy,
    sectionThreeCleanEnergy,
    sectionTwoCleanEnergy,
} from '../Data';
import { ReallySection } from '../../../components';

function Economy() {
    return (
        <div>
            <ReallySection {...sectionOneCleanEnergy} />
            <ReallySection {...sectionTwoCleanEnergy} />
            <ReallySection {...sectionThreeCleanEnergy} />
            <ReallySection {...sectionFourCleanEnergy} />
            <ReallySection {...sectionFiveEconomy} />
        </div>
    );
}

export default Economy;
