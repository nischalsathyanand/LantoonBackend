from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import User
from organization.models import Student, Teacher
from organization.serializers import StudentSerializer,TeacherSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'email', 'user_type', 'password','standard','section')
        extra_kwargs = {
            'password': {'write_only': True}
        }


class UserDetailSerializer(serializers.ModelSerializer):
    student = serializers.SerializerMethodField()
    teacher = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'user_type', 'student', 'teacher','standard','section']

    def get_student(self, obj):
        try:
            student = Student.objects.get(user=obj)
            return StudentSerializer(student).data
        except Student.DoesNotExist:
            return None
    
    def get_teacher(self, obj):
        try:
            teacher = Teacher.objects.get(user=obj)
            return {
                'institute': teacher.institute.name,
            }
        except Teacher.DoesNotExist:
            return None