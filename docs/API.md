# Astra UI - API Reference

> Complete API documentation for `astra-ui`

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Methods](#api-methods)
- [Configuration](#configuration)
- [CLI Usage](#cli-usage)
- [Error Handling](#error-handling)
- [TypeScript Support](#typescript-support)

## Installation

```bash
# npm
npm install astra-ui

# yarn
yarn add astra-ui

# pnpm
pnpm add astra-ui
```

## Quick Start

```javascript
const astraUi = require('astra-ui');

// Basic usage
const result = await astraUi.run({
  // your options here
});

console.log(result);
```

## API Methods

### `run(options)`

Main entry point for Astra UI.

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `input` | `string|object` | required | Input data to process |
| `verbose` | `boolean` | `false` | Enable verbose logging |
| `output` | `string` | `'json'` | Output format (json, text, table) |
| `timeout` | `number` | `30000` | Timeout in milliseconds |

**Returns:** `Promise<Object>` - Processing results

**Example:**

```javascript
const result = await astraUi.run({
  input: 'example data',
  verbose: true,
  output: 'json',
});
```

## Configuration

Configuration can be provided via:

1. **Constructor options** (highest priority)
2. **Environment variables**
3. **Config file** (`.astrarc.json`)

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `ASTRA_UI_DEBUG` | Enable debug mode | `false` |
| `ASTRA_UI_TIMEOUT` | Default timeout (ms) | `30000` |

## CLI Usage

```bash
# Show help
npx astra-ui --help

# Run with input
npx astra-ui --input "data" --verbose

# Output as JSON
npx astra-ui --input "data" --output json

# Pipe support
echo "data" | npx astra-ui
```

### CLI Flags

| Flag | Alias | Description |
|------|-------|-------------|
| `--help` | `-h` | Show help message |
| `--version` | `-v` | Show version |
| `--input` | `-i` | Input data |
| `--output` | `-o` | Output format |
| `--verbose` | | Enable verbose output |
| `--json` | | Output as JSON |
| `--benchmark` | | Run benchmark mode |

## Error Handling

```javascript
try {
  const result = await astraUi.run({ input: 'test' });
} catch (error) {
  if (error.code === 'VALIDATION_ERROR') {
    console.error('Invalid input:', error.message);
  } else if (error.code === 'TIMEOUT') {
    console.error('Operation timed out');
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## TypeScript Support

Type definitions are included:

```typescript
import astraUi from 'astra-ui';

interface Options {
  input: string | object;
  verbose?: boolean;
  output?: 'json' | 'text' | 'table';
  timeout?: number;
}

const result: Result = await astraUi.run(options);
```

---

*Powered by [TurkCode.NET](https://turkcode.net) - High Quality Coding Resources*
