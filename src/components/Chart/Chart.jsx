import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Completed', 'Remaining'],
  datasets: [{
    data: [progress, 100 - progress],
    backgroundColor: ['#4ade80', '#f87171']
  }]
};

<Doughnut data={data} />
