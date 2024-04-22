from django.urls import path, include
from rest_framework_nested import routers
from .views import (
    LanguageViewSet,
    ChapterViewSet,
    LessonViewSet,
    LessonQuestionListView,
)

router = routers.SimpleRouter()
router.register(r"languages", LanguageViewSet)

languages_router = routers.NestedSimpleRouter(router, r"languages", lookup="language")
languages_router.register(r"chapters", ChapterViewSet, basename="language-chapters")

chapters_router = routers.NestedSimpleRouter(
    languages_router, r"chapters", lookup="chapter"
)
chapters_router.register(r"lessons", LessonViewSet, basename="chapter-lessons")

lessons_router = routers.NestedSimpleRouter(
    chapters_router, r"lessons", lookup="lesson"
)


urlpatterns = [
    path("", include(router.urls)),
    path("", include(languages_router.urls)),
    path("", include(chapters_router.urls)),
    path("", include(lessons_router.urls)),
    path(
        "lessons/<int:lesson_id>/questions/",
        LessonQuestionListView.as_view(),
        name="lesson_questions",
    ),
]
