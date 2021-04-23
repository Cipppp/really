import React from 'react';
import {
    sectionFiveEconomy,
    sectionFourEconomy,
    sectionOneEconomy,
    sectionThreeEconomy,
    sectionTwoEconomy,
} from '../Data';
import { ReallySection } from '../../../components';

function Economy() {
    return (
        <div>
            <ReallySection {...sectionOneEconomy} />
            <ReallySection {...sectionTwoEconomy} />
            <ReallySection {...sectionThreeEconomy} />
            <ReallySection {...sectionFourEconomy} />
            <ReallySection {...sectionFiveEconomy} />
        </div>
    );
}

export default Economy;
