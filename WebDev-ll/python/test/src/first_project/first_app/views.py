from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h1>Hello World!</h1>")

def hoge(request):
    return HttpResponse('<h1>HOEEE</h1>')

def show_age(request, age):
    if(age < 18):
        return HttpResponse("I am %s years old." % age)
    else:
        return HttpResponse("I am %s and I am legal ... ;))" % age)