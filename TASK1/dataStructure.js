const { TreeNode } = require('./classes/TreeNode.js');

const a = new TreeNode(5);
const b = new TreeNode(3);
const c = new TreeNode(7);
const d = new TreeNode(2);
const e = new TreeNode(5);
const f = new TreeNode(1);
const g = new TreeNode(0);
const h = new TreeNode(2);
const i = new TreeNode(8);
const j = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
g.left = h;
g.right = i;
i.right = j;
