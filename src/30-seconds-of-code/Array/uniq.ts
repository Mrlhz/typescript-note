/**
 * @description 创建一个去重后的array数组副本
 *
 * @export
 * @param {any[]} arr
 * @returns {any[]}
 */
export function uniq(arr?: any[]): any[]{
  if(!arr) return []
  return Array.from(new Set(arr))
}