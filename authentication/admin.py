from django.contrib import admin
from .models import *

from import_export.admin import ImportExportActionModelAdmin
# Register your models here.

class UserAdmin(ImportExportActionModelAdmin):
    pass

admin.site.register(User,UserAdmin)