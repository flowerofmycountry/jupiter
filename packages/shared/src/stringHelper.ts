/**
 * 将驼峰命名转化为串式命名
 * @date 6/18/2023 - 4:43:03 PM
 *
 * @export
 * @param {string} target 驼峰命名的字符串
 * @returns {string} 串式命名的字符串
 */
export function camelToKebab(target: string) {
  return target
    .replace(/[A-Z]/g, match => '-' + match.toLowerCase())
    .replace(/^-/, '')
}

/**
 * 将串式命名转化为驼峰命名
 * @date 6/18/2023 - 4:43:03 PM
 *
 * @export
 * @param {string} target 串式命名的字符串
 * @returns {string} 驼峰命名的字符串
 */
export function kebabToCamel(target: string) {
  // @ts-ignore
  return target.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
}
