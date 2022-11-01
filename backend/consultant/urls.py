from django.urls import path

from consultant.views import GetAllConsultants, CreateConsultant, RetrievePatchDeleteConsultant, SearchConsultant

urlpatterns = [
    path('', GetAllConsultants.as_view()),
    path('new/', CreateConsultant.as_view()),
    path('<int:id>/', RetrievePatchDeleteConsultant.as_view()),
    path('search/', SearchConsultant.as_view()),
    # path('test/<int:id>/', PatchTimeframe.as_view()),
]