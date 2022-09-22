from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post (models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=256, null=False)
    link = models.CharField(max_length=100000, null=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)