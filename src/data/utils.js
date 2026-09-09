/** Zips parallel {en:[...], ar:[...]} arrays into an array of {en, ar} pairs. */
export function zip(node) {
  if (!node || !Array.isArray(node.en)) return []
  return node.en.map((en, i) => ({ en, ar: node.ar?.[i] ?? en }))
}
