function takeANumber(queue, new_person) {
  queue.push(new_person);
  return `Welcome, ${new_person}. You are number ${queue.length} in line.`
}
function nowServing(queue) {
  if(queue.length === 0) {return "There is nobody waiting to be served!";}
  else {
    queue.shift();
    return `Currently serving ${queue[0]}.`;
  }

}
function currentLine(queue) {}
