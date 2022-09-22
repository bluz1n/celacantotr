from .models import Post, User
from django.http import JsonResponse, HttpResponse

# Create your views here.

def index(request):
    if request.method == 'GET' :
        return HttpResponse('<h1>homepage</h1>')

def posts(request, username):
    if request.method == 'GET' :
        user = User.objects.get(username=username)
        posts = Post.objects.filter(owner=user.id) 
        postsJson = []

        for i in posts:
            postsJson.append({
                'title': i.title,
                'link': i.link
            })

        return JsonResponse(postsJson, safe=False)