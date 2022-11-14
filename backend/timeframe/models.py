from django.db import models


class TimeFrame(models.Model):
    date_started = models.DateField(null=True, blank=True)
    date_finished = models.DateField(null=True, blank=True)

    def __str__(self):
        return f'{self.id}: {self.date_started} - {self.date_finished}'
