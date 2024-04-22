from django.db import models
from django.contrib.auth import get_user_model
from content.models import Chapter, Lesson,Language


class UserLanguage(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True)

class UserChapterProgress(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    date_completed = models.DateTimeField(null=True, blank=True)

class UserLessonProgress(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    date_completed = models.DateTimeField(null=True, blank=True)

# class UserLearningProgress(models.Model):
#     user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
#     learning = models.ForeignKey(Learning, on_delete=models.CASCADE)
#     completed = models.BooleanField(default=False)
#     date_completed = models.DateTimeField(null=True, blank=True)
