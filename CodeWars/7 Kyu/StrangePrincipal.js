// There are number of lockers "n" and number of students "n" in the school. The principal asks the first student to go to every locker and open it. Then he has the second student go to every second locker and close it. The third goes to every third locker and, if it is closed, he opens it, and if it is open, he closes it. The fourth student does this to every fourth locker, and so on. After the process is completed with the "n"th student, how many lockers are open?

// The task is to write a function which gets any number as an input and returns the number of open lockers after last sudent complets his activity. So input of the function is just one number which shows number of lockers and number of students. For example if there are 1000 lockers and 1000 students in school then input is 1000 and function returns number of open lockers after 1000th student completes his action.

// The given input is always an integer greater than or equal to zero that is why there is no need for validation.

// My Solution
function numOfOpenLockers(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i ** 2 <= n) {
      count++;
      continue;
    }
    break;
  }
  return count;
}

// Other Solutions
function numOfOpenLockers(n) {
  return Math.floor(Math.sqrt(n));
}
