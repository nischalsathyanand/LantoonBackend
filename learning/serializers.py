from rest_framework import serializers
from .models import UserChapterProgress, UserLessonProgress, UserLanguage, Language
from content.serializers import LanguageSerializer


class UserChapterProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserChapterProgress
        fields = "__all__"


class UserLessonProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLessonProgress
        fields = "__all__"


# class UserLearningProgressSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserLearningProgress
#         fields = '__all__'


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = "__all__"


class UserLanguageSerializer(serializers.ModelSerializer):
    language = LanguageSerializer()

    class Meta:
        model = UserLanguage
        fields = "__all__"


class UserLanguageSerializer2(serializers.ModelSerializer):
    class Meta:
        model = UserLanguage
        fields = ["id"]


class UserLessonProgressSerializer2(serializers.ModelSerializer):
    class Meta:
        model = UserLessonProgress
        fields = ["id"]
