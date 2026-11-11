# Day 2

## Task 1

`console.log(count)` shows the count increasing in the console but not on the App

Reasons it fails:

- Nothing tells React to rerender the page so the screen itself never updates
- Every call to counter runs let count = 0 again so it gets reset every time


Q: Why is count declared with const when its value clearly changes?

A: The setter is what replaces it so count isn't actually changing itself


## Task 2

Change the reset to onClick={handleReset()}. Read the error aloud, and write down in a sentence why it produces Too many re-renders. Then put it back.
It produces too many re-renders because onClick must be passed a function not a function invocation

## Task 3

Without a type, useState([]) infers 'useState<never[]>(initialState: never[] | (() => never[])): [never[], React.Dispatch<React.SetStateAction<never[]>>]' and a never[] cannot be replaced

Click it several times. Nothing appears. Open the Components panel and look at the items state, then put console.log(items.length) in the body of the component. Write down what each of the three places (screen, DevTools, console) is telling you, and why they disagree.
- The screen and console both do not add elements but DevTools does. 