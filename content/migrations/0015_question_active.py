# Generated by Django 4.2.6 on 2023-12-03 10:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("content", "0014_alter_question_questiontype"),
    ]

    operations = [
        migrations.AddField(
            model_name="question",
            name="active",
            field=models.BooleanField(default=True),
        ),
    ]
