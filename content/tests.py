from django.urls import reverse
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Language, Chapter, Lesson, Learning, Question
from django.contrib.auth import get_user_model

class ContentModuleTests(TestCase):

    def setUp(self):
        self.client = APIClient()

        # Set up a sample language, chapter, lesson, and learning.
        self.language = Language.objects.create(name='Test Language')
        self.chapter = Chapter.objects.create(language=self.language, title='Test Chapter', order=1)
        self.lesson = Lesson.objects.create(chapter=self.chapter, title='Test Lesson', order=1)
        self.learning = Learning.objects.create(lesson=self.lesson, text='Test Learning', image='path/to/test/image.jpg', audio='path/to/test/audio.mp3', order=1)



        # The following line sets a token for a test user.
        self.normal_user = get_user_model().objects.create_user(
            username='normaluser',
            password='testpassword'
        )
        
    def test_get_languages(self):
        self.client.login(username='normaluser', password='testpassword')
        response = self.client.get(reverse('language-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_get_chapters_for_language(self):
        self.client.login(username='normaluser', password='testpassword')
        url = reverse('language-chapters-list', args=[self.language.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_get_lessons_for_chapter(self):
        self.client.login(username='normaluser', password='testpassword')
        url = reverse('chapter-lessons-list', args=[self.language.id, self.chapter.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_get_learnings_for_lesson(self):
        self.client.login(username='normaluser', password='testpassword')
        url = reverse('lesson-learnings-list', args=[self.language.id, self.chapter.id, self.lesson.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    # Continue with other tests...
