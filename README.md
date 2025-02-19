# Stale Closure in React useEffect Hook

This repository demonstrates a common error in React applications involving the `useEffect` hook and stale closures.  The provided code snippet showcases an incorrect dependency array, leading to unexpected behavior.

## Bug Description
The `useEffect` hook is used to fetch data from an API. However, the dependency array is empty (`[]`), meaning the effect runs only once after the component mounts. If the `count` state variable changes, the fetch request won't re-run, resulting in a stale closure where the data used within the effect remains unchanged even after updates to `count`.

## Solution
The solution involves including `count` in the dependency array. This ensures that the effect re-runs whenever `count` updates, fetching the latest data accordingly.