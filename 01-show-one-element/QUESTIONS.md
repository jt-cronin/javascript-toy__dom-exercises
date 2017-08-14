# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

It is hidden back away. Because when we refresh the page, we are essentially reloading a brand new copy of the webpage from the code. So when it is refreshed, we cleared anything we chose not to store (like whether something was clicked or not). 

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

The link no longer reveals the text. My guess is that the purpose is that the functions we made becomes funcitoning when the window is loaded.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

this adds an event to the document. There are certain events like onclick and others that the addeventListener automatically calls despite compatibility issues. it has event and function parameters.