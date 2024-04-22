from rest_framework import generics
from content.models import Language, Lesson
from .models import UserChapterProgress, UserLessonProgress, UserLanguage
from .serializers import (
    UserChapterProgressSerializer,
    UserLessonProgressSerializer,
    UserLanguageSerializer,
    UserLanguageSerializer2,
)
from django.utils import timezone


class UserChapterProgressCreate(generics.CreateAPIView):
    queryset = UserChapterProgress.objects.all()
    serializer_class = UserChapterProgressSerializer


class UserLessonProgressCreate(generics.CreateAPIView):
    queryset = UserLessonProgress.objects.all()
    serializer_class = UserLessonProgressSerializer


# class UserLearningProgressCreate(generics.CreateAPIView):
#     queryset = UserLearningProgress.objects.all()
#     serializer_class = UserLearningProgressSerializer


class UserLanguageCreate(generics.CreateAPIView):
    serializer_class = UserLanguageSerializer2

    def perform_create(self, serializer):
        language_id = self.request.data.get("language_id")
        language = Language.objects.get(id=language_id)
        UserLanguage.objects.get_or_create(user=self.request.user, language=language)


class UserChapterProgressList(generics.ListAPIView):
    serializer_class = UserChapterProgressSerializer

    def get_queryset(self):
        return UserChapterProgress.objects.filter(user=self.request.user)


class UserLessonProgressList(generics.ListAPIView):
    serializer_class = UserLessonProgressSerializer

    def get_queryset(self):
        language_id = self.kwargs["language_id"]
        print(language_id)
        return UserLessonProgress.objects.filter(
            user=self.request.user, lesson__chapter__language__id=language_id
        ).order_by("lesson__chapter__order", "lesson__order")


class UserLessonProgressCreate(generics.CreateAPIView):
    serializer_class = UserLanguageSerializer2

    def perform_create(self, serializer):
        lesson_id = self.request.data.get("lesson_id")
        lesson = Lesson.objects.get(id=lesson_id)
        ulp, created = UserLessonProgress.objects.get_or_create(
            user=self.request.user, lesson=lesson
        )
        ulp.completed = True
        ulp.date_completed = timezone.now()
        ulp.save()


# class UserLearningProgressList(generics.ListAPIView):
#     serializer_class = UserLearningProgressSerializer

#     def get_queryset(self):
#         return UserLearningProgress.objects.filter(user=self.request.user)


class UserLanguageList(generics.ListAPIView):
    serializer_class = UserLanguageSerializer

    def get_queryset(self):
        return UserLanguage.objects.filter(user=self.request.user)
