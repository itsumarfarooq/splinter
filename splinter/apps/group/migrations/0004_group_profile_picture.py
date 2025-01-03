# Generated by Django 5.1.4 on 2024-12-31 12:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('group', '0003_alter_groupmembership_options'),
        ('media', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='group',
            name='profile_picture',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='group_profile', to='media.media'),
        ),
    ]
