/**
 * Wrap Markdown tables in a scroll container.
 * `.guide` uses overflow: hidden to clip the page banner to the card radius,
 * which also crops a table that is wider than the column. The wrapper scrolls
 * on its own so the glyphs stay reachable.
 */
export function rehypeTableScroll() {
  return (tree) => {
    wrapTables(tree);
  };
}

function wrapTables(node) {
  const children = node?.children;
  if (!children) return;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === 'element' && child.tagName === 'table') {
      children[i] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-scroll'], tabIndex: '0' },
        children: [child],
      };
    } else {
      wrapTables(child);
    }
  }
}
