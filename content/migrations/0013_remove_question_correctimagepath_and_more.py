# Generated by Django 4.2.6 on 2023-12-01 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("content", "0012_question"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="question",
            name="correctImagePath",
        ),
        migrations.AddField(
            model_name="question",
            name="correctImagePath1",
            field=models.URLField(blank=True),
        ),
    ]
