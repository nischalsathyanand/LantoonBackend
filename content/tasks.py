import os
import csv
from .models import Language, Chapter, Lesson, Question


def import_chapters_from_csv():
    with open("chapters.csv", "r") as file:
        reader = csv.reader(file)
        chapters = []
        total_rows = sum(1 for row in reader)
        file.seek(0)  # Reset the file pointer to the beginning
        for i, row in enumerate(reader):
            if int(row[1]) < 10:
                chapter = Chapter(
                    language=Language.objects.get(id=int(row[1])),
                    order=int(row[2]),
                    title=row[3],
                    active=bool(int(row[7])),
                    visibility=bool(int(row[9])),
                )
                chapters.append(chapter)
            progress = (i + 1) / total_rows * 100
            print(f"Progress: {progress:.2f}%")
        Chapter.objects.bulk_create(chapters)


def create_lessons_from_csv():
    with open("lessons.csv", "r") as file:
        reader = csv.reader(file)
        total_rows = sum(1 for row in reader)
        file.seek(0)  # Reset the file pointer to the beginning
        for i, row in enumerate(reader):
            try:
                language_id = int(row[2])
                if language_id == 11:
                    language_id = 1
                chapter_order = int(row[3])
                lesson_order = int(row[4])
                chapter = Chapter.objects.get(
                    language_id=language_id, order=chapter_order
                )
                lesson, created = Lesson.objects.get_or_create(
                    chapter=chapter, order=lesson_order
                )
                progress = (i + 1) / total_rows * 100
                print(f"Progress: {progress:.2f}%", end="\r")
            except Exception as e:
                print(e)


def getFileNames(path):
    path = "data/" + path
    # print(path)
    file_names = []
    if not os.path.exists(path):
        return file_names
    for file_name in os.listdir(path):
        if os.path.isfile(os.path.join(path, file_name)):
            file_names.append(file_name)

    return file_names


def create_questions_from_csv():
    with open("Questions.csv", "r") as file:
        reader = csv.reader(file)
        total_rows = sum(1 for row in reader)
        file.seek(0)  # Reset the file pointer to the beginning
        chapters_cache = {}
        lessons_cache = {}
        for idx, row in enumerate(reader):
            try:
                language_id = int(row[2])
                if language_id == 11:
                    language_id = 1
                chapter_order = int(row[3])
                lesson_order = int(row[4])
                chapter_key = (language_id, chapter_order)
                if chapter_key not in chapters_cache:
                    chapters_cache[chapter_key] = Chapter.objects.get(
                        language_id=language_id, order=chapter_order
                    )
                chapter = chapters_cache[chapter_key]

                lesson_key = (chapter.id, lesson_order)
                if lesson_key not in lessons_cache:
                    lesson, created = Lesson.objects.get_or_create(
                        chapter=chapter, order=lesson_order
                    )
                    lessons_cache[lesson_key] = lesson
                lesson = lessons_cache[lesson_key]

                audioPath1 = ""
                if row[10] != "":
                    audio_files = getFileNames(row[10])
                    if audio_files:
                        audioPath1 = row[10] + audio_files[0]

                audioPath2 = ""
                if row[15] != "":
                    audio_files2 = getFileNames(row[15])
                    if audio_files2:
                        audioPath2 = row[15] + audio_files2[0]

                correctImagePath1 = ""
                if row[9] != "":
                    image_files = getFileNames(row[9] + "right/")
                    if image_files:
                        correctImagePath1 = row[9] + "right/" + image_files[0]

                correctImagePath2 = ""
                if row[14] != "":
                    image_files2 = getFileNames(row[14] + "right/")
                    if image_files2:
                        correctImagePath2 = row[14] + "right/" + image_files2[0]

                wrongImagePaths = [""] * 4
                if row[9] != "":
                    image_files3 = getFileNames(row[9] + "wrong/")
                    for i, image_file in enumerate(image_files3[:4]):
                        wrongImagePaths[i] = row[9] + "wrong/" + image_file

                # create question
                question, created = Question.objects.get_or_create(
                    lesson=lesson, order=int(row[6])
                )

                question.questionType = row[16].upper()
                question.questionText = row[7]
                question.answerText = row[13]
                question.audioPath1 = audioPath1
                question.audioPath2 = audioPath2
                question.correctImagePath1 = correctImagePath1
                question.correctImagePath2 = correctImagePath2
                question.wrongImagePath1 = wrongImagePaths[0]
                question.wrongImagePath2 = wrongImagePaths[1]
                question.wrongImagePath3 = wrongImagePaths[2]
                question.wrongImagePath4 = wrongImagePaths[3]
                question.save()
                progress = (idx + 1) / total_rows * 100
                print(f"Progress: {progress:.2f}%", end="\r")
            except Exception as e:
                print(e)
