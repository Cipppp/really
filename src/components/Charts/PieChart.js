import React from 'react';
import { Pie, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Josefin Sans';

function PieChart({ sectionLabel, colors, dataset }) {
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
                        position: 'top',
                        // padding: 10,
                        labels: {
                            fontSize: 13,
                        },
                    },
                }}
            />
        </div>
    );
}

export default PieChart;
