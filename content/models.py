from django.db import models


class Language(models.Model):
    name = models.CharField(max_length=255, unique=True)
    native_name = models.CharField(max_length=255, blank=True, null=True)
    speak_code = models.CharField(max_length=10, blank=True, null=True)
    active = models.BooleanField(default=True, blank=True, null=True)
    picture = models.ImageField(upload_to="static/language_pictures", null=True)
    created = models.DateTimeField(auto_now_add=True)
    last_edited = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Chapter(models.Model):
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    order = models.PositiveIntegerField()

    borderColor = models.CharField(
        max_length=20, default="border-[#46a302]", blank=True
    )
    textColor = models.CharField(max_length=20, default="text-[#58cc02]", blank=True)
    backgroundColor = models.CharField(
        max_length=20, default="bg-[#58cc02]", blank=True
    )

    active = models.BooleanField(default=True)
    visibility = models.BooleanField(default=True)

    class Meta:
        unique_together = ["language", "order"]

    def save(self, *args, **kwargs):
        if self.order % 3 == 0:
            self.borderColor = "border-[#46a302]"
            self.backgroundColor = "bg-[#58cc02]"
            self.textColor = "text-[#58cc02]"
        elif self.order % 3 == 1:
            self.borderColor = "border-[#a568cc]"
            self.backgroundColor = "bg-[#ce82ff]"
            self.textColor = "text-[#ce82ff]"
        elif self.order % 3 == 2:
            self.borderColor = "border-[#00a47d]"
            self.backgroundColor = "bg-[#00cd9c]"
            self.textColor = "text-[#00cd9c]"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.language} - {self.title}"


class Lesson(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    order = models.PositiveIntegerField()
    LESSON_TYPES = (
        ("", "Blank"),
        ("star", "Star"),
        ("book", "Book"),
        ("trophy", "Trophy"),
        ("dumbell", "Dumbell"),
    )
    lessonType = models.CharField(
        max_length=20, choices=LESSON_TYPES, default="", blank=True
    )

    class Meta:
        unique_together = ["chapter", "order"]

    def save(self, *args, **kwargs):
        if self.lessonType == "":
            self.lessonType = "star"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.chapter} - {self.order}"


class Question(models.Model):
    LESSON_CHOICES = (
        ("L1", "L1"),
        ("P1", "P1"),
        ("P2", "P2"),
        ("Q", "Q"),
        ("QP1", "QP1"),
        ("QP2", "QP2"),
    )
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    order = models.IntegerField(default=0)

    questionType = models.CharField(max_length=10, choices=LESSON_CHOICES)

    questionText = models.TextField(blank=True)
    answerText = models.TextField(blank=True)

    audioPath1 = models.URLField(blank=True)
    audioPath2 = models.URLField(blank=True)
    correctImagePath1 = models.URLField(blank=True)
    correctImagePath2 = models.URLField(blank=True)
    wrongImagePath1 = models.URLField(blank=True)
    wrongImagePath2 = models.URLField(blank=True)
    wrongImagePath3 = models.URLField(blank=True)
    wrongImagePath4 = models.URLField(blank=True)

    active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.lesson} - {self.order}"
