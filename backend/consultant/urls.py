from django.urls import path

from consultant.views import GetAllConsultants, SearchConsultant, \
    CreateConsultantTest, RetrievePatchDeleteConsultant, PatchConsTimeframe

urlpatterns = [
    path('', GetAllConsultants.as_view(), name='get_all_consultants'),
    path('new/', CreateConsultantTest.as_view(), name='create_consultants'),
    path('<int:id>/', RetrievePatchDeleteConsultant.as_view(), name='get_patch_delete_consultants'),
    path('search/', SearchConsultant.as_view(), name='search_consultants'),
    path('patchtf/<int:id>/', PatchConsTimeframe.as_view()),
    # path('patch/<int:id>/', PatchConsultant.as_view()),
    # path('test/<int:id>/', PatchTimeframe.as_view()),
]
