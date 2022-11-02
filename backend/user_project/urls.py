from django.urls import path
from user_project.views import GetAllProjects, CreateProject, RetrievePatchDeleteProject, SearchProject


urlpatterns = [
    path('', GetAllProjects.as_view()),
    path('new/', CreateProject.as_view()),
    path('<int:id>/', RetrievePatchDeleteProject.as_view()),
    path('search/', SearchProject.as_view())
]
