import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Josefin Sans';

function BarChart({ sectionLabel, colors, dataset }) {
    return (
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
                responsive: true,
                maintainAspectRatio: false,
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
                    borderWidth: 0,
                    labels: {
                        fontSize: 13,
                    },
                },
            }}
        />
    );
}

export default BarChart;
