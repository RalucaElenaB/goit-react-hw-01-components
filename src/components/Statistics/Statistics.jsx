import './Statistics.modules.css';

const Statistics = ({ title, stats }) => {
  const getColor = () => {
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  };
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(stat => (
          <li
            key={stat.id}
            class="item"
            style={{ backgroundColor: getColor() }}
          >
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
