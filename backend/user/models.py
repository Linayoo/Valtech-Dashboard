from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return f'ID {self.id} : {self.username}'
