function takeANumber(queue, new_person) {
  queue.push(new_person);
  return `Welcome, ${new_person}. You are number ${queue.length} in line.`
}
function nowServing(queue) {
  if(queue.length === 0) {return "There is nobody waiting to be served!";}
  else {
      let current_cust = `Currently serving ${queue[0]}.`;
      queue.shift();
    return current_cust;
  }
}
function currentLine(queue) {}
