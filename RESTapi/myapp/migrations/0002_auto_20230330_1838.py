# Generated by Django 3.2.18 on 2023-03-30 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=1000)),
                ('price', models.DecimalField(decimal_places=5, max_digits=50)),
                ('rating', models.DecimalField(decimal_places=1, max_digits=3)),
                ('image', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='Book',
        ),
    ]