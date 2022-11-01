from django.db import models


class TimeFrame(models.Model):
    date_started = models.DateField(null=True, blank=True)
    date_finished = models.DateField(null=True, blank=True)

