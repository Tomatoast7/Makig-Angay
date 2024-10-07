from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.

class homepageview(TemplateView):
    template_name = 'home.html'

class gtaview(TemplateView):
    template_name = 'GTA.html'

class portfolioview(TemplateView):
    template_name = 'portfolio/index.html'

class faviconview(TemplateView):
    template_name = 'favicon.html'

