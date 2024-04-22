from rest_framework import viewsets, permissions, generics
from .models import Language, Chapter, Lesson, Question
from .serializers import (
    LanguageSerializer,
    ChapterSerializer,
    LessonSerializer,
    QuestionSerializer,
)
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if(user.student):
            return user.student.institute.languages.all()
        return Language.objects.all()


class ChapterViewSet(viewsets.ModelViewSet):
    serializer_class = ChapterSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        language_id = self.kwargs["language_pk"]
        return Chapter.objects.filter(language_id=language_id).order_by('order')


class LessonViewSet(viewsets.ModelViewSet):
    serializer_class = LessonSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        chapter_id = self.kwargs["chapter_pk"]
        return Lesson.objects.filter(chapter_id=chapter_id).order_by('order')


class LessonQuestionListView(generics.ListAPIView):
    serializer_class = QuestionSerializer

    def get_queryset(self):
        lesson_id = self.kwargs["lesson_id"]
        return (
            Question.objects.filter(lesson_id=lesson_id)
            .filter(active=True)
            .order_by("order")
        )
