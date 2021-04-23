import React from 'react';
import { HorizontalBar, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Josefin Sans';

function PieChart({ sectionLabel, colors, dataset }) {
    return (
        <div>
            <HorizontalBar
                data={{
                    labels: sectionLabel,
                    datasets: [
                        {
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
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },

                    legend: {
                        display: false,
                    },

                    title: {
                        display: true,
                        fontSize: 18,
                        // text: 'Internet users',
                    },
                }}
            />
        </div>
    );
}

export default PieChart;
