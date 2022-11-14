from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views

from project import settings

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/consultants/', include('consultant.urls')),
    path('backend/api/projects/', include('user_project.urls')),
    path('backend/api/timeframes/', include('timeframe.urls')),
    path('backend/api/languages/', include('language.urls')),
    path('backend/api/skills/', include('skill.urls')),
    path('backend/api/me/', include('user.urls')),

    # JWT
    path('backend/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/token/verify/', views.TokenVerifyView.as_view(), name='token_verify'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
