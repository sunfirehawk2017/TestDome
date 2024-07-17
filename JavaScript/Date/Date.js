function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var parts = userDate.split('/');
  var result = parts[2] + ("0" + parts[0]).slice(-2) + ("0" + parts[1]).slice(-2);
  return result;
}

console.log(formatDate("12/31/2014"));
