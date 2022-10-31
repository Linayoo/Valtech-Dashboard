from django.db import models

from skill.models import Skill


class User_project(models.Model):
    name = models.CharField(max_length=100)
    date_started = models.DateField(blank=True)
    date_finished = models.DateField(blank=True)
    description = models.CharField(max_length=1000, blank=True)
    tools = models.ManyToManyField(to=Skill, blank=True, related_name='tools')
    position = models.CharField(max_length=100, blank=True)
    external_link = models.URLField(blank=True)
    image = models.ImageField(null=True, blank=True) # added image just in case...

    def __str__(self):
        return f'ID {self.id} : {self.name}'
