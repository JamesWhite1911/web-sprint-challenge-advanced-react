# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
A stateful component holds all of the reusable logic that manages state. A functional component uses the stateful component to process any state logic needed.

2. When does a componentWillMount function be called? What about a componentWillUpdate? <-- (typo?)
cWM will be called during mounting. cDU will be called when updating.

3. Define stateful logic.
Logic that handles the current state of the dom and updates based on the lifecycle flow.

4. What are the three step of creating a successful test? What is done in each phase?
Arrange, Act, Assert. First you render the app or component, then you test it with input from a user's perspective, then check to see if the actions have applied to your app.
