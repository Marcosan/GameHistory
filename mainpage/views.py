from django.shortcuts import render


def index(request):
        return render(request, 'mainpage/index.html', {})

def game(request):
        return render(request, 'mainpage/game.html', {})