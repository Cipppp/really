import React from 'react';
import './ReallySection.css';
import PieChart from '../Charts/PieChart';
import BarChart from '../Charts/BarChart';
import HorizontalBarChart from '../Charts/HorizontalBarChart';

const ReallySection = ({
    showGreen,
    text,
    firstSection,
    textRight,
    sectionLabel,
    colors,
    dataset,
    chartType,
}) => {
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
                {chartType && (
                    <div className="graph">
                        {chartType === 'Pie' && (
                            <PieChart
                                sectionLabel={sectionLabel}
                                colors={colors}
                                dataset={dataset}
                            ></PieChart>
                        )}

                        {chartType === 'Bar' && (
                            <BarChart
                                sectionLabel={sectionLabel}
                                colors={colors}
                                dataset={dataset}
                            ></BarChart>
                        )}

                        {chartType === 'HorizontalBar' && (
                            <HorizontalBarChart
                                sectionLabel={sectionLabel}
                                colors={colors}
                                dataset={dataset}
                            ></HorizontalBarChart>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default ReallySection;
