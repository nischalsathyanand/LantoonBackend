from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model

class AuthenticationTestCase(APITestCase):

    def setUp(self):
        # Set up any initial data here
        self.user_data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'testpassword',
            'user_type': 'STUDENT',
        }

    def test_registration(self):
        url = reverse('register')
        response = self.client.post(url, self.user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(get_user_model().objects.count(), 1)

    def test_login(self):
        # First, create a user
        get_user_model().objects.create_user(**self.user_data)
        
        login_data = {
            'username': 'testuser',
            'password': 'testpassword'
        }
        url = reverse('login')
        response = self.client.post(url, login_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('token' in response.data)
