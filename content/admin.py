from django.contrib import admin
from .models import *
from csvexport.actions import csvexport
from import_export.admin import ImportExportActionModelAdmin
# Register your models here.

class LanguageAdmin(ImportExportActionModelAdmin):
    pass
    
class ChapterAdmin(ImportExportActionModelAdmin):
    pass

class LessonAdmin(ImportExportActionModelAdmin):
    pass

class QuestionAdmin(ImportExportActionModelAdmin):
    list_filter = ("questionType","lesson__chapter__language")

admin.site.register(Language, LanguageAdmin)
admin.site.register(Chapter, ChapterAdmin)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(Question, QuestionAdmin)
# admin.site.register(MultipleChoiceOption)
# admin.site.register(Matching)
