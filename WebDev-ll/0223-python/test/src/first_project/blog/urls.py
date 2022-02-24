from django.urls import path
from . import views

urlpatterns = [
    path('', views.blog, name='blog'),
    path('<str:whateverstringiputhere>', views.single_post, name='single_post')
]