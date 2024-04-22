from django.urls import path
from .views import *

urlpatterns = [
    # ... other patterns
    path('stats/', StatsAPIView.as_view(), name='stats'),
    path('teachers/',teachers_of_institute,name='teachers'),
    path('students/',students_of_institute,name='students'),
    path('upload_students/', upload_students, name='upload-students'),
    path('delete_student/<int:id>', delete_student, name='delete-student'), 
    path('toggle_active/<int:id>', toggle_active_student, name='toggle-active-student'), 
]