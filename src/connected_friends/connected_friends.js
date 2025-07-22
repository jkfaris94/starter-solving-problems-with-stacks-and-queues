const Queue = require("../lib/queue");

const connected = (graph, startUser, endUser) => {
  // empty graph → no path
  if (!graph || Object.keys(graph).length === 0) return false;
  // trivial case
  if (startUser === endUser) return true;

  const seen = new Set([startUser]);
  const queue = [startUser];

  while (queue.length > 0) {
    const user = queue.shift();
    const neighbors = graph[user] || [];

    for (const next of neighbors) {
      // found it!
      if (next === endUser) return true;
      // otherwise enqueue unseen users
      if (!seen.has(next)) {
        seen.add(next);
        queue.push(next);
      }
    }
  }

  // exhausted the reachable subgraph without finding endUser
  return false;
};

module.exports = connected;
