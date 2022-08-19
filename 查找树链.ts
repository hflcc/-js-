interface TreeNode<T> {
  value: T;
  children?: TreeNode<T>[] | null;
}

type TreeList<T> = TreeNode<T>[];

export function findTreeNodePath<T>(tree: TreeList<T>, id: T) {
  let path: { value: T }[] = [];
  let count = 0;

  function findNode(node: TreeNode<T>, id: T): boolean {
    path.push({ value: node.value });
    if (node.value === id) {
      count++;
    } else if (node.children?.length) {
      for (let i = 0, len = node.children.length; i < len; i++) {
        const flag = findNode(node.children[i], id);
        if (!flag) {
          path.pop();
        } else {
          return true;
        }
      }
    }
    return count > 0;
  }

  for (let i = 0, len = tree.length; i < len; i++) {
    findNode(tree[i], id);
    if (path.length && path.find((item: TreeNode<T>) => item.value === id)) {
      break;
    } else {
      path = [];
      count = 0;
    }
  }
  return path;
}
