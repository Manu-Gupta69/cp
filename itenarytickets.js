let tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];

let ticketsobj = {};

let chart = {};

for (let ticket of tickets) {
  let source = ticket[0];
  let destination = ticket[1];

  ticketsobj[source] = destination;

  if (!chart.hasOwnProperty(source)) {
    chart[source] = true;
  }

  chart[destination] = false;
}

let startingpoint;
for (let key in chart) {
  if (chart[key]) {
    startingpoint = key;
  }
}

let travelchart = [];
while (true) {
  if (!ticketsobj.hasOwnProperty(startingpoint)) {
    travelchart.push(startingpoint);
    break;
  }
  travelchart.push(startingpoint);
  startingpoint = ticketsobj[startingpoint];
}
console.log(travelchart); 
