import requests
from django.shortcuts import render
from django.http import JsonResponse

def get_data(request):
  response = requests.get('https://source.unsplash.com/random')

  if response.status_code == 200:
        image_url = response.url
  else:
        image_url = None
  return render(request, 'django_project/index.html', {'image_url': image_url})