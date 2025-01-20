import os

directory = 'C:/Users/aadit/OneDrive/Documents/Aadit/books'
word_to_remove = '_'

for filename in os.listdir(directory):
    if word_to_remove in filename:
        new_filename = filename.replace(word_to_remove, ' ')
        
        old_file = os.path.join(directory, filename)
        new_file = os.path.join(directory, new_filename)
        
        os.rename(old_file, new_file)
        print(f"Renamed {old_file} to {new_file}")