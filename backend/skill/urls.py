from django.urls import path

from skill.views import AllSkills

urlpatterns = [
    path('', AllSkills.as_view()),
]
