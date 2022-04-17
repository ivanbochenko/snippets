const airports = 'KBP CKC CWC DNK IFO HRK KHE IEV KWG LWO ODS RWN TNL UDJ VIN OZH'.split(' ')

const routes = [
  ['KBP', 'CKC'],
  ['KBP', 'LWO'],
  ['KBP', 'ODS'],
  ['KBP', 'HRK'],
  ['ODS', 'RWN'],
  ['ODS', 'TNL'],
  ['ODS', 'UDJ'],
  ['DNK', 'CWC'],
  ['DNK', 'IFO'],
  ['LWO', 'IFO'],
]

// The graph
const list = new Map()

// Add node
function addNode(airport) {
  list.set(airport, [])
}
// Add edge
function addEdge(origin, destination) {
  list.get(origin).push(destination)
  list.get(destination).push(origin)
}

// BFS
function bfs(start, destinationPoint) {
  const queue = [start]
  const visited = new Set()
  while (queue.length > 0) {
    const airport = queue.shift()
    const destinations = list.get(airport)
    destinations.forEach((destination) => {
      if (destination === destinationPoint) {
        console.log(`Found ${destinationPoint}!`);
      }
      if (!visited.has(destination)) {
        visited.add(destination)
        queue.push(destination)
        console.log(destination);
      }
    })
  }
  return 'Finished searching'
}

// DFS
function dfs(start, destinationPoint, visited = new Set()) {
  console.log(start);
  visited.add(start)
  const destinations = list.get(start)
  destinations.forEach(destination => {
    if (destination === destinationPoint){
      console.log(`Found ${destinationPoint}!`)
    }
    if (!visited.has(destination)) {
      dfs(destination, destinationPoint, visited)
    }
  })
  return 'Finished searching'
}

// Create the graph
airports.forEach(addNode)
routes.forEach(route => addEdge(...route))
console.log(bfs('KBP', 'IFO'));
// console.log(dfs('KBP', 'IFO'));