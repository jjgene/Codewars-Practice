# [building wall](https://www.codewars.com/kata/5c50a0e8cdc6aa29703f6805)

## 규칙
- 1층 60cm large 벽돌만 가능
- 2층 오른쪽 끝 medium 벽돌만 가능,왼쪽 끝 small 벽돌만 가능
- 3층 왼쪽 끝 small 벽돌만 가능, 오른쪽 끝 medium 벽돌만 가능

## 출력
large medium small 벽돌의 갯수를 출력 해라
** 21L6M4S

## 풀이

- 벽돌을 쌓을 횟수를 계산한다. 
- 1층 부터 벽돌을 채운다.
- 2층 이나 3층 이면 주어진 width 에서 (medium 벽돌+small벽돌)을 제외 시킨 large 벽돌로 채울수 있는 너비를 구한다.
