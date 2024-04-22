from django.urls import path, re_path
from . import views

urlpatterns = [
    path('learn', views.learn, name='learn'),
    path('lesson', views.lesson, name='lesson'),
    path('lesson3', views.lesson3, name='lesson3'),
    path('profile', views.profile, name='profile'),
    path('register', views.register, name='register'),


    path('dashboard', views.institute, name='institute'),
    path('auth/login', views.institute, name='institute'),
    path('tables', views.institute, name='institute'),
    path('', views.index, name='index'),
    
    # Catch-all for React routing
    re_path(r'^(?:.*)/?$', views.index),
]