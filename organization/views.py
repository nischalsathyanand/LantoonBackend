
import csv
from io import StringIO
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Teacher
from .serializers import TeacherSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Region, Institute, Student, Teacher
from .serializers import RegionSerializer, InstituteSerializer, StudentSerializer, TeacherSerializer
from content.models import Language, Chapter, Question
from authentication.models import User
import random
import string
from io import StringIO
import csv
from rest_framework.response import Response


class RegionListCreate(generics.ListCreateAPIView):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer
    permission_classes = [IsAdminUser]  # Restrict to admin and staff users

class InstituteListCreate(generics.ListCreateAPIView):
    queryset = Institute.objects.all()
    serializer_class = InstituteSerializer
    permission_classes = [IsAdminUser]  # Restrict to admin and staff users

class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAdminUser]  # Restrict to admin and staff users

class TeacherListCreate(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [IsAdminUser]  # Restrict to admin and staff users


class StatsAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        print(user)
        if user.teacher is None:
            return Response({'error': 'Access denied: User is not a teacher'}, status=403)

        teacher = get_object_or_404(Teacher, user=user)
        institute = teacher.institute
        students = Student.objects.filter(institute=institute).count()
        languages = institute.languages.all()
        total_chapters = Chapter.objects.filter(language__in=languages).count()
        total_questions = Question.objects.filter(lesson__chapter__language__in=languages).count()

        data = {
            'institute': institute.name,
            'number_of_students': students,
            'number_of_languages': languages.count(),
            'total_chapters': total_chapters,
            'total_questions': total_questions,
        }

        return Response(data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def teachers_of_institute(request):
    user = request.user
    if hasattr(user, 'teacher'):
        institute = user.teacher.institute
    else:
        return Response({'error': 'User is not a teacher'}, status=400)

    teachers = Teacher.objects.filter(institute=institute)
    serializer = TeacherSerializer(teachers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def students_of_institute(request):
    user = request.user
    if hasattr(user, 'teacher'):
        institute = user.teacher.institute
    else:
        return Response({'error': 'User is not associated with an institute as a teacher'}, status=400)

    students = Student.objects.filter(institute=institute)
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_students(request):
    

    user = request.user
    if 'file' not in request.FILES:
        return Response({'error': 'No file provided.'}, status=400)

    if not hasattr(user, 'teacher'):
        return Response({'error': 'User is not a teacher'}, status=400)

    institute = user.teacher.institute
    file = request.FILES['file']
    if not file.name.endswith('.csv'):
        return Response({'error': 'File is not CSV type.'}, status=400)

    # Assuming file is encoded in UTF-8
    data = file.read().decode('utf-8')
    csv_data = StringIO(data)
    reader = csv.reader(csv_data)

    next(reader, None)  # Skip the header row
    students_to_create = []
    users_to_create = []
    count =0
    for row in reader:
         # Check if 2nd, 3rd, and 4th columns are available
        if len(row) >= 4 and row[1] != "":
            password = row[1]  # Use 2nd column value as password
        else:
            # Generate a random password
            password = ''.join(random.choices(string.ascii_letters + string.digits, k=6))  # Generate a random password
        
        standard = row[2] if len(row) >= 3 else None  # Use 3rd column value as standard if available
        section = row[3] if len(row) >= 4 else None  # Use 4th column value as section if available
        
        # Create a user for each student
        if(row[0]!=""):
            student = Student(name=row[0], institute=institute, password=password, standard=standard, section=section)
            student.save()
            count+=1
        # Prepare student data including the user and password
    #     student_data = {
    #         'name': row[0],
    #         'institute': institute,
    #         'password': password,
    #         # Add other fields from the CSV as needed
    #     }
    #     students_to_create.append(Student(**student_data))

    # # Save all users and students in bulk
    # Student.objects.bulk_create(students_to_create)
    
    return Response({'status': f'{count} students created successfully.'})


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_student(request,id):
    user = request.user
    student_id = id

    if not student_id:
        return Response({'error': 'Student ID is required'}, status=400)

    if not hasattr(user, 'teacher'):
        return Response({'error': 'User is not a teacher'}, status=403)

    student_to_delete = get_object_or_404(Student, id=student_id)
    if student_to_delete.institute != user.teacher.institute:
        return Response({'error': 'Teacher and student do not belong to the same institute'}, status=403)

    student_to_delete.delete()
    return Response({'status': 'Student deleted successfully'})



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def toggle_active_student(request,id):
    user = request.user
    student_id = id

    if not student_id:
        return Response({'error': 'Student ID is required'}, status=400)

    if not hasattr(user, 'teacher'):
        return Response({'error': 'User is not a teacher'}, status=403)

    student_to_delete = get_object_or_404(Student, id=student_id)
    if student_to_delete.institute != user.teacher.institute:
        return Response({'error': 'Teacher and student do not belong to the same institute'}, status=403)

    student_to_delete.user.is_active = not student_to_delete.user.is_active
    student_to_delete.user.save()
    return Response({'status': 'Student deleted successfully'})