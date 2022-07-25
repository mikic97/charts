
    const lineChart = document.getElementById('lineChart')
    const labels = [
      '22 maj',
      '23 maj',
      '24 maj',
      '25 maj',
      '26 maj',
      '27 maj',
      '28 maj',
      '29 maj',
      '30 maj',
      '31 maj',
      '01 jun',
      '02 jun',
      '03 jun',
      '04 jun',
      '05 jun',
      '06 jun',
      '07 jun',
      '08 jun',
      '09 jun',


    ];
    new Chart(lineChart, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Povratni pregledi',
              data: [1844 , 1554 , 1273 , 1284 , 1126 , 946  , 964  , 1793 , 1432 , 1130 , 1074 , 954 , 856 , 833 , 1536 , 1416 , 1248 , 1226],
              borderColor: 'rgba(66,138,245,1)',
              borderColor: 'rgba(66,138,245,1)',
            },
            {
              label: 'novi pregledi',
              data: [1199 , 1314 , 1147 , 1403 , 1217 , 1015 , 1138 , 1272 , 957  , 862  , 716  , 712 , 610 , 585 , 847  , 744  , 756  , 781],
              borderColor: 'rgba(235,134,52,1)',
              
            }



          ]
        }
    });

    // pie chart 
    const pieChart = document.getElementById('pieChart')

    new Chart (pieChart, {
        type: 'pie',
        data: {
          labels: ['Srbija', 'Bih', 'Hrvatska', 'S.Makedonija', 'CG','Ostali'],
          datasets: [
          {
            label: 'drazve',
            data:[49.6, 20.3, 9.5, 3.6, 2.6,14.4],
            backgroundColor: [
              'rgba(52,235,143,1)',
              'rgba(235,201,52,1)',
              'rgba(52,153,235,1)',
              'rgba(235,52,119,1)',
              'rgba(186,52,235,1)',
              'rgba(52,153,170,1)'

            ]
          }

          ]
        }


    })
// bar chart 

const barChart = document.getElementById('barChart');

new Chart(barChart, {
  type:'bar',
  data: {
    labels:['13-17', '18-24', '25-32', '35-44','45-54','55-64','65+'],
    datasets: [
      {
        
         label:'publika po godinama', 
         data: [1.7,43.3,34.4,13.6,5.6,1.2,0.3],
         backgroundColor: [
              'rgba(255,99,132,1)',
              'rgba(54,162,235,1)',
              'rgba(255,206,86,1)',
              'rgba(75,192,192,1)',
              'rgba(153,102,255,1)',
              'rgba(255,159,64,1)',
              'rgba(155,159,64,1)',

         ]
      }
    ]
    
  }
});

// DOUGHNUT CHART 
const doughnut = document.getElementById('doughnutChart')

new Chart (doughnutChart,{
type: 'doughnut',

data: {
  labels: ['Asian','Afro-American','Latino','Middle Eastern','Mixed','Native American', 'White'],
  datasets: [
    {
      label: 'Race Ethnicity',
      data: [17, 19.5, 24, 3.1, 3, 3, 28.2],
      backgroundColor: [
              'rgba(255,99,132,1)',
              'rgba(54,162,235,1)',
              'rgba(255,206,86,1)',
              'rgba(75,192,192,1)',
              'rgba(153,102,255,1)',
              'rgba(255,159,64,1)',
              'rgba(155,159,64,1)',
      ]
  }


  ]
}






})
// RADAR CHART 
const radarChart = document.getElementById('radarChart')

    new Chart (radarChart, {
        type: 'radar',
        data: {
          labels: ["JAN", "FEB", "MAR","APR"],
          datasets: [{
            label: "2020 max temperatures", 
            backgroundColor: 'rgb(0,200,132)',
            borderColor: 'rgb(0,200,132)', 
            data: [10, 8, 18, 22],
           }, {
            label: "2021 max temperatures", 
            backgroundColor: 'rgb(255,202,132)',
            borderColor: 'rgb(255,200,132)', 
            data: [6, 12, 15, 24],
          }]
          }


    })


 