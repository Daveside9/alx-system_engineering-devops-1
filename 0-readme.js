import sys

def read_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            print(content)
    except Exception as e:
        print("An error occurred:", e)

if __name__ == "__main__":
    file_path = sys.argv[1]
    read_file(file_path)
