# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

getElementsByClassName

basically it creates an array out of anything it finds within the class name that we pass it.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

I had to use a loop. I do not exactly why it would not go as one chunk. In the console i tried to define the variable hide before and after the click. Neither seemed to work. My thought was that as individuals it would just do the action of making the display none.