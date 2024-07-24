from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    ROLES = (
        ('regular', 'Regular'),
        ('admin', 'Admin'),
    )
    role = models.CharField(choices=ROLES, default='regular', max_length=10)
    number = models.CharField(unique=True, max_length=20)
    email = models.EmailField(unique=True, max_length=50)