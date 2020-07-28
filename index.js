function takeANumber(queue, new_person) {
  queue.push(new_person);
  return `Welcome, ${new_person}. You are number ${++queue.length} in line.`
}
function nowServing(queue) {}
function currentLine(queue) {}