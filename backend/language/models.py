from django.db import models

from consultant.models import Consultant


class Language(models.Model):
    LEVELS = [
        ('native', 'Native'),
        ('fluent', 'Fluent'),
        ('intermediate', 'Intermediate'),
        ('basic', 'Basic')
    ]

    title = models.CharField(max_length=100)
    level_category = models.CharField(max_length=100, choices=LEVELS)
    consultants = models.ManyToManyField(Consultant, related_name='consultants')

    def __str__(self):
        return f'ID {self.id} : {self.title}'
