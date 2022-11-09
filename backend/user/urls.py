from django.urls import path
from user.views import GetUserProfile

urlpatterns = [
    path('', GetUserProfile.as_view())
]
