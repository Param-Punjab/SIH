from django.db import models

# Create your models here.


class Expert(models.Model):
    name = models.CharField(max_length=100)
    expertise = models.TextField()
    experience = models.IntegerField()
    qualifications = models.TextField()

class Candidate(models.Model):
    name = models.CharField(max_length=100)
    expertise = models.TextField()
    qualifications = models.TextField()
