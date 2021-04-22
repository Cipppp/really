export const firstSection = {
    chartType: '',
    showGreen: true,
    text:
        "A category three hurricane releases more energy in ten minutes that all the world's nuclear weapons combined.",
    firstSection: true,
    sectionLabel: '',
    colors: '',
    dataset: '',
};

export const secondSection = {
    chartType: 'Pie',
    showGreen: false,
    text:
        'There are 7.83 billion people in the world, 4.66 billion of them are active Internet users.',
    firstSection: false,
    sectionLabel: ['Active interet users (%)', 'Others (%)'],
    colors: ['rgba(246, 140, 118, 1)', 'rgba(84, 197, 195, 1)'],
    dataset: [60, 40],
    displayLegend: true,
    displayTitle: false,
    title: 'Active internet users (%)',
};

export const thirdSection = {
    chartType: 'Pie',
    showGreen: true,
    text:
        'Asia has the largest percentage of Internet users by continent of all people using the internet.',
    firstSection: false,
    sectionLabel: [
        'Asia (%)',
        'America (%)',
        'Europa (%)',
        'Africa (%)',
        'Others (%)',
    ],
    colors: ['#FCC777', '#F58D74', '#BD7CB4', '#F5796D', '#F5A872'],
    dataset: [51, 16, 15, 13, 6],
    displayLegend: true,
    displayTitle: false,
    title: '',
};

export const fourthSection = {
    chartType: 'Pie',
    showGreen: false,
    text:
        'Kuwait is the country with the highest penetration of internet users, with 99.6%.',
    firstSection: false,
    sectionLabel: ['Internet users (%)', 'Others (%)'],
    colors: ['rgba(246, 140, 118, 1)', 'rgba(84, 197, 195, 1)'],
    dataset: [99, 1],
    displayLegend: false,
    displayTitle: true,
    title: 'Internet users (%)',
};

export const fifthSection = {
    chartType: 'Bar',
    showGreen: true,
    text:
        '66% of companies use online advertising and do so through a variety of channels. The most pupular are:',
    firstSection: false,
    sectionLabel: [
        'Social media ads',
        'Display ads',
        'Paid search marketing',
        'Retargeted ads',
    ],
    colors: '#F5796D',
    dataset: [80, 70, 60, 45, 30],
    displayLegend: true,
    displayTitle: false,
    title: 'Active internet users',
};
