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
function currentLine(queue) {
  let len = queue.length;
  if(queue.length === 0) {return "The line is currently empty.";}
  else {
    let line = "The line is currently: ";
    let count = 1;
    for(let i = 0; i < len; i++) {
      line += `${count++}. ${queue[i]} `
    }
    console.log(line);
  }
}
