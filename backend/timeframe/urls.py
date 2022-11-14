from django.urls import path
from timeframe.views import GetAllTimeFrames, CreateTimeFrame, RetrievePatchDeleteTimeFrame


urlpatterns = [
    path('', GetAllTimeFrames.as_view()),
    path('new/', CreateTimeFrame.as_view()),
    path('<int:id>/', RetrievePatchDeleteTimeFrame.as_view())
]
