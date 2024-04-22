# Generated by Django 4.2.6 on 2024-01-28 09:28

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("organization", "0005_institute_languages_alter_teacher_user"),
    ]

    operations = [
        migrations.AddField(
            model_name="teacher",
            name="created",
            field=models.DateTimeField(
                auto_now_add=True,
                default=datetime.datetime(
                    2024, 1, 28, 9, 28, 11, 765533, tzinfo=datetime.timezone.utc
                ),
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="teacher",
            name="email",
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AddField(
            model_name="teacher",
            name="last_edited",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name="teacher",
            name="name",
            field=models.TextField(default="dummy"),
            preserve_default=False,
        ),
    ]
