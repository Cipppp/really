import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Josefin Sans';

function BarChart({ sectionLabel, colors, dataset }) {
    return (
        <div>
            <Bar
                data={{
                    labels: sectionLabel,
                    datasets: [
                        {
                            label: 'Percent (%)',
                            data: dataset,
                            backgroundColor: colors,
                            borderWidth: 4,
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
                        labels: {
                            fontSize: 15,
                        },
                    },
                }}
            />
        </div>
    );
}

export default BarChart;
