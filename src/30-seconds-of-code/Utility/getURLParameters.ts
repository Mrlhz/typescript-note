/**
 * @description 返回一个包含当前 URL 参数的对象
 *
 * @export
 * @param {string} url
 * @returns {object}
 * @example
 * 
 * getURLParameters('http://url.com/page?name=Adam&surname=Smith')
 * // {name: 'Adam', surname: 'Smith'}
 * 
 * getURLParameters('google.com')
 * // {}
 */
export function getURLParameters(url: string): any {
  if (!url) return {}
  let index = url.indexOf('?')
  if (index < 0) return {}
  let result:any = {}
  url.substring(index + 1).split('&').forEach((ele:string): void => {
    let [key, value] = ele.split('=')
    result[key] = value
  })
  return result
}