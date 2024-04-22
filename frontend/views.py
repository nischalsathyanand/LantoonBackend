# Create your views here.
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def learn(request):
    return render(request, 'learn.html')

def lesson(request):
    return render(request, 'lesson.html')

def lesson3(request):
    return render(request, 'lesson3.html')

def profile(request):
    return render(request, 'profile.html')

def register(request):
    return render(request, 'register.html')

def institute(request):
    print("eayea")
    return render(request, 'institute.html')
