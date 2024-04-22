import csv
import os

def append_filename_to_path(csv_file_path, root):
    modified_data = []

    with open(csv_file_path, newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if reader.line_num == 1:
                # Add the header row as it is
                modified_data.append(row)
                continue

            folder_path = os.path.join(root, row[10])  # 'G' column is at index 6
            print(folder_path)

            if (not row[10]) and os.path.isdir(folder_path):
                files = os.listdir(folder_path)
                if files:
                    # Append the first file's name to the path
                    row[10] = os.path.join(row[10], files[0])
                    if len(files)>1:
                        row[11] = os.path.join(row[11], files[1])
                    if len(files)>2:
                        row[12] = os.path.join(row[12], files[2])
                modified_data.append(row)

    # Write the modified data back to a new CSV file
    with open( "m_"+ csv_file_path, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerows(modified_data)

def start():
    root = '/media/tarun/BlankSpace/Workspace/Lantoon/backend/Lantoon/data/'  # Define your root directory here
    csv_file_path = 'L.csv'  # Path to your CSV file
    append_filename_to_path(csv_file_path, root)
