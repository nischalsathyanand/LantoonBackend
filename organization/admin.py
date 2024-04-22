from django.contrib import admin
from .models import Region, Institute, Student, Teacher

class TeacherAdmin(admin.ModelAdmin):
    readonly_fields = ('user',)

admin.site.register(Region)
admin.site.register(Institute)
admin.site.register(Student)
admin.site.register(Teacher, TeacherAdmin)