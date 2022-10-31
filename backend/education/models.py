from django.db import models


class Education(models.Model):
    title = models.CharField(max_length=100)
    school = models.CharField(max_length=100, blank=True)
    date_finished = models.DateField(blank=True)

    def __str__(self):
        return f'ID {self.id} : {self.title} - {self.date_finished}'
