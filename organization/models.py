from django.db import models
from django.conf import settings
from content.models import Language
from authentication.models import User
import string
import random

def get_random_string(length=12, allowed_chars=string.ascii_letters + string.digits):
    """
    Generate a random string of the specified length using the given set of allowed characters.

    :param length: The length of the random string to generate.
    :param allowed_chars: The set of characters to use for generating the random string.
    :return: The generated random string.
    """
    return "_"+''.join(random.choice(allowed_chars) for _ in range(length))


class Region(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Institute(models.Model):
    name = models.CharField(max_length=255)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    languages = models.ManyToManyField(Language,related_name='languages')
    def __str__(self):
        return self.name

class Student(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='student',null=True,blank=True)
    institute = models.ForeignKey(Institute, on_delete=models.SET_NULL, null=True,blank=True)
    name = models.CharField(max_length=255, blank=True,null=True)
    password = models.CharField(max_length=32,blank=True)
    standard = models.CharField(max_length=32,blank=True)
    section = models.CharField(max_length=32,blank=True)
    # profile_picture = models.ImageField(upload_to='static/profile_pictures')
    created = models.DateTimeField(auto_now_add=True)
    last_edited = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        creating = not self.pk  # Check if the object is being created
        if creating and not self.user:
            username = ''.join(self.name.split()).lower() if self.name else get_random_string()
            while User.objects.filter(username=username).exists():
                username += get_random_string(length=4)
            new_user = User.objects.create_user(username=username, password=self.password)
            self.user = new_user
        elif self.user and self.password:  # If updating and there's a password, update the user's password
            self.user.set_password(self.password)
            self.user.save()
        super(Student, self).save(*args, **kwargs)

class Teacher(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='teacher', null=True, blank=True)
    institute = models.ForeignKey(Institute, on_delete=models.SET_NULL, null=True)
    password = models.CharField(max_length=32, blank=True)
    name = models.CharField(max_length=255, blank=False)
    email = models.EmailField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    last_edited = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username if self.user else self.name

    def save(self, *args, **kwargs):
        creating = not self.pk  # Check if the object is being created
        if creating and not self.user:
            username = ''.join(self.name.split()).lower()
            while User.objects.filter(username=username).exists():
                username += get_random_string(length=4)
            new_user = User.objects.create_user(username=username, password=self.password)
            self.user = new_user
        elif self.user and self.password:  # If updating and there's a password, update the user's password
            self.user.set_password(self.password)
            self.user.save()
        super(Teacher, self).save(*args, **kwargs)