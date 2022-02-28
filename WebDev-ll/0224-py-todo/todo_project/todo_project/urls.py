from django.contrib import admin
from django.urls import path

from todo_app import views

urlpatterns = [
    path('admin/', admin.site.urls),

    #auth

    #todos
    path('', views.home, name='home'),
    path('current/', views.currenttodos, name='currenttodos'),
    path('create/', views.createtodo, name='createtodo')
]