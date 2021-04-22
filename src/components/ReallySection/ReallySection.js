import React from 'react';
import './ReallySection.css';
import PieChart from '../Pie/PieChart';
import BarChart from '../Pie/BarChart';

const ReallySection = ({
    showGreen,
    text,
    firstSection,
    textRight,
    sectionLabel,
    colors,
    dataset,
    chartType,
    displayLegend,
    displayTitle,
    title,
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

                <div className={`graph`}>
                    {chartType === 'Pie' && (
                        <PieChart
                            sectionLabel={sectionLabel}
                            colors={colors}
                            dataset={dataset}
                            displayLegend={displayLegend}
                            displayTitle={displayTitle}
                            title={title}
                        ></PieChart>
                    )}

                    {chartType === 'Bar' && (
                        <BarChart
                            sectionLabel={sectionLabel}
                            colors={colors}
                            dataset={dataset}
                        ></BarChart>
                    )}
                </div>
            </div>
        </>
    );
};

export default ReallySection;
