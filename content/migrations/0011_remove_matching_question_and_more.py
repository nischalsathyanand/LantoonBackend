# Generated by Django 4.2.6 on 2023-11-29 10:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("learning", "0002_delete_userlearningprogress"),
        ("content", "0010_chapter_active_chapter_visibility"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="matching",
            name="question",
        ),
        migrations.RemoveField(
            model_name="multiplechoiceoption",
            name="question",
        ),
        migrations.RemoveField(
            model_name="question",
            name="learning",
        ),
        migrations.DeleteModel(
            name="Learning",
        ),
        migrations.DeleteModel(
            name="Matching",
        ),
        migrations.DeleteModel(
            name="MultipleChoiceOption",
        ),
        migrations.DeleteModel(
            name="Question",
        ),
    ]
