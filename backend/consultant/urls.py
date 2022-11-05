from django.urls import path

from consultant.views import GetAllConsultants, CreateConsultant, RetrievePatchDeleteConsultant, SearchConsultant

urlpatterns = [
    path('', GetAllConsultants.as_view(), name='get_all_consultants'),
    path('new/', CreateConsultant.as_view(), name='create_consultants'),
    path('<int:id>/', RetrievePatchDeleteConsultant.as_view(), name='get_patch_delete_consultants'),
    path('search/', SearchConsultant.as_view(), name='search_consultants'),
    # path('test/<int:id>/', PatchTimeframe.as_view()),
]
