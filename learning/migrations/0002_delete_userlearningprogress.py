# Generated by Django 4.2.6 on 2023-11-29 10:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("learning", "0001_initial"),
    ]

    operations = [
        migrations.DeleteModel(
            name="UserLearningProgress",
        ),
    ]
