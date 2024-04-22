from django.urls import path
from .views import (
    UserChapterProgressCreate,
    UserChapterProgressList,
    UserLessonProgressCreate,
    UserLessonProgressList,
    UserLanguageCreate,
    UserLanguageList,
)

urlpatterns = [
    # URLs for user's progress
    path(
        "chapter-progress/",
        UserChapterProgressList.as_view(),
        name="chapter-progress-list",
    ),
    path(
        "chapter-progress/create/",
        UserChapterProgressCreate.as_view(),
        name="chapter-progress-create",
    ),
    path(
        "lesson-progress/<int:language_id>/",
        UserLessonProgressList.as_view(),
        name="lesson-progress-list",
    ),
    path(
        "lesson-progress/create/",
        UserLessonProgressCreate.as_view(),
        name="lesson-progress-create",
    ),
    # path('learning-progress/', UserLearningProgressList.as_view(), name='learning-progress-list'),
    # path('learning-progress/create/', UserLearningProgressCreate.as_view(), name='learning-progress-create'),
    # URLs for languages opted by a user
    path("languages/", UserLanguageList.as_view(), name="user-language-list"),
    path(
        "languages/create/", UserLanguageCreate.as_view(), name="user-language-create"
    ),
]
