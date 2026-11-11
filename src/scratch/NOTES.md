# Day 2

## Task 1

`console.log(count)` shows the count increasing in the console but not on the App

Reasons it fails:

- Nothing tells React to rerender the page so the screen itself never updates
- Every call to counter runs let count = 0 again so it gets reset every time


Q: Why is count declared with const when its value clearly changes?

A: The setter is what replaces it so count isn't actually changing itself



