# Generated by Django 4.2.7 on 2024-02-16 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0011_alter_student_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='section',
            field=models.CharField(blank=True, max_length=32),
        ),
        migrations.AddField(
            model_name='student',
            name='standard',
            field=models.CharField(blank=True, max_length=32),
        ),
    ]
