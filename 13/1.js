const buses = [29, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 41, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 521, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 23, 'x', 'x', 'x', 'x', 13, 'x', 'x', 'x', 17, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 601, 'x', 'x', 'x', 'x', 'x', 37, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 19];
const earliest_timestamp = 1002461;

const active_buses = buses.filter(ID => ID !== 'x');

const nearest_timestamp = active_buses.map((ID) => {
  return ID - earliest_timestamp % ID;
});

const min_wait_time = Math.min.apply(Math, nearest_timestamp);
const earlies_bus_ID = active_buses[nearest_timestamp.indexOf(min_wait_time)];

console.log(min_wait_time * earlies_bus_ID);

