from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.contrib.auth import get_user_model
from .models import Region, Institute

class OrganizationTestCase(APITestCase):

    def setUp(self):
        # Create a test admin user
        self.admin_user = get_user_model().objects.create_superuser(
            username='adminuser',
            password='testpassword'
        )
        self.client = APIClient()

        # Create a test normal user
        self.normal_user = get_user_model().objects.create_user(
            username='normaluser',
            password='testpassword'
        )

        # Set up any initial data here
        self.region_data = {
            'name': 'Test Region',
        }

        self.institute_data = {
            'name': 'Test Institute',
        }

    def test_region_creation_by_admin(self):
        self.client.login(username='adminuser', password='testpassword')
        url = reverse('region-list-create')
        response = self.client.post(url, self.region_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Region.objects.count(), 1)
        self.client.logout()

    def test_region_creation_by_normal_user(self):
        self.client.login(username='normaluser', password='testpassword')
        url = reverse('region-list-create')
        response = self.client.post(url, self.region_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)  # Should be forbidden
        self.client.logout()

    def test_institute_creation_by_admin(self):
        # Assuming region creation works, let's create a region first
        region = Region.objects.create(**self.region_data)
        self.institute_data['region'] = region.id

        self.client.login(username='adminuser', password='testpassword')
        url = reverse('institute-list-create')
        response = self.client.post(url, self.institute_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Institute.objects.count(), 1)
        self.client.logout()

    def test_institute_creation_by_normal_user(self):
        region = Region.objects.create(**self.region_data)
        self.institute_data['region'] = region.id

        self.client.login(username='normaluser', password='testpassword')
        url = reverse('institute-list-create')
        response = self.client.post(url, self.institute_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)  # Should be forbidden
        self.client.logout()
