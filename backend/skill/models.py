from django.db import models


class Skill(models.Model):
    CATEGORIES = [
        ('competencies', 'Competencies'),
        ('digital platforms', 'Digital Platforms'),
        ('tools and frameworks', 'Tools & Platforms')
    ]

    title = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORIES)

    def __str__(self):
        return f'ID {self.id} : {self.category}'
