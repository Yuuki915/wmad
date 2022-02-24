from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# def index(request):
#     return HttpResponse("<h1>Hello World!</h1>")

# def hoge(request):
#     return HttpResponse('<h1>HOEEE~</h1>')

# def show_age(request, age):
#     if(age < 18):
#         return HttpResponse("I am %s years old." % age)
#     else:
#         return HttpResponse("I am %s and I am legal ...... ;))" % age)


def home(request):
    return render(request, 'first_app/home.html')
def about(request):
    return render(request, 'first_app/about.html')
def search(request):
    return render(request, 'first_app/search.html')