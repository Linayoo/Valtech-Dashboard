from django.db import models


class Certificate(models.Model):
    title = models.CharField(max_length=100)
    institution = models.CharField(max_length=100, blank=True)
    date_finished = models.DateField(blank=True)

    def __str__(self):
        return f'ID {self.id} : {self.title}'
