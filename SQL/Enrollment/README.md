# Enrollment
https://www.testdome.com/questions/sql/enrollment/95077

A table containing the students enrolled in a yearly course has incorrect data in records and ids between _20_ and _100_ (inclusive).

```SQL
TABLE enrollments
  id INTEGER NOT NULL PRIMARY KEY
  year INTEGER NOT NULL
  studnetId INTEGER NOT NULL
```

Write a query that updates the field 'year' of every faulty record to _2015_.
