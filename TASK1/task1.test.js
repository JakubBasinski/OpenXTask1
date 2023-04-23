
const {
  TreeNode,
  countLeaves,
  calculateNodeHeight,
  calculateLongestPath,
  compareTrees,
} = require('./classes/TreeNode.js');

describe('Task1', () => {
  describe('Leaves', () => {
    let k, l, m, n, o, p, q, r, s, t, k1, l1, m1, n1, o1, p1, q1, r1;

    beforeEach(() => {
      k = new TreeNode(5);
      l = new TreeNode(3);
      m = new TreeNode(7);
      n = new TreeNode(2);
      o = new TreeNode(5);
      p = new TreeNode(1);
      q = new TreeNode(0);
      r = new TreeNode(2);
      s = new TreeNode(8);
      t = new TreeNode(5);

      k1 = new TreeNode(5);
      l1 = new TreeNode(3);
      m1 = new TreeNode(7);
      n1 = new TreeNode(2);
      o1 = new TreeNode(5);
      p1 = new TreeNode(1);
      q1 = new TreeNode(0);
      r1 = new TreeNode(2);

      k.left = l;
      k.right = m;
      l.left = n;
      l.right = o;
      m.left = p;
      m.right = q;
      q.left = r;
      q.right = s;
      s.right = t;

      k1.left = l1;
      k1.right = m1;
      l1.left = n1;
      l1.right = o1;
      m1.left = p1;
      m1.right = q1;
      q1.left = r1;
    });

    test('countLeaves with root set to null ', () => {
      expect(countLeaves(null)).toBe(0);
    });

    test('countLeaves with tree', () => {
      expect(countLeaves(k)).toBe(5);
    });

    test('countLeaves with of a different tree', () => {
      expect(countLeaves(k1)).toBe(4);
    });
  });

  describe(' Node height', () => {
    test('Node height is 0 if root is null', () => {
      const root = null;
      expect(calculateNodeHeight(root)).toEqual(0);
    });

    test('Height is 1 for single node root ', () => {
      const root = new TreeNode(5);
      expect(calculateNodeHeight(root)).toEqual(1);
    });
  });

  describe('Longest path', () => {
    let k, l, m, k1, l1, m1

    beforeEach(() => {
      k = new TreeNode(5);
      l = new TreeNode(3);
      m = new TreeNode(7);
      k.left = l;
      l.left = m;

      k1 = new TreeNode(5);
      l1 = new TreeNode(4);
      m1 = new TreeNode(7);
      k1.left = l1;
      l1.left = m1;
    });

    test('Longest path should be 0 if root is null', () => {
      const root = null;
      expect(calculateLongestPath(root)).toEqual(0);
    });

    test('Longest path to for a tree with just root node should equal 0', () => {
      const a = new TreeNode(5);

      expect(calculateLongestPath(a)).toEqual(0);
    });

    test('Longest path for an tree with 3 NodeHeight should equal 2 ', () => {
      expect(calculateLongestPath(k)).toEqual(2);
    });
  });

  describe('Comparing trees ', () => {
    let k, l, m, k1, l1, m1

    beforeEach(() => {
      k = new TreeNode(5);
      l = new TreeNode(3);
      m = new TreeNode(7);
      k.left = l;
      l.left = m;

      k1 = new TreeNode(5);
      l1 = new TreeNode(4);
      m1 = new TreeNode(7);
      k1.left = l1;
      l1.left = m1;
    });
    test('Comparing two trees that are empty should return true', () => {
      const root1 = null;
      const root2 = null;
      expect(compareTrees(root1, root2)).toEqual(true);
    });
    test('Comparing an empty tree with non-empty should return false', () => {
      const a = new TreeNode(5);
      const root1 = null;
      const root2 = a;
      expect(compareTrees(root1, root2)).toEqual(false);
    });

    test('Comparing two exact trees should return true', () => {
      expect(compareTrees(k, k)).toEqual(true);
    });

    test('Comparing two trees with same structures but different values should return false ', () => {
      expect(compareTrees(k, k1)).toEqual(false);
    });
  });
});
