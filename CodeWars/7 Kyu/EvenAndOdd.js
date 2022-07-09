// Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

// input	NE	NO
// 126453	264	153
// 3012	2	31
// 4628	4628	0
// 0 is considered as an even number.

// In C and JavaScript you should return an array of two elements such as the first is NE and the second is NO.

// My Solution
function evenAndOdd(num) {
  const arr = ['', ''];
  const str = num.toString();
  for (let i = 0; i < str.length; i++) {
    arr[str[i] % 2] += str[i];
  }
  return arr.map((el) => Number(el));
}

// Other Solutions
function evenAndOdd(n) {
  const f = (n, x) => +[...(n + '')].filter((e) => e % 2 === x).join``;
  return [f(n, 0), f(n, 1)];
}
