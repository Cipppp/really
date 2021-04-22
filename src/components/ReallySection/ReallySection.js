import React from 'react';
import './ReallySection.css';
import PieChart from '../Pie/PieChart';

const ReallySection = ({ showGreen, text, firstSection, textRight }) => {
    return (
        <>
            <div
                className={`${
                    firstSection ? 'specialContainer' : 'container'
                } ${showGreen ? 'greenSection' : 'yellowSection'}`}
            >
                <p
                    // Verificam daca este prima sectiune, daca este centram textul
                    className={` ${
                        firstSection
                            ? 'centerText'
                            : textRight
                            ? 'textToRight'
                            : 'textToLeft'
                    }`}
                >
                    {text}
                </p>

                <div className={`graph`}>
                    {firstSection === false && <PieChart></PieChart>}
                </div>
            </div>
        </>
    );
};

export default ReallySection;
