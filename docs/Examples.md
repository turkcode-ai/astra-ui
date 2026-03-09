# Examples

## Basic Usage

### Simple Analysis

```javascript
const astraUi = require('./astra-ui');

const result = astraUi.analyze('Hello World');
console.log(result);
```

### With Options

```javascript
const astraUi = require('./astra-ui');

const result = await astraUi.analyze('sample input', {
    verbose: true,
    format: 'json'
});

console.log(JSON.stringify(result, null, 2));
```

### File Processing

```javascript
const fs = require('fs');
const astraUi = require('./astra-ui');

const content = fs.readFileSync('input.txt', 'utf8');
const result = await astraUi.analyze(content);
console.log(result);
```

## CLI Examples

```bash
# Basic analysis
node index.js "test input"

# Read from stdin
cat input.txt | node index.js

# JSON output
node index.js "test" --json

# Save output to file
node index.js "test" --json > output.json

# Verbose mode
node index.js "test" --verbose
```

## Express.js Integration

```javascript
const express = require('express');
const astraUi = require('./astra-ui');

const app = express();
app.use(express.json());

app.post('/analyze', async (req, res) => {
    try {
        const result = await astraUi.analyze(req.body.input);
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## Batch Processing

```javascript
const astraUi = require('./astra-ui');

const inputs = ['input1', 'input2', 'input3'];

const results = await Promise.all(
    inputs.map(input => astraUi.analyze(input))
);

results.forEach((result, i) => {
    console.log(`Result ${i + 1}:`, result.data);
});
```

---

For more examples, visit [TurkCode AI Blog](https://turkcode.net/blog).
