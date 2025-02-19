```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct dependency array: includes 'count'
    fetch('/api/data').then(res => res.json()).then(data => {
      // ... use data ...
    });
  }, [count]); // Added 'count' to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```