import { Path, Editor, Node } from 'slate';

/**
 * Searches for the "search" param from the path upwards.
 * for example if we click an element { text: 'cell 0-1' }
 * it will start looking from that upwards and find
 * { type: 'table-cell', children: [{ text: 'cell 0-1' }] }
 *
 * @param editor
 * @param path
 * @param search
 */
function getPath(
  editor: Editor,
  path: Path,
  search: Array<string>
): Path | null {
  const levels = Node.levels(editor, path, {
    reverse: true
  });

  const levelsInterator = levels[Symbol.iterator]();

  while (true) {
    const result = levelsInterator.next();
    const value = result.value;

    if (search.indexOf(value[0].type) > -1) return value[1];

    if (result.done) break;
  }

  return null;
}

export const getTableCellPath = function(
  editor: Editor,
  path: Path
): Path | null {
  return getPath(editor, path, ['table-cell', 'table-header-cell']);
};

export const getTablePath = function(editor: Editor, path: Path): Path | null {
  return getPath(editor, path, ['table']);
};

export const getTableChildren = function(
  editor: Editor,
  path: Path
): Array<Node> {
  return Node.get(editor, path).children;
};

export const getCurrentPath = function(editor: Editor, path: Path): Path {
  return Node.get(editor, path)[1];
};
