# @alfimonth/dfh

📅 A lightweight utility to convert JavaScript dates into human-readable relative time — like `5 minutes ago`, `yesterday`, or `in 2 days`.

## ✨ Features

- Easy to use: `dfh(new Date())`
- Supports both past and future times
- Lightweight and dependency-free
- Written in TypeScript

---

## 🚀 Installation

```bash
npm install @alfimonth/dfh
```

or using Yarn:

```bash
yarn add @alfimonth/dfh
```

---

## 🛠 Usage

```ts
import { dfh } from '@alfimonth/dfh';

const result = dfh(new Date(Date.now() - 60 * 1000)); // 1 minute ago
console.log(result);
```

---

## 📌 Examples

| Input                                   | Output               |
| --------------------------------------- | -------------------- |
| `dfh(new Date())`                     | `just now`         |
| `dfh(new Date(Date.now() - 60000))`   | `1 minute ago`     |
| `dfh(new Date(Date.now() + 3600000))` | `in 1 hour`        |
| `dfh(new Date('2020-01-01'))`         | `over 4 years ago` |

---

## 📦 API

### `dfh(date: Date | string | number): string`

**Parameters:**

- `date` — A JavaScript `Date` object, timestamp (`number`), or ISO date `string`.

**Returns:**

- A human-readable string like `"5 minutes ago"` or `"in 3 days"`.

---

## 🧪 Testing

```bash
npm run test
```

---

## 📄 License

MIT © [@alfimonth](https://www.npmjs.com/~alfimonth)
