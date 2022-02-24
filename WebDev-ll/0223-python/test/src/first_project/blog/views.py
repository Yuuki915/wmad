from django.shortcuts import render
from .models import Post

# Create your views here.

def blog(req):

    all_posts = Post.objects.all()
    return render(req, 'blog/blog.html', { 'posts' : all_posts})

def single_post(req, whateverstringiputhere):

    single_post = Post.objects.get(slug=whateverstringiputhere)
    return render(req, 'blog/single_post.html', { 'post' : single_post })