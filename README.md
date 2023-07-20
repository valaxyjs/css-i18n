# CSS i18n

[![css-i18n | NPM](https://img.shields.io/npm/v/css-i18n)](https://github.com/valaxyjs/css-i18n)

CSS I18n Plugin for Markdown-It.

- [markdown-it](https://github.com/markdown-it/markdown-it)
- [markdown-it-container](https://github.com/markdown-it/markdown-it-container)

## Usage

### Install

```bash
npm i markdown-it-container css-i18n
# pnpm add markdown-it-container css-i18n
```

### Use as markdown-it plugin

```ts
import { cssI18nContainer } from 'css-i18n'

import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
md.use(cssI18nContainer, {
  languages: ['zh-CN', 'en']
})
```

### CSS

```ts
// in client
import 'css-i18n/dist/index.css'

// source scss
// import 'css-i18n/src/index.scss'
```
