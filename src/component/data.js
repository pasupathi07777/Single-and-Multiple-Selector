const data = [
    {
        id: 1,
        question: "What is the difference between `==` and `===` in JavaScript ?",
        answer: "The `==` operator checks for equality after performing type coercion, while the `===` operator checks for strict equality without type coercion."
    },
    {
        id: 2,
        question: "What is hoisting in JavaScript ?",
        answer: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase, regardless of where they are declared within the scope."
    },
    {
        id: 3,
        question: "What is event delegation in JavaScript ?",
        answer: "Event delegation is a technique in JavaScript where you attach an event listener to a parent element instead of multiple child elements, allowing you to handle events that occur on child elements by delegating the event handling to their common ancestor."
    },
    {
        id: 4,
        question: "What is the difference between `let`, `const`, and `var` in JavaScript ?",
        answer: "`let` and `const` are block-scoped variable declarations introduced in ES6. Variables declared with `let` can be reassigned, while variables declared with `const` are constant (immutable) and cannot be reassigned. `var` is function-scoped and does not respect block scope."
    }
];

export default data;
