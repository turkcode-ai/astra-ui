# Frequently Asked Questions

## General

### What does this tool do?
Astra UI minimalist, SEO-friendly and ultra-fast React component library built for modern web applications. It can be used both as a CLI tool and as a Node.js library.

### Is it free?
Yes, it's fully open source under the MIT license.

### What Node.js versions are supported?
Node.js 14 and above.

## Usage

### How do I use it from the command line?
```bash
node index.js <input>
node index.js <input> --json
```

### How do I use it programmatically?
```javascript
const astraUi = require('./astra-ui');
const result = await astraUi.analyze(input);
```

### Is TypeScript supported?
Type definitions are included. You can use it directly in TypeScript projects.

## Troubleshooting

### I'm getting installation errors
1. Check your Node.js version (`node --version`)
2. Run `npm cache clean --force`
3. Try again

### Performance is slow
- Use the `--timeout` option to set appropriate limits
- For large inputs, consider streaming or chunking

## Contributing

### How can I contribute?
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

### I found a bug
Please [open an issue](https://github.com/turkcode-ai/astra-ui/issues) with steps to reproduce.
