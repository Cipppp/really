import React from 'react';
import { Pie, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Josefin Sans';

function PieChart() {
    return (
        <div>
            <Pie
                data={{
                    labels: ['Active interet users (%)', 'Others (%)'],
                    datasets: [
                        {
                            label: '# of votes',
                            data: [60, 40],
                            backgroundColor: [
                                'rgba(246, 140, 118, 1)',
                                'rgba(84, 197, 195, 1)',
                            ],
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

export default PieChart;
