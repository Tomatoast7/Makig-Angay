from django.urls import path
from . import views

urlpatterns = [
            # Function name in the views.py
    #path('', homepageview.as_view(), name='home'),
    path('', views.gtaview.as_view(), name='GTA'),
    path('portfolio/', views.portfolioview.as_view(), name='index'),
    path('favicon/', views.faviconview.as_view(), name='favicon')
]