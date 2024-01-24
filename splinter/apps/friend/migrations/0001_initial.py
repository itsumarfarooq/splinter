# Generated by Django 5.0.1 on 2024-01-24 09:27

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Friendship',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('removed_at', models.DateTimeField(blank=True, db_index=True, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                (
                    'source',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='friends',
                        to=settings.AUTH_USER_MODEL
                    )
                ),
                (
                    'target',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL
                    )
                ),
            ],
            options={
                'db_table': 'user_friendships',
                'unique_together': {('source', 'target')},
            },
        ),
    ]
