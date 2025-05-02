/**
 * Resolution for problem:
 * https://leetcode.com/problems/booking-concert-tickets-in-groups/description/
 */

class SegmentTree {
  constructor(n, m) {
    this.n = n;
    this.m = m;
    this.maxSize = 4 * n; // Safe upper bound for segment tree size
    this.max = new Array(this.maxSize).fill(0);
    this.sum = new Array(this.maxSize).fill(0);
    this.build(0, 0, n - 1);
  }

  build(node, l, r) {
    if (l === r) {
      this.max[node] = this.m;
      this.sum[node] = this.m;
      return;
    }
    const mid = Math.floor((l + r) / 2);
    this.build(2 * node + 1, l, mid);
    this.build(2 * node + 2, mid + 1, r);
    this.max[node] = Math.max(this.max[2 * node + 1], this.max[2 * node + 2]);
    this.sum[node] = this.sum[2 * node + 1] + this.sum[2 * node + 2];
  }

  updateMaxAndSum(node, l, r, idx, val) {
    if (l === r) {
      this.max[node] = val;
      this.sum[node] = val;
      return;
    }
    const mid = Math.floor((l + r) / 2);
    if (idx <= mid) {
      this.updateMaxAndSum(2 * node + 1, l, mid, idx, val);
    } else {
      this.updateMaxAndSum(2 * node + 2, mid + 1, r, idx, val);
    }
    this.max[node] = Math.max(this.max[2 * node + 1], this.max[2 * node + 2]);
    this.sum[node] = this.sum[2 * node + 1] + this.sum[2 * node + 2];
  }

  queryMax(node, l, r, start, end) {
    if (r < start || l > end) return 0;
    if (start <= l && r <= end) {
      return this.max[node];
    }
    const mid = Math.floor((l + r) / 2);
    const left = this.queryMax(2 * node + 1, l, mid, start, end);
    const right = this.queryMax(2 * node + 2, mid + 1, r, start, end);
    return Math.max(left, right);
  }

  querySum(node, l, r, start, end) {
    if (r < start || l > end) return 0;
    if (start <= l && r <= end) {
      return this.sum[node];
    }
    const mid = Math.floor((l + r) / 2);
    const left = this.querySum(2 * node + 1, l, mid, start, end);
    const right = this.querySum(2 * node + 2, mid + 1, r, start, end);
    return left + right;
  }

  findRow(node, l, r, start, end, k) {
    if (r < start || l > end) return -1;
    if (this.max[node] < k) return -1;
    if (l === r) {
      return l;
    }
    const mid = Math.floor((l + r) / 2);
    const left = this.findRow(2 * node + 1, l, mid, start, end, k);
    if (left !== -1) return left;
    return this.findRow(2 * node + 2, mid + 1, r, start, end, k);
  }
}

class BookMyShow {
  constructor(n, m) {
    this.n = n;
    this.m = m;
    this.seats = new Array(n).fill(0); // seats[r] is the number of booked seats in row r
    this.st = new SegmentTree(n, m);
  }

  gather(k, maxRow) {
    const row = this.st.findRow(0, 0, this.n - 1, 0, maxRow, k);
    if (row === -1) return [];
    const firstSeat = this.seats[row];
    this.seats[row] += k;
    this.st.updateMaxAndSum(0, 0, this.n - 1, row, this.m - this.seats[row]);
    return [row, firstSeat];
  }

  scatter(k, maxRow) {
    const total = this.st.querySum(0, 0, this.n - 1, 0, maxRow);
    if (total < k) return false;

    let remaining = k;
    let row = 0;
    while (remaining > 0 && row <= maxRow) {
      const available = this.m - this.seats[row];
      const take = Math.min(available, remaining);
      if (take > 0) {
        this.seats[row] += take;
        this.st.updateMaxAndSum(
          0,
          0,
          this.n - 1,
          row,
          this.m - this.seats[row]
        );
        remaining -= take;
      }
      row++;
    }
    return true;
  }
}
