import random

ROWS, COLS = 9, 10

clean = 0
move = 0

start_row = random.randint(1, ROWS - 2)
start_col = random.randint(1, COLS - 2)

position = (start_row, start_col)
previous_position = None

print(f"Starting position: {position}")


def clean_if_dirty():
    global clean
    if random.choice([True, False]):
        print(f"Dirt found at {position}.")
        clean += 1


def move_up():
    global move, position
    move += 1
    row, col = position
    position = (row - 1, col)


def move_down():
    global move, position
    move += 1
    row, col = position
    position = (row + 1, col)


def move_left():
    global move, position
    move += 1
    row, col = position
    position = (row, col - 1)


def move_right():
    global move, position
    move += 1
    row, col = position
    position = (row, col + 1)


while True:
    clean_if_dirty()

    possible_moves = []

    row, col = position

    if row > 0 and (row - 1, col) != previous_position:
        possible_moves.append(move_up)
    if row < ROWS - 1 and (row + 1, col) != previous_position:
        possible_moves.append(move_down)
    if col > 0 and (row, col - 1) != previous_position:
        possible_moves.append(move_left)
    if col < COLS - 1 and (row, col + 1) != previous_position:
        possible_moves.append(move_right)

    if not possible_moves:
        print("No possible moves.")
        break

    previous_position = position
    move_function = random.choice(possible_moves)
    move_function()

    print(f"Moved to {position}")

    if (
        position[0] == 0
        or position[0] == ROWS - 1
        or position[1] == 0
        or position[1] == COLS - 1
    ):
        print(f"Reached edge at {position}.")
        break

print(f"Total moves: {move}")
print(f"Total cleaned tiles: {clean}")
