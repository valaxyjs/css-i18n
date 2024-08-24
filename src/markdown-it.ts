import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token.mjs'
import container from 'markdown-it-container'

export interface CSSI18nOptions {
  /**
   * Languages to support
   * @default ['zh-CN', 'en']
   */
  languages?: string[]
}

/**
 * Add a container to markdown-it to support i18n
 * @example
 * ```markdown
 * ::: zh-CN
 * 你好
 * :::
 *
 * ::: en
 * Hello
 * :::
 * ```
 * @param md
 * @param options
 */
export function cssI18nContainer(md: MarkdownIt, options: CSSI18nOptions = {}) {
  const languages = options.languages || ['zh-CN', 'en']

  languages.forEach((lang) => {
    md.use(container, lang, {
      render: (tokens: Token[], idx: number) => tokens[idx].nesting === 1 ? `<div lang="${lang}">\n` : '</div>\n',
    })
  })
}
