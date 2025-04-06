var generateParenthesis = function(n) {
    let result = [];

    function backtrack(current, openCount, closeCount) {
        // Base case: If the current string reaches max length, add to result
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Add an open parenthesis if we still have open ones left
        if (openCount < n) {
            backtrack(current + "(", openCount + 1, closeCount);
        }

        // Add a close parenthesis if we have more open ones used
        if (closeCount < openCount) {
            backtrack(current + ")", openCount, closeCount + 1);
        }
    }

    // Start backtracking
    backtrack("", 0, 0);
    return result;
};

console.log(generateParenthesis(3)); 
// Output: ["((()))","(()())","(())()","()(())","()()()"]
