# Generated by Django 3.2.3 on 2021-06-14 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ReleaseInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('release_version', models.CharField(max_length=20)),
                ('release_date', models.DateTimeField(verbose_name='date published')),
            ],
        ),
    ]