from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.home, name='homepage'),
    path('<str:pk>', views.single_post, name='single_post')
]