from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/consultants/', include('consultant.urls')),
    path('api/projects/', include('user_project.urls')),

    # JWT
    path('token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', views.TokenVerifyView.as_view(), name='token_verify'),
]
