function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s1L = s1.toLowerCase();
	s2L = s2.toLowerCase();
	return s1L.indexOf(s2L);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
