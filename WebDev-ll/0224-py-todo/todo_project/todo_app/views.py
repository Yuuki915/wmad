from django.shortcuts import render, redirect
from .models import Todo
# from .forms import TodoForm

# Create your views here.
def home(req):
    return render(req, 'todo/home.html')

def currenttodos(req):
    # todos = Todo.objects.filter(user=req.user, datecompleted__isnull=True)
    todos = Todo.objects.filter(datecompleted__isnull=True)
    return render(req, 'todo/currenttodos.html', { 'todos' : todos })

def createtodo(req):
    if(req.method == 'GET'):
        return render(req, 'todo/createtodo.html', { 'form': TodoForm() })
    else:
        try:
            # form = TodoForm(req.POST)
            # form.save(commit=False)
            
            # newtodo.user = req.user
            # newtodo.save()
            return redirect('currenttodos')
        except ValueError:
            return render(req, 'todo/createtodo.html', { 'form': TodoForm(), 'error': 'Bad data passed in. Try again' })