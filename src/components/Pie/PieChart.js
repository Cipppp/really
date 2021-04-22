import React from 'react';
import { Pie, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Josefin Sans';

function PieChart({
    sectionLabel,
    colors,
    dataset,
    displayLegend,
    displayTitle,
    title,
}) {
    return (
        <div>
            <Pie
                data={{
                    labels: sectionLabel,
                    datasets: [
                        {
                            data: dataset,
                            backgroundColor: colors,
                            borderWidth: 0,
                        },
                    ],
                }}
                height={550}
                width={550}
                options={{
                    scales: {
                        display: false,
                    },

                    legend: {
                        display: displayLegend,
                        labels: {
                            fontSize: 14,
                        },
                    },
                    title: {
                        display: displayTitle,
                        text: title,
                        fontSize: 15,
                    },
                }}
            />
        </div>
    );
}

export default PieChart;
