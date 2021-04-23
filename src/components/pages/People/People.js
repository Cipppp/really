import React from 'react';
import {
    sectionOnePeople,
    sectionTwoPeople,
    sectionThreePeople,
    // sectionFourPeople,
    sectionFivePeople,
    sectionSixPeople,
} from '../Data';
import { ReallySection } from '../../../components';

function People() {
    return (
        <div>
            <ReallySection {...sectionOnePeople} />
            <ReallySection {...sectionTwoPeople} />
            <ReallySection {...sectionThreePeople} />
            {/* <ReallySection {...sectionFourPeople} /> */}
            <ReallySection {...sectionFivePeople} />
            <ReallySection {...sectionSixPeople} />
        </div>
    );
}

export default People;
