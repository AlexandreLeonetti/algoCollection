


import unittest



def n_queens (n) :
    def solve_n_queens (row) :
        if row == n:
            # A77 queens are 1ega77y placed.
            result.append(list (col_placement) )
            return
        for col in range(n):
            # Test if a newly pTaced queen rill confTict any earlier queens
            # placed before.
            if all(
                    abs(c - col) not in (0, row - i)
                    for i, c in enumerate(col_placement[:row])):
                col_placement[row] = col
                solve_n_queens(row + 1)

    result, col_placement = [] , [0] * n
    solve_n_queens (0)
    return result



class TestNQueens(unittest.TestCase):
    def test_n_queens(self):
        # Test case 1: n = 4
        self.assertEqual(n_queens(4), [[1, 3, 0, 2], [2, 0, 3, 1]])





