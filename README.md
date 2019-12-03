# use-compare-previous
Small hook that compares one value with the previous one


Sometimes some component is rendering too much times, and it's hard to understand which prop or function is always changing.
This hook tries to help in that.

# Usage

Inside your funcional component, call `useComparePrevious(value)` and in the browser console it will be logged if that value has changed along side with the previous value and the current one.
