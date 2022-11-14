from django.urls import path

from language.views import GetAllLanguages

urlpatterns = [
    path('', GetAllLanguages.as_view()),
]
