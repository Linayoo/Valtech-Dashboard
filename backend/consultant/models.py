from django.db import models

from addition_skill.models import Addition_skill
from certificate.models import Certificate
from education.models import Education
from language.models import Language
from skill.models import Skill
from timeframe.models import TimeFrame


class Consultant(models.Model):
    OFFICES = [
        ('Baden', 'Baden'),
        ('Bern', 'Bern'),
        ('Geneva', 'Geneva')
    ]

    ROLES = [
        ('frontend', 'Frontend Developer'),
        ('backend', 'Backend Developer'),
        ('devops', 'DevOps Developer'),
        ('fullstack', 'Fullstack Developer')
    ]

    def upload_to(instance, filename):
        return 'images/{filename}'.format(filename=filename)

    display_name = models.CharField(max_length=100, default="")
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    username = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    office_category = models.CharField(max_length=100, choices=OFFICES, blank=True, null=True)
    email = models.EmailField(unique=False, blank=True, null=True)
    linked_in_link = models.URLField(max_length=200, blank=True, null=True)
    image_path = models.ImageField(upload_to=upload_to, blank=True, null=True)
    summary = models.TextField(null=True)
    is_subcontractor = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_disabled = models.BooleanField(default=False)
    primary_language = models.CharField(max_length=100)
    educations = models.ManyToManyField(to=Education, related_name='educations', blank=True)
    unavailable = models.ManyToManyField(to=TimeFrame, related_name='unavailable', blank=True)
    language_skills = models.ManyToManyField(to=Language, related_name='language_skills', blank=True)
    managed_skills = models.ManyToManyField(to=Skill, related_name='managed_skills', blank=True)
    addition_skills = models.ManyToManyField(to=Addition_skill, related_name='addition_skills', blank=True)
    managed_certificates = models.CharField(max_length=250, blank=True)
    certificates = models.ManyToManyField(to=Certificate, related_name='certificates', blank=True)
    title = models.CharField(max_length=200)
    edited_time = models.DateTimeField(auto_now=True)
    manager_display_name = models.CharField(max_length=100, blank=True)
    profile_id = models.IntegerField(blank=True, null=True)
    profile_slug_id = models.IntegerField(blank=True, null=True)
    manager_on_premises_user_principal_name = models.CharField(max_length=250, blank=True)
    role_category = models.CharField(max_length=100, choices=ROLES)

    def __str__(self):
        return f'ID {self.id} : {self.display_name}'
