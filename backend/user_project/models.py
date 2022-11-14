from django.db import models
from consultant.models import Consultant
from skill.models import Skill
from timeframe.models import TimeFrame


class UserProject(models.Model):
    def upload_to(instance, filename):
        return 'images/{filename}'.format(filename=filename)

    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, blank=True)
    tools = models.ManyToManyField(to=Skill, blank=True, related_name='tools')
    external_link = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to=upload_to, null=True, blank=True)
    assignee = models.ManyToManyField(to=Consultant, blank=True, related_name='assignee')
    time_frame = models.OneToOneField(to=TimeFrame, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f'ID {self.id} : {self.name}'
