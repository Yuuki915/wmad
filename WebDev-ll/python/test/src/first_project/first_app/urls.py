from django.urls import path

from first_app import views

urlpatterns = [
    path('hello/', views.index, name='index'),
    path('hoge', views.hoge, name='hoge'),
    path('<int:age>', views.show_age, name='show_age')
]