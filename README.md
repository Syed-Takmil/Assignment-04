What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById('id-name') -- this is used to find id name .Ids are very unique.There can be only 1 Id in a document.
getElementsByClassName('class-name') -- This is used to find elements by class name. Class canbe more than 1.
                                      and this returns an array like object.

 querySelector('#id/.class-name') -- This is used to find the first matching element. Returns only the first matched element.
querySelectorAll('') -- This is used to find all matching elements. Returns a NodeList(not an array like object).


Q2.How do you create and insert a new element into the DOM?
Step-1:we need to create a element using createElement
Step-2:Then we need to appendChild to its parent
Example:
const div=document.createElement('div');
body.appendChild(div);

Q3. What is Event Bubbling? And how does it work?
Ans:

-- Event Bubbling is a process where an event is clicked then starts from the target element 
   and then goes to  to its parent elements.
-- Example: If we add an event on the body ,div and a button inside the div and then click the button , the click event first runs on 
   the button, then on the div, then on the body.

   Q4 What is Event Delegation in JavaScript? Why is it useful?
Ans:
4. Event Delegation in JavaScript

-- Event Delegation is a technique where we give a single event listener 
   to a parent element instead of many child elements.
   Like in the previous example ,instead of body,div and a buton we will add eventlistener only in body
.It is used to solve the problem caused by Event Bubbling.

Q5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
5. Difference between preventDefault() and stopPropagation()

preventDefault()
--It stops a browsers by-default actions.like submitting form(so that the input data is first validated)

stopPropagation()
-this function stops event bubbling.






.
